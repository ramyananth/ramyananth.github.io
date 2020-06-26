import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'
import Education from '../components/Gallery/components/Education'
import Language from '../components/Gallery/components/Language'
import Work from '../components/Gallery/components/Work'
import WebTech from '../components/Gallery/components/WebTech'
import Web from '../components/Gallery/components/Web'
import Database from '../components/Gallery/components/Database'
import Cloud from '../components/Gallery/components/Cloud'
import Tools from '../components/Gallery/components/Tools'
import MachineLearning from '../components/Gallery/components/MachineLearning'

const HomeIndex = () => {
  const siteTitle = 'Ramya Ananth Portfolio'
  const siteDescription = "Ramya's Portfolio"

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>About Me</h2>
          </header>
          <p>
            I'm a Computer science master's degree graduate from NCSU. I have a
            passion for technology and business analytics. I love building
            things: from impactful internships to personal initiatives, I keep
            myself busy learning new things and honing my craft. Currently, I'm
            working on a bettering my full-stack development skills using Gatsby
            - React! My past work revolves around web appication development,
            data analysis, machine learning and open source contributions.
          </p>
          <p>
            Outside of work and side projects, you can find me trekking at
            nearby trails, attempting to replicate recipes from "What's Cooking
            in Esther's Kitchen", and trying to get my SEO beat other Ramya's in
            the world. I also enjoy swimming, trekking, jigsaw puzzles and yoga.
          </p>
        </section>

        <section id="two">
          <header className="major">
            <h2>Work Experience</h2>
          </header>
          <Work />
        </section>

        <section id="three">
          <header className="major">
            <h2>Technical Skills</h2>
          </header>
          <h2>Languages</h2>
          <Language />
          <h2>Web Technologies</h2>
          <WebTech />
          <Web />
          <h2>SQL/NoSQL Databases</h2>
          <Database />
          <h2>Cloud</h2>
          <Cloud />
          <h2>Tools</h2>
          <Tools />
          <h2>ML Frameworks</h2>
          <MachineLearning />
        </section>

        <section id="four">
          <header className="major">
            <h2>Recent Work</h2>
          </header>

          {/* <Gallery /> */}

          <ul className="actions">
            <li>
              <a
                href="https://github.com/ramyananth/"
                className="button"
                target="_blank"
              >
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="five">
          <header className="major">
            <h2>Education</h2>
          </header>
          <Education />
        </section>

        <section>
          <h2>Get In Touch</h2>
          <p>
            Have a project for me? Think I'd be a good fit for your
            organization? <br />
            I'd love to connect and discuss with you. <br />
            Looking forward to it. Thanks!
          </p>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  813-892-4736
                </li>
                <li>
                  <h3 className="icon fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </h3>
                  <a href="https://linkedin.com/in/ramyananth">LinkedIn</a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:ramyananth96@gmail.com">
                    ramyananth96@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
