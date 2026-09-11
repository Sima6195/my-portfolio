import { Link } from 'react-router-dom'


function Skills() {

  return (

    <main>

      {/* ================= PAGE HEADER ================= */}

      <section className="page-header dark-header">

        <p className="section-label">
          MY SKILLS & EXPERTISE
        </p>


        <h1>
          Technologies & Capabilities
        </h1>


        <p>
          Tools, frameworks, database systems, and work readiness skills I utilize
          in full-stack web development.
        </p>

      </section>


      {/* ================= TECHNICAL SKILLS ================= */}

      <section className="skills-page">

        <div className="skills-section-header">

          <p className="section-label">
            STACK
          </p>

          <h2>
            Technical Skills
          </h2>

        </div>


        <div className="skills-grid">


          {/* REACT */}

          <div className="skill-card">

            <div className="skill-icon">
              ⚛
            </div>

            <h3>
              React.js
            </h3>

            <p>
              Front-End UI & Components
            </p>

          </div>


          {/* NODE.JS */}

          <div className="skill-card">

            <div className="skill-icon">
              ⬢
            </div>

            <h3>
              Node.js
            </h3>

            <p>
              Server Runtime Environment
            </p>

          </div>


          {/* EXPRESS */}

          <div className="skill-card">

            <div className="skill-icon">
              ex
            </div>

            <h3>
              Express.js
            </h3>

            <p>
              RESTful APIs & Routing
            </p>

          </div>


          {/* POSTGRESQL */}

          <div className="skill-card">

            <div className="skill-icon">
              🐘
            </div>

            <h3>
              PostgreSQL
            </h3>

            <p>
              Relational Database Management
            </p>

          </div>


          {/* JAVASCRIPT */}

          <div className="skill-card">

            <div className="skill-icon">
              JS
            </div>

            <h3>
              JavaScript
            </h3>

            <p>
              Core Web Programming
            </p>

          </div>


          {/* GIT */}

          <div className="skill-card">

            <div className="skill-icon">
              ⌥
            </div>

            <h3>
              Git & GitHub
            </h3>

            <p>
              Version Control & Collaboration
            </p>

          </div>


          {/* FIGMA */}

          <div className="skill-card">

            <div className="skill-icon">
              ❖
            </div>

            <h3>
              Figma
            </h3>

            <p>
              UI/UX Implementation & Design
            </p>

          </div>


          {/* CLOUDINARY */}

          <div className="skill-card">

            <div className="skill-icon">
              ☁
            </div>

            <h3>
              Cloudinary
            </h3>

            <p>
              Media Management & Cloud Storage
            </p>

          </div>


        </div>


        {/* ================= SOFT SKILLS & WORK READINESS ================= */}

        <div className="soft-skills-section">

          <div className="skills-section-header">

            <p className="section-label">
              WORK READINESS
            </p>

            <h2>
              Soft Skills & Strengths
            </h2>

          </div>


          <div className="soft-skills-grid">

            <div className="soft-skill-card">

              <div className="soft-skill-badge">
                OVERALL STRENGTH
              </div>

              <h3>
                Continuous Learning
              </h3>

              <p>
                Actively researches new tools, technologies, and methodologies,
                treating learning as an ongoing, everyday part of development practice.
              </p>

            </div>


            <div className="soft-skill-card">

              <div className="soft-skill-badge">
                MOST IMPROVED
              </div>

              <h3>
                Communication
              </h3>

              <p>
                Grown in confidence within team environments, vocal in technical
                discussions, presenting ideas clearly, and actively engaging in team sessions.
              </p>

            </div>


            <div className="soft-skill-card">

              <div className="soft-skill-badge">
                TEAM DELIVERY
              </div>

              <h3>
                Collaborative Problem-Solving
              </h3>

              <p>
                Works effectively in structured team-based workflows, methodically
                debugging issues and contributing steadily to feature implementation.
              </p>

            </div>


            <div className="soft-skill-card">

              <div className="soft-skill-badge">
                ACCOUNTABILITY
              </div>

              <h3>
                Methodical & Accountable
              </h3>

              <p>
                Researches solutions proactively before escalating issues, maintaining
                ownership and accountability across sprint deliverables.
              </p>

            </div>

          </div>

        </div>


        {/* ================= BUTTON ================= */}

        <div className="page-button-container">

          <Link
            to="/projects"
            className="primary-page-button"
          >
            View My Projects →
          </Link>

        </div>

      </section>

    </main>

  )
}


export default Skills