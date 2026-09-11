import { Link } from 'react-router-dom'
import profilePic from './assets/IMG_4653.jpeg'


function Home() {

  return (

    <main>

      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="welcome">
            JUNIOR FULL-STACK DEVELOPER
          </p>


          <h1>
            Hi, I'm <span>Simamkele</span>
          </h1>


          <h2>
            I Build Modern Web Applications
          </h2>


          <p className="hero-text">
            Simamkele is a proactive Junior Full-Stack Developer with
            experience working across React.js front-end interfaces
            and Node.js/Express back-end systems. She approaches
            development with curiosity and persistence, contributing
            steadily to feature implementation, database integration,
            and structured team-based delivery.
          </p>


          <div className="hero-buttons">

            <Link
              to="/projects"
              className="primary-button"
            >
              View My Projects
            </Link>


            <Link
              to="/contact"
              className="secondary-button"
            >
              Contact Me
            </Link>

          </div>

        </div>


        {/* ================= PROFILE CARD ================= */}

        <div className="hero-card">

          <div className="profile-image-container">
            <img
              src={profilePic}
              alt="Simamkele Mampondo"
              className="profile-img"
            />
            <div className="profile-status-badge">
              <span className="status-dot"></span> Available for Opportunities
            </div>
          </div>


          <div className="hero-card-info">

            <h3>
              Simamkele Mampondo
            </h3>


            <p>
              Junior Full-Stack Developer
            </p>


            <div className="profile-line"></div>


            <span className="hero-stack-tags">
              React.js • Node.js • Express • PostgreSQL
            </span>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="home-intro">

        <p className="section-label">
          WELCOME
        </p>


        <h2>
          Building My Future in Technology
        </h2>


        <p>
          I am developing my skills in full-stack development
          by building responsive React.js interfaces and robust
          Node.js/Express APIs backed by PostgreSQL databases.
        </p>


        <Link
          to="/about"
          className="dark-button"
        >
          Learn More About Me →
        </Link>

      </section>

    </main>

  )
}


export default Home