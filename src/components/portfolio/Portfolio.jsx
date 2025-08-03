import React from 'react'
import './portfolio.css'
// ...existing code...
import IMG4 from '../../assets/r3.png'

const data = [
  {
    id: 1,
    image: IMG4,
    title: 'FYP: Coherent Configurations on Non-Structured Graphs',
    subtext: 'Exploring graph operations on strongly regular graphs and their effect on coherent configurations. Abstract: Many regularly structured graphs, such as strongly regular graphs, have been extensively studied, and their spectral and algebraic properties are well documented in the literature. In contrast, the study of non-structured graphs remains limited, largely due to the difficulty of systematically constructing and analyzing them. This project explores whether simple graph operations—such as vertex deletion and switching—performed on strongly regular graphs can produce non-structured graphs, and examines how these operations affect their associated coherent configurations.',
    github: 'https://github.com/yujiho1910/FinalYearProject',
    demo: 'https://github.com/yujiho1910/FinalYearProject/blob/main/deliverables/report.pdf'
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