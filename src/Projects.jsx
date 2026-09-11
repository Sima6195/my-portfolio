import { Link } from 'react-router-dom'


function Projects() {

  return (

    <main>

      {/* ================= PAGE HEADER ================= */}

      <section className="page-header">

        <p className="section-label">
          MY PROJECTS
        </p>


        <h1>
          Projects I've Worked On
        </h1>


        <p>
          Selected project experience where I have applied my front-end,
          back-end, database, and collaborative problem-solving skills.
        </p>

      </section>


      {/* ================= PROJECTS ================= */}

      <section className="section projects-page">

        <div className="projects-grid">


          {/* PROJECT 1 - BIDZONE */}

          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                01
              </div>


              <span className="project-type">
                TEAM PROJECT • LEARNERSHIP
              </span>

            </div>


            <h3>
              Bidzone Smartphone Bidding App
            </h3>


            <p>
              A web-based auction platform enabling auctioneers to create live
              bidding sessions and users to participate in real-time smartphone auctions.
            </p>


            <div className="contributions-section">

              <h4 className="contributions-title">
                Key Contributions:
              </h4>

              <ul className="contributions-list">

                <li>
                  Implemented UI components based on Figma design specifications
                </li>

                <li>
                  Contributed to database setup and back-end communication
                </li>

                <li>
                  Supported feature development and debugging within a team-based workflow
                </li>

              </ul>

            </div>


            <div className="project-tags">

              <span>React.js</span>

              <span>Node.js</span>

              <span>Express</span>

              <span>PostgreSQL</span>

              <span>JavaScript</span>

              <span>CSS</span>

              <span>Bootstrap</span>

              <span>Figma</span>

              <span>Git</span>

            </div>


            <div className="project-footer">

              <span>
                Real-Time Auction & Bidding Platform
              </span>


              <span className="arrow">
                →
              </span>

            </div>

          </div>


          {/* PROJECT 2 - CITYFIX */}

          <div className="project-card">

            <div className="project-top">

              <div className="project-icon">
                02
              </div>


              <span className="project-type">
                FULL-STACK PROJECT
              </span>

            </div>


            <h3>
              CityFix Municipality App
            </h3>


            <p>
              A municipal service application that allows residents to report
              community issues such as water, sanitation, electricity, roads
              and waste problems.
            </p>


            <div className="contributions-section">

              <h4 className="contributions-title">
                Key Highlights:
              </h4>

              <ul className="contributions-list">

                <li>
                  Created responsive interfaces for community issue logging
                </li>

                <li>
                  Integrated RESTful API endpoints and database management
                </li>

                <li>
                  Implemented category filtering and issue tracking status
                </li>

              </ul>

            </div>


            <div className="project-tags">

              <span>Angular</span>

              <span>Java</span>

              <span>Spring Boot</span>

              <span>PostgreSQL</span>

              <span>REST API</span>

              <span>Git</span>

            </div>


            <div className="project-footer">

              <span>
                Municipality Services & Community Reporting
              </span>


              <span className="arrow">
                →
              </span>

            </div>

          </div>


        </div>


        {/* ================= BUTTON ================= */}

        <div className="page-button-container">

          <Link
            to="/contact"
            className="primary-page-button"
          >
            Contact Me →
          </Link>

        </div>

      </section>

    </main>

  )
}


export default Projects