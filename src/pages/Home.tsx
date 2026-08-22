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
                href="/work/media-metadata"
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
                    02 / IT + SYSTEMS DESIGN
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


            {/* PATRIOTHACKS */}
            <a
              href="/work/patriothacks"
              className="project-card project-link"
            >
              <div className="project-placeholder">
                PatriotHacks Designs
              </div>

              <div className="project-info">
                <p className="project-number">03 / DESIGN + MARKETING</p>

                <h3>PatriotHacks</h3>

                <p>
                  Promotional graphics and digital content created to support
                  hackathon outreach, announcements, and event branding.
                </p>

                <div className="tags">
                  <span>Graphic Design</span>
                  <span>Branding</span>
                  <span>Social Media</span>
                </div>
              </div>
            </a>

            {/* GRAPHIC DESIGN */}
            <a
              href="/work/graphic-design"
              className="project-card project-link"
            >
              <div className="project-placeholder">
                Graphic Design Work
              </div>

              <div className="project-info">
                <p className="project-number">04 / VISUAL DESIGN</p>

                <h3>Graphic Design</h3>

                <p>
                  Branded visual materials created for training, documentation,
                  company events, and professional communication.
                </p>

                <div className="tags">
                  <span>Adobe Creative Cloud</span>
                  <span>Layout</span>
                  <span>Typography</span>
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