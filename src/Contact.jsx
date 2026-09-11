function Contact() {

    return (
  
      <main>
  
        {/* ================= CONTACT ================= */}
  
        <section className="contact-page">
  
          <div className="contact-page-content">
  
            <p className="section-label">
              GET IN TOUCH
            </p>
  
  
            <h1>
              Let's Connect
            </h1>
  
  
            <p className="contact-text">
              I am actively open to Junior Full-Stack Developer opportunities,
              collaborations, and conversations in software engineering. Feel
              free to reach out via email, phone, or LinkedIn.
            </p>
  
  
            <div className="contact-buttons">
  
  
              {/* EMAIL */}
  
              <a
                href="mailto:simamkelemampondo01@gmail.com"
                className="contact-button primary-contact-btn"
              >
                <span>
                  @
                </span>
  
                Email Me
  
              </a>
  
  
              {/* PHONE */}
  
              <a
                href="tel:0789024267"
                className="contact-button"
              >
                <span>
                  📞
                </span>
  
                078 902 4267
  
              </a>
  
  
              {/* LINKEDIN */}
  
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                <span>
                  in
                </span>
  
                LinkedIn
  
              </a>
  
  
              {/* GITHUB */}
  
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="contact-button"
              >
                <span>
                  GH
                </span>
  
                GitHub
  
              </a>
  
  
            </div>
  
          </div>
  
        </section>
  
  
        {/* ================= CONTACT INFO ================= */}
  
        <section className="contact-info-section">
  
  
          <div className="contact-info-card">
  
            <span>
              EMAIL
            </span>
  
  
            <h3>
              simamkelemampondo01@gmail.com
            </h3>
  
          </div>
  
  
          <div className="contact-info-card">
  
            <span>
              PHONE
            </span>
  
  
            <h3>
              078 902 4267
            </h3>
  
          </div>
  
  
          <div className="contact-info-card">
  
            <span>
              LOCATION
            </span>
  
  
            <h3>
              South Africa
            </h3>
  
          </div>
  
  
          <div className="contact-info-card">
  
            <span>
              AVAILABLE FOR
            </span>
  
  
            <h3>
              Junior Developer Roles
            </h3>
  
          </div>
  
  
        </section>
  
      </main>
  
    )
  }
  
  
  export default Contact