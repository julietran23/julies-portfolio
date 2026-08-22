import { Link } from "react-router-dom";

function MediaStorageArchitecture() {
  return (
    <main className="case-study">
      {/* HERO */}
      <section className="case-study-hero architecture-hero">
        <div className="case-container">
          <Link to="/#work" className="back-link">
            ← Back to Work
          </Link>

          <p className="case-eyebrow">02 / IT + SYSTEMS DESIGN</p>

          <h1>Media Storage Architecture & Taxonomy</h1>

          <p className="case-lead">
            Restructuring a fragmented media-storage workflow into a centralized
            shared asset system designed for consistency, accessibility, and
            future scalability.
          </p>

          <div className="case-meta-grid">
            <div>
              <span>YEAR</span>
              <p>2026</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>Systems Design</p>
              <p>Information Architecture</p>
            </div>

            <div>
              <span>FOCUS</span>
              <p>Media Storage</p>
              <p>Taxonomy</p>
            </div>

            <div>
              <span>STATUS</span>
              <p>Implemented</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="case-container case-section">
        <div className="case-section-label">
          <span>01</span>
          <p>CONTEXT</p>
        </div>

        <div className="case-section-content">
          <h2>A growing media library without a dedicated file server</h2>

          <p>
            Media assets were distributed across computers, external drives,
            and local storage. This made the location of footage dependent on
            individual devices and created an inconsistent workflow for
            accessing, organizing, and sharing files.
          </p>

          <p>
            A dedicated file server or NAS was not available at the time, so
            the solution needed to improve the existing workflow using hardware
            that was already available.
          </p>
        </div>
      </section>

      {/* OLD VS NEW */}
      <section className="case-soft-section">
        <div className="case-container case-section">
          <div className="case-section-label">
            <span>02</span>
            <p>OLD VS NEW</p>
          </div>

          <div className="case-section-content">
            <h2>From fragmented storage to a shared asset hub</h2>

            <div className="case-large-placeholder image-ready-placeholder">
              <p>ADD OLD SYSTEM → NEW SYSTEM DIAGRAM HERE</p>

              <span>
                Save the diagram as
                /public/images/media-storage-architecture.png
              </span>
            </div>

            {/*
              Once the image is in public/images, replace the placeholder above
              with:

              <img
                className="case-study-image"
                src="/images/media-storage-architecture.png"
                alt="Diagram comparing the previous distributed media storage workflow with the new centralized shared asset system"
              />
            */}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="case-container case-section">
        <div className="case-section-label">
          <span>03</span>
          <p>THE PROBLEM</p>
        </div>

        <div className="case-section-content">
          <h2>The original workflow created several points of failure</h2>

          <div className="case-card-grid">
            <article className="case-info-card">
              <h3>Inconsistent file paths</h3>
              <p>
                Media locations varied depending on the computer, external
                drive, or user storing the asset.
              </p>
            </article>

            <article className="case-info-card">
              <h3>Fragile asset management</h3>
              <p>
                Moving or renaming files could make existing editing workflows
                harder to maintain.
              </p>
            </article>

            <article className="case-info-card">
              <h3>Limited accessibility</h3>
              <p>
                Media could depend on a particular person's computer or storage
                device being available.
              </p>
            </article>

            <article className="case-info-card">
              <h3>Limited scalability</h3>
              <p>
                The workflow became increasingly difficult to manage as more
                footage was created.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="case-dark-section">
        <div className="case-container case-section case-section-dark">
          <div className="case-section-label">
            <span>04</span>
            <p>SOLUTION</p>
          </div>

          <div className="case-section-content">
            <h2>Creating a practical file-server alternative</h2>

            <p>
              I restructured the existing media environment so the media-room
              computer could act as the central access point for shared assets.
              This provided a practical alternative to a dedicated file server
              using infrastructure that was already available.
            </p>

            <div className="architecture-flow">
              <div className="architecture-node">
                <span>01</span>
                <strong>Camera Footage</strong>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-node">
                <span>02</span>
                <strong>Central Media Computer</strong>
                <p>Shared asset hub</p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-node">
                <span>03</span>
                <strong>Standardized Taxonomy</strong>
                <p>Consistent folder and asset organization</p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-node">
                <span>04</span>
                <strong>Active Storage</strong>
                <p>Current production assets</p>
              </div>

              <div className="architecture-arrow">+</div>

              <div className="architecture-node">
                <span>05</span>
                <strong>Archive Storage</strong>
                <p>Older media preserved separately</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORAGE MODEL */}
      <section className="case-container case-section">
        <div className="case-section-label">
          <span>05</span>
          <p>STORAGE MODEL</p>
        </div>

        <div className="case-section-content">
          <h2>Separating active media from archive storage</h2>

          <p>
            The redesigned system uses separate storage responsibilities rather
            than treating every asset as equally active.
          </p>

          <div className="storage-comparison">
            <div className="storage-column">
              <p className="storage-heading">ACTIVE STORAGE</p>

              <div className="storage-box">
                <p>Current media library</p>
                <p>New footage</p>
                <p>Frequently accessed assets</p>
                <p>Primary shared workflow</p>
              </div>
            </div>

            <div className="storage-link-arrow">+</div>

            <div className="storage-column">
              <p className="storage-heading">ARCHIVE STORAGE</p>

              <div className="storage-box">
                <p>Older footage</p>
                <p>Approximately first half of 2025 and earlier</p>
                <p>Preserved historical assets</p>
                <p>Reduced clutter in active storage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAXONOMY */}
      <section className="case-soft-section">
        <div className="case-container case-section">
          <div className="case-section-label">
            <span>06</span>
            <p>TAXONOMY</p>
          </div>

          <div className="case-section-content">
            <h2>Creating a predictable organizational system</h2>

            <p>
              I created a standardized taxonomy so new media would be placed
              into predictable locations rather than relying on inconsistent
              naming and individual organization habits.
            </p>

            <div className="case-large-placeholder">
              <p>TAXONOMY DIAGRAM / FOLDER STRUCTURE COMING SOON</p>
              <span>
                This can later show an example hierarchy without exposing
                internal directory names.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MIGRATION */}
      <section className="case-container case-section">
        <div className="case-section-label">
          <span>07</span>
          <p>MIGRATION</p>
        </div>

        <div className="case-section-content">
          <h2>Restructuring existing assets without disrupting production</h2>

          <p>
            I securely transferred and reorganized existing media into the new
            storage model while accounting for the risk of breaking references
            used by existing editing projects.
          </p>

          <div className="vertical-process">
            <div>
              <span>01</span>
              <p>Review existing storage locations</p>
            </div>

            <div>
              <span>02</span>
              <p>Define the standardized taxonomy</p>
            </div>

            <div>
              <span>03</span>
              <p>Separate active and archival assets</p>
            </div>

            <div>
              <span>04</span>
              <p>Securely transfer files into the redesigned system</p>
            </div>

            <div>
              <span>05</span>
              <p>Preserve legacy assets where movement could introduce risk</p>
            </div>

            <div>
              <span>06</span>
              <p>Establish the new workflow for future media</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW WORKFLOW */}
      <section className="case-dark-section">
        <div className="case-container case-section case-section-dark">
          <div className="case-section-label">
            <span>08</span>
            <p>NEW WORKFLOW</p>
          </div>

          <div className="case-section-content">
            <h2>One shared source for new media</h2>

            <div className="vertical-process">
              <div>
                <span>01</span>
                <p>New footage is ingested into the shared media hub</p>
              </div>

              <div>
                <span>02</span>
                <p>Assets are placed into the standardized taxonomy</p>
              </div>

              <div>
                <span>03</span>
                <p>Current media remains available through active storage</p>
              </div>

              <div>
                <span>04</span>
                <p>Older assets are retained in archive storage</p>
              </div>

              <div>
                <span>05</span>
                <p>Authorized users access media through the shared system</p>
              </div>

              <div>
                <span>06</span>
                <p>
                  The Digital Asset Management application indexes the same
                  centralized library
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="case-container case-section">
        <div className="case-section-label">
          <span>09</span>
          <p>OUTCOME</p>
        </div>

        <div className="case-section-content">
          <h2>A centralized foundation built within existing constraints</h2>

          <p>
            The redesigned system now acts as a shared media asset hub,
            providing the team with a more consistent place to store, organize,
            and access new footage.
          </p>

          <p>
            Although it does not replace the capabilities of a dedicated NAS or
            enterprise file server, it provides a practical centralized system
            using the hardware available at the time and creates a foundation
            that can later transition to more dedicated infrastructure.
          </p>

          <div className="outcome-grid">
            <article>
              <strong>Centralized</strong>
              <p>One primary shared location for active media.</p>
            </article>

            <article>
              <strong>Standardized</strong>
              <p>A consistent taxonomy guides future organization.</p>
            </article>

            <article>
              <strong>Accessible</strong>
              <p>Authorized users can work from a shared asset hub.</p>
            </article>

            <article>
              <strong>Scalable</strong>
              <p>
                The structure provides a migration path toward a future NAS or
                dedicated server.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* RELATED PROJECT */}
      <section className="related-case-study">
        <div className="case-container">
          <p>RELATED CASE STUDY</p>

          <Link to="/work/media-metadata">
            <span>FULL-STACK DEVELOPMENT + UI/UX</span>
            <h2>Digital Asset Management Application</h2>
            <strong>View project →</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MediaStorageArchitecture;