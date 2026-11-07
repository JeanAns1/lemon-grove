import { useState } from 'react'
import { restaurant } from '../data/site'
import './Reservation.css'

const empty = { name: '', email: '', phone: '', date: '', time: '19:30', people: '2', note: '' }
const times = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00']

// set VITE_FORM_ENDPOINT (Formspree, Getform...) to receive requests by email
const endpoint = import.meta.env.VITE_FORM_ENDPOINT

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Your name is required'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Enter a valid email'
  if (!form.date) errors.date = 'Choose a date'
  return errors
}

export default function Reservation() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length) return

    setStatus('sending')
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error()
      }
      setStatus('sent')
      setForm(empty)
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section reservation" id="reserve">
      <div className="container reservation__inner">
        <div>
          <span className="kicker">Reservations</span>
          <h2 className="title">Book your table</h2>
          <p>
            Fill in the form and we will confirm your booking by email. For groups of more than 8
            people, please call us at <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a>.
          </p>
        </div>

        {status === 'sent' ? (
          <div className="reservation__card reservation__done">
            <h3>Thank you!</h3>
            <p>Your request has been sent. We will get back to you shortly.</p>
            <button className="btn btn--olive" onClick={() => setStatus('idle')}>
              New booking
            </button>
          </div>
        ) : (
          <form className="reservation__card" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={form.name} onChange={update} />
              {errors.name && <small>{errors.name}</small>}
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" value={form.email} onChange={update} />
                {errors.email && <small>{errors.email}</small>}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" value={form.phone} onChange={update} />
              </div>
            </div>

            <div className="field-row field-row--3">
              <div className="field">
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" value={form.date} onChange={update} />
                {errors.date && <small>{errors.date}</small>}
              </div>
              <div className="field">
                <label htmlFor="time">Time</label>
                <select id="time" name="time" value={form.time} onChange={update}>
                  {times.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="people">People</label>
                <select id="people" name="people" value={form.people} onChange={update}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="note">Note (optional)</label>
              <textarea id="note" name="note" rows="3" value={form.note} onChange={update} />
            </div>

            {status === 'error' && <p className="reservation__error">Something went wrong, please try again or call us.</p>}

            <button className="btn btn--olive" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send request'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
