import Plate from '../components/Plate'
import { restaurant } from '../data/site'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <span className="kicker">{restaurant.tagline}</span>
          <h1>
            Mediterranean plates, <em>made from scratch.</em>
          </h1>
          <p>
            Fresh pasta, grilled fish and garden vegetables, served on a shaded terrace in the heart
            of the old town.
          </p>
          <div className="hero__actions">
            <a href="#reserve" className="btn btn--lemon">
              Book a table
            </a>
            <a href="#menu" className="btn btn--ghost">
              See the menu
            </a>
          </div>
          <ul className="hero__facts">
            <li>
              <strong>Open daily</strong>
              12pm – 11pm
            </li>
            <li>
              <strong>Terrace</strong>
              60 seats
            </li>
            <li>
              <strong>Takeaway</strong>
              Available
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__lemon" />
          <Plate variant="pasta" className="hero__plate hero__plate--main" />
          <Plate variant="salad" className="hero__plate hero__plate--small" />
        </div>
      </div>
    </section>
  )
}
