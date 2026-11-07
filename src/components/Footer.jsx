import { restaurant } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__logo">{restaurant.name}</span>
        <div className="footer__social">
          <a href={restaurant.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={restaurant.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
        <span>© {new Date().getFullYear()} {restaurant.name}</span>
      </div>
    </footer>
  )
}
