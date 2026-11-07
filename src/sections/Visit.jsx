import { useState } from 'react'
import { restaurant } from '../data/site'
import './Visit.css'

const hours = [
  { days: 'Monday – Thursday', time: '12pm – 10pm' },
  { days: 'Friday – Saturday', time: '12pm – 11pm' },
  { days: 'Sunday', time: '11am – 9pm' },
]

export default function Visit() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`

  const subscribe = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section className="section" id="visit">
      <div className="container visit">
        <div>
          <span className="kicker">Visit us</span>
          <h2 className="title">Find us in the old town</h2>

          <div className="visit__block">
            <h3>Address</h3>
            <p>{restaurant.address}</p>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="visit__link">
              Open in Google Maps →
            </a>
          </div>

          <div className="visit__block">
            <h3>Opening hours</h3>
            {hours.map((h) => (
              <div key={h.days} className="visit__hour">
                <span>{h.days}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>

          <div className="visit__block">
            <h3>Contact</h3>
            <p>
              <a href={`tel:${restaurant.phone}`}>{restaurant.phone}</a>
              <br />
              <a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>
            </p>
          </div>
        </div>

        <div className="visit__side">
          <div className="visit__map" aria-label="Map">
            <span className="visit__pin" />
          </div>

          <form className="newsletter" onSubmit={subscribe}>
            <h3>Seasonal menu news</h3>
            <p>One email per season, with the new menu and our events. No spam.</p>
            {subscribed ? (
              <p className="newsletter__ok">You're on the list, thank you!</p>
            ) : (
              <div className="newsletter__row">
                <input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
                <button className="btn btn--lemon">Subscribe</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
