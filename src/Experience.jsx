import { Link } from 'react-router-dom'


function Experience() {

  return (

    <main>

      {/* ================= PAGE HEADER ================= */}

      <section className="page-header dark-header">

        <p className="section-label">
          CAREER HISTORY
        </p>


        <h1>
          Work Experience
        </h1>


        <p>
          My professional background in full-stack software development,
          database integration, administrative operations, and structured team delivery.
        </p>

      </section>


      {/* ================= EXPERIENCE LIST ================= */}

      <section className="section experience-page">

        <div className="experience-container">


          {/* ROLE 1 */}

          <div className="experience-detail-card">

            <div className="exp-top-row">

              <div>

                <span className="exp-tag">
                  CURRENT ROLE
                </span>

                <h2>
                  Junior Full-Stack Developer
                </h2>

                <p className="exp-company-name">
                  Learnership Programme
                </p>

              </div>

              <span className="exp-period">
                2025 – Present
              </span>

            </div>


            <p className="exp-summary">
              Working across React.js front-end interfaces and Node.js/Express back-end systems.
              Contributing steadily to feature implementation, database integration, debugging,
              and structured team-based delivery.
            </p>


            <div className="exp-duties-box">

              <h4>Key Responsibilities & Achievements:</h4>

              <ul>

                <li>
                  Developed full-stack web applications using React.js frontend interfaces and Node.js/Express REST APIs.
                </li>

                <li>
                  Designed relational PostgreSQL schemas and built robust endpoints for real-time data communication.
                </li>

                <li>
                  Contributed to team-based projects like the BidZone smartphone bidding application with live auction workflows.
                </li>

                <li>
                  Translated Figma design specifications accurately into responsive, accessible web components.
                </li>

                <li>
                  Supported debugging, troubleshooting, and code maintenance within structured agile workflows.
                </li>

              </ul>

            </div>


            <div className="project-tags">

              <span>React.js</span>

              <span>Node.js</span>

              <span>Express</span>

              <span>PostgreSQL</span>

              <span>JavaScript</span>

              <span>CSS / Bootstrap</span>

              <span>Figma</span>

              <span>Git & GitHub</span>

            </div>

          </div>


          {/* ROLE 2 */}

          <div className="experience-detail-card">

            <div className="exp-top-row">

              <div>

                <span className="exp-tag">
                  LOGISTICS & OPERATIONS
                </span>

                <h2>
                  Admin Clerk
                </h2>

                <p className="exp-company-name">
                  Imperial Logistics
                </p>

              </div>

              <span className="exp-period">
                2022 – 2024
              </span>

            </div>


            <p className="exp-summary">
              Managed data entry, logistical documentation, invoice processing, and cross-border
              truck coordination with high precision and accountability.
            </p>


            <div className="exp-duties-box">

              <h4>Key Responsibilities:</h4>

              <ul>

                <li>
                  Processed shipment bookings, invoices, and maintained comprehensive digital and physical records.
                </li>

                <li>
                  Sorted and distributed internal and external correspondence, ensuring rapid communication across teams.
                </li>

                <li>
                  Utilized enterprise office applications and database software to support daily administrative operations.
                </li>

                <li>
                  Assisted logistics contractors and drivers with cross-border transport documentation and compliance.
                </li>

              </ul>

            </div>


            <div className="project-tags">

              <span>Invoice Processing</span>

              <span>Records Management</span>

              <span>Cross-Border Logistics</span>

              <span>Data Entry</span>

              <span>Office Operations</span>

            </div>

          </div>


          {/* ROLE 3 */}

          <div className="experience-detail-card">

            <div className="exp-top-row">

              <div>

                <span className="exp-tag">
                  HUMAN RESOURCES
                </span>

                <h2>
                  HR Administrator
                </h2>

                <p className="exp-company-name">
                  BHBW
                </p>

              </div>

              <span className="exp-period">
                2021 – 2022
              </span>

            </div>


            <p className="exp-summary">
              Supported organizational human resources administration, recruitment coordination,
              and confidential employee database maintenance.
            </p>


            <div className="exp-duties-box">

              <h4>Key Responsibilities:</h4>

              <ul>

                <li>
                  Handled interview scheduling and onboarding communications for new and existing employees.
                </li>

                <li>
                  Maintained and updated internal employee databases and personnel records.
                </li>

                <li>
                  Managed HR documentation, administrative filings, and assisted with internal team reporting.
                </li>

              </ul>

            </div>


            <div className="project-tags">

              <span>HR Administration</span>

              <span>Employee Database</span>

              <span>Recruitment Coordination</span>

              <span>Confidential Records</span>

            </div>

          </div>


        </div>


        {/* ================= BUTTON ================= */}

        <div className="page-button-container">

          <Link
            to="/education"
            className="primary-page-button"
          >
            View My Education →
          </Link>

        </div>

      </section>

    </main>

  )
}


export default Experience
