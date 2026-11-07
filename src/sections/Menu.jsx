import { useState } from 'react'
import { menu } from '../data/menu'
import './Menu.css'

const categories = Object.keys(menu)

export default function Menu() {
  const [active, setActive] = useState(categories[0])

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="menu__head">
          <span className="kicker">The menu</span>
          <h2 className="title">Simple food, done well</h2>
        </div>

        <div className="menu__tabs" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={cat === active}
              className={cat === active ? 'is-active' : ''}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <ul className="menu__list">
          {menu[active].map((dish) => (
            <li key={dish.name}>
              <div className="menu__line">
                <h3>{dish.name}</h3>
                <span className="menu__dots" />
                <span className="menu__price">${dish.price}</span>
              </div>
              <p>
                {dish.text}
                {dish.tags?.map((tag) => (
                  <span key={tag} className="menu__tag">
                    {tag}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>

        <p className="menu__legend">V vegetarian · VG vegan · Please tell us about any allergy.</p>
      </div>
    </section>
  )
}
