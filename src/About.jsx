import { Link } from 'react-router-dom'


function About() {

  return (

    <main>

      {/* ================= PAGE HEADER ================= */}

      <section className="page-header">

        <p className="section-label">
          ABOUT ME
        </p>


        <h1>
          Who I Am
        </h1>


        <p>
          Learn more about my professional journey, strengths, and core background
          as a Junior Full-Stack Developer.
        </p>

      </section>


      {/* ================= ABOUT CARDS ================= */}

      <section className="section">

        <div className="about-content">


          <div className="about-card">

            <div className="about-number">
              01
            </div>


            <div>

              <h3>
                Proactive Junior Developer
              </h3>


              <p>
                Simamkele is a proactive Junior Full-Stack Developer with
                experience working across React.js front-end interfaces and
                Node.js/Express back-end systems. She approaches development
                with curiosity and persistence, contributing steadily to
                feature implementation, database integration, and structured
                team-based delivery.
              </p>

            </div>

          </div>


          <div className="about-card">

            <div className="about-number">
              02
            </div>


            <div>

              <h3>
                Best Overall Strength | Continuous Learning
              </h3>


              <p>
                Simamkele actively researches new tools, technologies,
                and methodologies, treating learning as an ongoing part
                of her development practice.
              </p>

            </div>

          </div>


          <div className="about-card">

            <div className="about-number">
              03
            </div>


            <div>

              <h3>
                Most Improved Skill | Communication
              </h3>


              <p>
                She has grown in confidence within team environments,
                becoming more vocal in discussions, presenting ideas
                clearly, and engaging more actively in collaborative
                problem-solving.
              </p>

            </div>

          </div>

        </div>


        {/* ================= SHAPER REVIEW ================= */}

        <div className="shaper-review-container">

          <div className="shaper-review-card">

            <p className="section-label">
              PROFESSIONAL ENDORSEMENT
            </p>

            <h2>
              Shaper Review
            </h2>

            <div className="quote-mark">“</div>

            <p className="review-quote">
              Simamkele approaches technical challenges methodically and often
              researches solutions before escalating issues. She contributes
              consistently to feature development and debugging efforts,
              maintaining accountability within structured team environments.
            </p>

            <span className="reviewer-tag">
              — Shaper Review
            </span>

          </div>

        </div>


        {/* ================= BUTTONS ================= */}

        <div className="page-button-container" style={{ gap: '15px' }}>

          <Link
            to="/skills"
            className="primary-page-button"
          >
            View My Skills →
          </Link>

          <Link
            to="/experience"
            className="primary-page-button"
            style={{ background: '#111111' }}
          >
            View Work Experience →
          </Link>

        </div>

      </section>

    </main>

  )
}


export default About