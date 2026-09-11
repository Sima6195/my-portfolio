import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  useLocation
} from 'react-router-dom'
import { useEffect } from 'react'

import './App.css'

import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Education from './Education'
import Contact from './Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <ScrollToTop />
      <div className="portfolio">
        {/* ================= NAVBAR ================= */}
        <nav className="navbar">
          <Link to="/" className="logo">
            <span>S</span>M
          </Link>

          <div className="nav-links">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/about">
              About
            </NavLink>

            <NavLink to="/skills">
              Skills
            </NavLink>

            <NavLink to="/projects">
              Projects
            </NavLink>

            <NavLink to="/experience">
              Experience
            </NavLink>

            <NavLink to="/education">
              Education
            </NavLink>

            <NavLink to="/contact">
              Contact
            </NavLink>
          </div>
        </nav>

        {/* ================= PAGES ================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* ================= FOOTER ================= */}
        <footer>
          <div className="footer-left">
            <Link to="/" className="footer-logo">
              SM
            </Link>

            <div>
              <p className="footer-name">simamkelemampondo01@gmail.com</p>
              <p>Junior Full-Stack Developer</p>
            </div>
          </div>

          <div className="footer-right">
            <p>© 2026 Simamkele Mampondo</p>
            <p>Built with React</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
