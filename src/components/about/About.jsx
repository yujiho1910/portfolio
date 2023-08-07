import React from 'react'
import './about.css'
import ME from '../../assets/chocobear.png'
import {HiAcademicCap} from 'react-icons/hi'
import {RiComputerFill} from 'react-icons/ri'
import {FaFolderOpen} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about moosemoose" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiComputerFill className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years coding experience</small>
            </article>

            <article className='about__card'>
              <HiAcademicCap className='about__icon'/>
              <h5>Awards</h5>
              <small>Dean's List AY21/22</small>
            </article>
            
            <article className='about__card'>
              <FaFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3 completed</small>
            </article>
          </div>

          <p>
          I’m Jing Rui, a student majoring in Mathematical and Computer Sciences.
I have always been passionate in math from a young age and after exploring the technology industry, I am interested in pursuing a career that combines both Computing and Mathematics. As such, Data Science and Machine Learning are my main interests, alongside understanding algorithms and ways to apply them to real life.          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About