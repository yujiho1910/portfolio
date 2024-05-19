import React from "react";
import "./experience.css";
import { TiTick } from "react-icons/ti";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__languages">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>HTML/CSS/JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>R</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF LANGUAGES */}

        <div className="experience__frameworks">
          <h3>Frameworks</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Flask</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Django</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRAMEWORKS */}

        <div className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Jupyter</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>RStudio</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Microsoft Azure</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <TiTick className="experience__details-icon" />
              <div>
                <h4>Amazon Web Services</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF TOOLS */}
      </div>
    </section>
  );
};

export default Experience;
