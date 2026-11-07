import Plate from '../components/Plate'
import './About.css'

const values = [
  { title: 'Local market', text: 'Vegetables and fish bought every morning from local producers.' },
  { title: 'Homemade', text: 'Pasta, bread and desserts are prepared in our kitchen every day.' },
  { title: 'Wine list', text: 'A short selection of natural wines, also served by the glass.' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__inner">
        <div className="about__visual">
          <Plate variant="fish" />
        </div>
        <div>
          <span className="kicker">Our story</span>
          <h2 className="title">A small kitchen with a big garden</h2>
          <p>
            Lemon Grove started in 2019 in an old family house, with a lemon tree in the courtyard
            and a simple idea: cook what is fresh today. The menu changes with the seasons, and
            everything is made in-house.
          </p>
          <div className="about__values">
            {values.map((v) => (
              <div key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
