import "./App.css";

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="nav-logo">Hamna.</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-small">HELLO, I'M</p>

          <h1>
            Hamna <span>Fathima</span>
          </h1>

          <h2 className="hero-role">
            Computer Science Engineering Student
          </h2>

          <div className="hero-stack">
            <span>CSE</span>
            <span>•</span>
            <span>AI</span>
            <span>•</span>
            <span>SOFTWARE</span>
          </div>

          <p className="hero-description">
            I build software, explore Artificial Intelligence, and turn
            ideas into practical real-world projects.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>

          </div>

        </div>


        <div className="hero-image">
          <div className="circle">HF</div>
        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section about-section">

        <div className="section-heading">
          <p>GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>
        </div>


        <div className="about-content">

          <div className="about-text">

            <h3>Computer Science Student & Developer</h3>

            <p>
              I'm a Computer Science Engineering student passionate about
              software development, Artificial Intelligence and problem
              solving.
            </p>

            <p>
              I enjoy building practical projects that combine technology
              with real-world problems. Currently, I'm improving my skills
              in Java, Python, DSA, AI and application development.
            </p>

            <p>
              My goal is to continuously learn, build meaningful projects
              and grow into a strong software engineer.
            </p>

          </div>


          <div className="about-box">

            <div className="about-item">
              <h4>🎓 Education</h4>
              <p>B.Tech Computer Science Engineering</p>
            </div>

            <div className="about-item">
              <h4>💻 Focus</h4>
              <p>Software Development & AI</p>
            </div>

            <div className="about-item">
              <h4>🚀 Goal</h4>
              <p>Build impactful technology</p>
            </div>

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section projects-section">

        <div className="section-heading">

          <p>WHAT I'VE BUILT</p>

          <h2>
            My <span>Projects</span>
          </h2>

        </div>


        <div className="projects-grid">


          {/* ================= PROJECT 1 ================= */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">01</span>
              <span className="project-type">MOBILE APP</span>
            </div>

            <h3>VibeConnect</h3>

            <p>
              A social connection platform designed to help people find
              companions for activities such as studying, gaming, walking,
              travelling and more.
            </p>

            <div className="project-tags">
              <span>Flutter</span>
              <span>Firebase</span>
              <span>AI</span>
            </div>

            <div className="project-actions">

              <a href="#" className="project-link">
                View Project →
              </a>

            </div>

          </div>


          {/* ================= PROJECT 2 ================= */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">02</span>
              <span className="project-type">DATABASE SYSTEM</span>
            </div>

            <h3>Leave Management System</h3>

            <p>
              A database-based leave management system designed for
              students and teachers to manage and track leave requests
              efficiently.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>SQL</span>
              <span>Database</span>
            </div>

            <div className="project-actions">

              <a
                href="https://github.com/hamnafathimah/Leavemanagmentsystem.git"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

            </div>

          </div>


          {/* ================= PROJECT 3 ================= */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">03</span>
              <span className="project-type">ANDROID</span>
            </div>

            <h3>Phone-Controlled Robot</h3>

            <p>
              An Android application designed to control and interact
              with a phone-based robot using voice commands and
              AI-powered interaction.
            </p>

            <div className="project-tags">
              <span>Android</span>
              <span>Java</span>
              <span>AI</span>
            </div>

            <div className="project-actions">

              <a href="#" className="project-link">
                View Project →
              </a>

            </div>

          </div>


          {/* ================= PROJECT 4 ================= */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">04</span>
              <span className="project-type">AI / RAG</span>
            </div>

            <h3>Government Scheme Finder</h3>

            <p>
              An AI-based application that helps users discover relevant
              government schemes using semantic search and document
              retrieval.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>LangChain</span>
              <span>FAISS</span>
            </div>

            <div className="project-actions">

              <a
                href="https://github.com/hamnafathimah/Governmentschemefinder"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

            </div>

          </div>


          {/* ================= PROJECT 5 ================= */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">05</span>
              <span className="project-type">DESKTOP APP</span>
            </div>

            <h3>Weatherly App</h3>

            <p>
              A desktop weather application that retrieves weather
              information through an API and displays it using a simple
              graphical interface.
            </p>

            <div className="project-tags">
              <span>Java</span>
              <span>Swing</span>
              <span>API</span>
            </div>

            <div className="project-actions">

              <a
                href="https://github.com/hamnafathimah/wheatherly.git"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                GitHub →
              </a>

            </div>

          </div>


          {/* ================= PROJECT 6 ================= */}
          <div className="project-card">

            <div className="project-top">
              <span className="project-number">06</span>
              <span className="project-type">SYSTEMS</span>
            </div>

            <h3>OS Traffic Management</h3>

            <p>
              A traffic management simulation using multiple threads
              and synchronization mechanisms to control traffic flow
              across multiple lanes.
            </p>

            <div className="project-tags">
              <span>C</span>
              <span>Threads</span>
              <span>Mutex</span>
            </div>

            <div className="project-actions">

              <a href="#" className="project-link">
                View Project →
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section skills-section">

        <div className="section-heading">

          <p>WHAT I WORK WITH</p>

          <h2>
            My <span>Skills</span>
          </h2>

        </div>


        <div className="skills-grid">

          <div className="skill-card">
            <h3>Java</h3>
            <p>Programming & DSA</p>
          </div>

          <div className="skill-card">
            <h3>Python</h3>
            <p>AI & Data Science</p>
          </div>

          <div className="skill-card">
            <h3>Flutter</h3>
            <p>Mobile Development</p>
          </div>

          <div className="skill-card">
            <h3>Android</h3>
            <p>App Development</p>
          </div>

          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>ML Fundamentals</p>
          </div>

          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>Version Control</p>
          </div>

          <div className="skill-card">
            <h3>SQL</h3>
            <p>Database</p>
          </div>

          <div className="skill-card">
            <h3>HTML & CSS</h3>
            <p>Web Development</p>
          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="section contact-section">

        <div className="section-heading">

          <p>LET'S CONNECT</p>

          <h2>
            Contact <span>Me</span>
          </h2>

        </div>


        <div className="contact-content">

          <div className="contact-text">

            <h3>Have an idea or opportunity?</h3>

            <p>
              I'm always interested in learning, collaborating and
              working on interesting technology projects.
            </p>

            <p>
              Feel free to reach out through email or connect with me
              on GitHub and LinkedIn.
            </p>

          </div>


          <div className="contact-links">


            {/* EMAIL */}
            <a
              href="mailto:hamnafathimah2006@gmail.com"
              className="contact-card"
            >

              <span>📧</span>

              <div>
                <h4>Email</h4>
                <p>hamnafathimah2006@gmail.com</p>
              </div>

            </a>


            {/* GITHUB */}
            <a
              href="https://github.com/hamnafathimah"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <span>💻</span>

              <div>
                <h4>GitHub</h4>
                <p>View my repositories</p>
              </div>

            </a>


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/hamna-fathima-129404349/"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <span>🔗</span>

              <div>
                <h4>LinkedIn</h4>
                <p>Connect with me</p>
              </div>

            </a>

          </div>

        </div>


        {/* ================= RESUME ================= */}
        <div className="resume-section">

          <p>Want to know more about my experience?</p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            View Resume
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-logo">
          Hamna.
        </div>

        <p>
          © 2026 Hamna Fathima. Built with React.
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>

        </div>

      </footer>

    </div>
  );
}

export default App;