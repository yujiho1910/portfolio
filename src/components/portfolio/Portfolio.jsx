import React from 'react'
import './portfolio.css'
// ...existing code...
import IMG1 from '../../assets/r3.png'
import IMG2 from '../../assets/chopsticks.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Final Year Project',
    subtext: 'Exploring how graph operations on strongly regular graphs affect coherent configurations. Project investigating vertex deletion and switching operations on non-structured graphs.',
    github: 'https://github.com/yujiho1910/FinalYearProject',
    demo: 'https://github.com/yujiho1910/FinalYearProject/blob/main/deliverables/report.pdf'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chopsticks Game',
    subtext: 'A digital recreation of the classic childhood strategy game beloved by Singaporean children. Interactive web game with modern design and nostalgic gameplay.',
    github: 'https://github.com/yujiho1910/chopsticks',
    demo: 'https://yujiho1910.github.io/chopsticks'
  }
] 
  
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, subtext, github, demo}) => {
            return (
                <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small className='text-light'>{subtext}</small>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' rel="noreferrer" target="_blank">GitHub</a>
                  <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
                </div>
              </article>
              ) 
          })
        }
      </div>
    </section>
  )
}

export default Portfolio