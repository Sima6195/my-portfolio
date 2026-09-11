import { Link } from 'react-router-dom'


function Education() {

  return (

    <main>

      {/* ================= PAGE HEADER ================= */}

      <section className="page-header">

        <p className="section-label">
          ACADEMIC QUALIFICATIONS
        </p>


        <h1>
          Education & Credentials
        </h1>


        <p>
          Formal qualifications, N6 certifications, full-stack software training,
          and communication proficiencies.
        </p>

      </section>


      {/* ================= EDUCATION CARDS ================= */}

      <section className="section education-page">

        <div className="education-grid">


          {/* QUALIFICATION 1 */}

          <div className="edu-card highlight-edu">

            <div className="edu-top">

              <span className="edu-icon">
              </span>

              <span className="edu-badge">
                TECH QUALIFICATION
              </span>

            </div>

            <span className="edu-period">
              2025 – 2026
            </span>

            <h3>
              Full-Stack Software Development
            </h3>

            <p className="edu-institution">
              Learnership Programme
            </p>

            <p className="edu-desc">
              Comprehensive hands-on training across modern web development,
              relational databases, REST APIs, and agile team delivery.
            </p>

            <div className="certificate-box">

              <div className="cert-info">
                <span className="cert-icon"></span>
                <span className="cert-label">Certificate</span>
              </div>

              <a
                href="#upload-certificate"
                className="cert-upload-btn"
                title="View certificate document"
              >
                View Certificate
              </a>

            </div>

          </div>


          {/* QUALIFICATION 2 */}

          <div className="edu-card">

            <div className="edu-top">

              <span className="edu-icon">
              </span>

              <span className="edu-badge">
                N6 QUALIFICATION
              </span>

            </div>

            <span className="edu-period">
              2016 – 2018
            </span>

            <h3>
              Public Relations – N6
            </h3>

            <p className="edu-institution">
              King Sabatha Dalindyebo College
            </p>

            <p className="edu-desc">
              National qualification focusing on professional communication,
              public relations, stakeholder coordination, and business administration.
            </p>

            <div className="certificate-box">

              <div className="cert-info">
                <span className="cert-icon"></span>
                <span className="cert-label">Certificate</span>
              </div>

              <a
                href="#upload-certificate"
                className="cert-upload-btn"
                title="View certificate document"
              >
                View Certificate
              </a>

            </div>

          </div>


          {/* QUALIFICATION 3 */}

          <div className="edu-card">

            <div className="edu-top">

              <span className="edu-icon">
              </span>

              <span className="edu-badge">
                SECONDARY EDUCATION
              </span>

            </div>

            <span className="edu-period">
              Completed
            </span>

            <h3>
              Matric Certificate
            </h3>

            <p className="edu-institution">
              High School
            </p>

            <p className="edu-desc">
              Completed secondary education foundational studies with strong analytical
              and problem-solving skills.
            </p>

            <div className="certificate-box">

              <div className="cert-info">
                <span className="cert-icon"></span>
                <span className="cert-label">Certificate</span>
              </div>

              <a
                href="#upload-certificate"
                className="cert-upload-btn"
                title="View certificate document"
              >
                View Certificate
              </a>

            </div>

          </div>


        </div>


        {/* ================= LANGUAGES SECTION ================= */}

        <div className="languages-showcase-box">

          <p className="section-label">
            MULTILINGUAL PROFICIENCY
          </p>

          <h2>
            Languages
          </h2>

          <div className="languages-grid">

            <div className="language-item">

              <div className="lang-flag">EN</div>

              <div>
                <h4>English</h4>
                <p>Professional Working Proficiency</p>
              </div>

            </div>

            <div className="language-item">

              <div className="lang-flag">XH</div>

              <div>
                <h4>isiXhosa</h4>
                <p>Native Language</p>
              </div>

            </div>

            <div className="language-item">

              <div className="lang-flag">ZU</div>

              <div>
                <h4>isiZulu</h4>
                <p>Fluent Proficiency</p>
              </div>

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


export default Education