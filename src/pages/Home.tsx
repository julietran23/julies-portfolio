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
            {/* FEATURED PROJECT */}
            <a
                href="/work/media-metadata"
                className="project-card featured project-link"
            >
              <div className="project-placeholder">
                Media Metadata Screenshot
              </div>

              <div className="project-info">
                <p className="project-number">01 / DEVELOPMENT + UI/UX</p>

                <h3>Digital Asset Management Application</h3>

                <p>
                  A full-stack application for indexing, searching, tagging,
                  filtering, and retrieving video files across local and
                  centralized storage.
                </p>

                <div className="tags">
                  <span>Full Stack</span>
                  <span>UI/UX</span>
                  <span>TypeScript</span>
                  <span>PostgreSQL</span>
                  <span>Docker</span>
                </div>
              </div>
            </a>

            {/* VIDEO PROJECT */}
            <a
              href="/work/marketing-video"
              className="project-card project-link"
            >
              <div className="project-placeholder">
                Marketing Video Preview
              </div>

              <div className="project-info">
                <p className="project-number">02 / VIDEO + MARKETING</p>

                <h3>Company Marketing Video</h3>

                <p>
                  A recruiting and marketing video developed through planning,
                  filming, editing, stakeholder collaboration, and final
                  delivery.
                </p>

                <div className="tags">
                  <span>Video Production</span>
                  <span>Editing</span>
                  <span>Marketing</span>
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