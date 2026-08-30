import type { Project } from "../data/projects";

type Props = {
  project: Project;
};

function ProjectCaseStudy({ project }: Props) {
  return (
    <main className="case-study">
      <section className="case-hero">
        <a href="/#work" className="back-link">
          ← Back to Work
        </a>

        <p className="case-category">
          {project.number} / {project.category}
        </p>

        <h1>{project.title}</h1>

        <p className="case-summary">{project.summary}</p>

        <div className="case-meta">
          <div>
            <span>YEAR</span>
            <p>{project.year}</p>
          </div>

          <div>
            <span>ROLE</span>

            {project.role.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div>
            <span>TOOLS</span>

            {project.tools.map((tool) => (
              <p key={tool}>{tool}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="case-media-placeholder">
        <span>PROJECT MEDIA COMING SOON</span>
      </section>

      <section className="case-content">
        <div className="case-section">
          <p className="case-label">01 / OVERVIEW</p>
          <h2>About the project</h2>
          <p>{project.overview}</p>
        </div>

        <div className="case-section">
          <p className="case-label">02 / CHALLENGE</p>
          <h2>The problem</h2>
          <p>{project.challenge}</p>
        </div>

        <div className="case-section">
          <p className="case-label">03 / PROCESS</p>
          <h2>My approach</h2>

          <div className="process-list">
            {project.approach.map((step, index) => (
              <div className="process-item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="case-secondary-placeholder">
          <span>ADDITIONAL SCREENSHOTS / PROCESS MEDIA</span>
        </section>

        <div className="case-section">
          <p className="case-label">04 / OUTCOME</p>
          <h2>Result</h2>
          <p>{project.outcome}</p>
        </div>
      </section>

      <section className="next-project">
        <p>EXPLORE MORE WORK</p>
        <a href="/#work">View all projects →</a>
      </section>
    </main>
  );
}

export default ProjectCaseStudy;