import "./App.css";

function App() {
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
      </main>
    </div>
  );
}

export default App;