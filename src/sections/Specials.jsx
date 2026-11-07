import Plate from '../components/Plate'
import { specials } from '../data/menu'
import './Specials.css'

export default function Specials() {
  return (
    <section className="section" id="specials">
      <div className="container">
        <span className="kicker">House favorites</span>
        <h2 className="title">What our guests order most</h2>

        <div className="specials">
          {specials.map((dish) => (
            <article key={dish.name} className="special">
              <Plate variant={dish.plate} className="special__plate" />
              <h3>{dish.name}</h3>
              <p>{dish.text}</p>
              <strong>${dish.price}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
