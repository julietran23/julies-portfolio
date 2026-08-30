import "../App.css";

function Home() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="/" className="logo">
          JULIE TRAN
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <p className="eyebrow">CREATIVE TECHNOLOGIST & DESIGNER</p>

          <h1>
            I build at the intersection of
            <span> technology, design & media.</span>
          </h1>

          <p className="description">
            I'm Julie Tran, an Information Technology student creating digital
            experiences through web development, UI/UX, graphic design, video
            production, and marketing.
          </p>

          <div className="hero-buttons">
            <a href="#work" className="primary-button">
              View My Work
            </a>

            <a href="#about" className="secondary-button">
              About Me
            </a>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="work" id="work">
          <div className="section-heading">
            <p>SELECTED WORK</p>
            <h2>Projects</h2>
          </div>

          <div className="project-grid">
            <a
                href="/work/Digital-Asset-Management-Application"
                className="project-card featured project-link"
            >
                <div className="project-placeholder">
                Application Screenshot Coming Soon
                </div>

                <div className="project-info">
                <p className="project-number">
                    01 / FULL-STACK DEVELOPMENT + UI/UX
                </p>

                <h3>Digital Asset Management Application</h3>

                <p>
                    An internally deployed media-management platform that indexes
                    centralized video storage and makes assets searchable through
                    metadata, tags, thumbnails, filters, and timestamp annotations.
                </p>

                <div className="tags">
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>PostgreSQL</span>
                    <span>Docker</span>
                    <span>FFmpeg</span>
                </div>
                </div>
            </a>

            <a
                href="/work/media-storage-architecture"
                className="project-card project-link"
            >
                <div className="project-placeholder">
                Architecture Diagram
                </div>

                <div className="project-info">
                <p className="project-number">
                    02 / IT SOLUTIONS & SYSTEMS DESIGN
                </p>

                <h3>Media Storage Architecture & Taxonomy</h3>

                <p>
                    Redesigned a fragmented media-storage workflow into a centralized
                    shared asset hub with standardized taxonomy, active storage, archival
                    storage, and a scalable migration path.
                </p>

                <div className="tags">
                    <span>Systems Design</span>
                    <span>Information Architecture</span>
                    <span>File Management</span>
                </div>
                </div>
            </a>

<a
                href="/work/Capstone-Project"
                className="project-card project-link"
            >
                <div className="project-placeholder">
                Architecture Diagram
                </div>

                <div className="project-info">
                <p className="project-number">
                    03 / IT SOLUTIONS + MOBILE DEVELOPMENT
                </p>

                <h3>George Mason University Capstone Project</h3>

                <p>
                    Developed a full-stack web application for managing and visualizing educational data.
                </p>

                <div className="tags">
                    <span>UI/UX Design</span>
                    <span>Figma</span>
                    <span>Flutter</span>
                </div>
                </div>
            </a>

            {/* PATRIOTHACKS */}
            <a
              href="/work/patriothacks"
              className="project-card project-link"
            >
              <div className="project-placeholder">
                PatriotHacks Designs
              </div>

              <div className="project-info">
                <p className="project-number">04 / DESIGN + MARKETING</p>

                <h3>PatriotHacks</h3>

                <p>
                  Promotional graphics and digital content created to support
                  hackathon outreach, announcements, and event branding.
                </p>

                <div className="tags">
                  <span>Graphic Design</span>
                  <span>Branding</span>
                  <span>Digital Marketing</span>
                  <span>Video Production</span>
                </div>
              </div>
            </a>

            {/* MULTIMEDIA INTERNSHIP */}
            <a
              href="/work/multimedia-Internship"
              className="project-card project-link"
            >
              <div className="project-placeholder">
                Multimedia Work
              </div>

              <div className="project-info">
                <p className="project-number">05 / MULTIMEDIA</p>

                <h3>Multimedia Internship</h3>

                <p>
                  Branded visual materials created for training, documentation,
                  company events, and professional communication.
                </p>

                <div className="tags">
                  <span>Adobe Creative Cloud</span>
                  <span>Branding</span>
                  <span>Graphic Design</span>
                  <span>Video Production</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;