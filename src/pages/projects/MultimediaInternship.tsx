import { Link } from "react-router-dom";

const roleGroups = [
  {
    title: "Frontend",
    items: [
      {
        tool: "React + TypeScript",
        feature:
          "Built the video library, playback interface, search and filter controls, tagging workflows, and UI/UX.",
      },
      {
        tool: "Vite",
        feature:
          "Frontend tooling and same-origin API proxying between the browser and backend.",
      },
    ],
  },
  {
    title: "Backend & API",
    items: [
      {
        tool: "Node.js + Express",
        feature:
          "Built REST API routes for search, filtering, scanner controls, database operations, and video streaming.",
      },
      {
        tool: "Prisma",
        feature:
          "Connected the TypeScript backend to PostgreSQL through relational models, queries, and schema migrations.",
      },
    ],
  },
  {
    title: "Media Processing",
    items: [
      {
        tool: "FFprobe",
        feature:
          "Extracted video duration, resolution, frame rate, codec, bitrate, container, and other technical metadata.",
      },
      {
        tool: "FFmpeg",
        feature:
          "Generated preview thumbnails and timestamp-specific thumbnail frames.",
      },
    ],
  },
  {
    title: "Data & Discovery",
    items: [
      {
        tool: "PostgreSQL",
        feature:
          "Stored indexed video records, metadata, keyword tags, timestamp markers, file status, and shared taxonomy filter options.",
      },
      {
        tool: "Search & Filter Logic",
        feature:
          "Built search and filtering across file information, extracted metadata, tags, taxonomy values, and timestamp labels.",
      },
    ],
  },
  {
    title: "Scanning & Synchronization",
    items: [
      {
        tool: "Smart Sync + Scheduler",
        feature:
          "Built incremental scanning for startup, periodic, and manual synchronization while skipping unchanged files.",
      },
      {
        tool: "Chokidar",
        feature:
          "Added optional file-system event detection that can request Smart Sync when storage changes occur.",
      },
    ],
  },
  {
    title: "Deployment",
    items: [
      {
        tool: "Docker",
        feature:
          "Containerized the application and its supporting services for consistent internal deployment.",
      },
      {
        tool: "Private Local Network",
        feature:
          "Enabled selected users on multiple computers to access one centrally hosted application.",
      },
    ],
  },
];

function MultimediaInternship() {
  return (
    <main className="case-study">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="case-study-hero">
        <div className="case-container">
          <Link to="/#work" className="back-link">
            ← Back to Work
          </Link>

          <p className="case-eyebrow">
            VIDEO PRODUCTION + GRAPHIC DESIGN + MARKETING
          </p>

          <h1>Multimedia Internship</h1>

          <p className="case-lead">
            I produced a marketing video for SimVentions from pre to post-production, including storyboarding, filming, editing, and motion graphics.
            I also worked supported the team through graphic design and brand identity.
          </p>

          <div className="case-meta-grid">
            <div>
              <span>YEAR</span>
              <p>2026 — Present</p>
            </div>

            <div>
              <span>ROLE</span>
              <p>Multimedia Specialist</p>
              <p>Video Producer</p>
              <p>Graphic Designer</p>
            </div>

            <div>
              <span>TOOLS</span>
              <p>Adobe Creative Suite</p>
              <p>Figma</p>
            </div>

          </div>

          <div className="case-tech-list">
            <span>Figma</span>
            <span>Adobe Premiere Pro</span>
            <span>Adobe After Effects</span>
            <span>Adobe Illustrator</span>
            <span>Adobe Photoshop</span>
            <span>Adobe Lightroom</span>
          </div>
        </div>
      </section>

      {/* APPLICATION SCREENSHOT */}

      <section className="case-container">
        <div className="case-large-placeholder">
          <p>INSERT INTERNSHIP VIDEO HERE</p>
        </div>
      </section>

      {/* =====================================================
          CONTEXT
      ===================================================== */}

      <section className="case-container case-section">
        <div className="case-section-label">
          <span>01</span>
          <p>INTERNSHIP MARKETING VIDEO</p>
        </div>

        <div className="case-section-content">
          <h2>A searchable interface for a growing shared media library</h2>

            <p>
            Centralizing the files solved one major problem: where media should
            live. The next challenge was helping users quickly find a specific
            video or moment without manually searching through folders and
            reviewing large amounts of footage. I built the Digital Asset
            Management application as a searchable layer over the existing file
            system while leaving the original media assets in shared storage.
            </p>
            
        </div>
      </section>

      {/* =====================================================
          PROBLEM
      ===================================================== */}

        <section className="case-soft-section">
            <div className="case-container case-section">
                <div className="case-section-label">
                    <span>02</span>
                    <p>GRAPHIC DESIGN</p>
                </div>

                <div className="case-section-content">
                <h2>
                    Folders organize footage, but they don't describe everything inside it.
                </h2>

                    <div className="case-card-grid">
                        <article className="case-info-card">
                        <span>01</span>
                        <h3>Folder-dependent discovery</h3>
                        <p>
                            Users needed to understand the storage taxonomy and know where
                            an asset was likely to be stored before finding it.
                        </p>
                        </article>

                        <article className="case-info-card">
                        <span>02</span>
                        <h3>Limited searchable context</h3>
                        <p>
                            A filename cannot describe every subject, object, capability,
                            or useful moment contained inside a video.
                        </p>
                        </article>

                        <article className="case-info-card">
                        <span>03</span>
                        <h3>Long-form footage</h3>
                        <p>
                            Finding one useful moment could require manually opening and
                            reviewing several long videos.
                        </p>
                        </article>

                        <article className="case-info-card">
                        <span>04</span>
                        <h3>Growing media volume</h3>
                        <p>
                            As more footage was added, relying exclusively on folders and
                            institutional knowledge became less scalable.
                        </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

      {/* =====================================================
          SOLUTION OVERVIEW
      ===================================================== */}

      <section className="case-dark-section">
        <div className="case-container case-section case-section-dark">
          <div className="case-section-label">
            <span>03</span>
            <p>BRAND IDENTITY</p>
          </div>

          <div className="case-section-content">
            <h2>A database-backed index without replacing the file system</h2>

            <p>
                The application scans the organization's shared media storage,
                extracts technical metadata, and creates searchable database records
                that describe and reference those assets.
            </p>

            <p>
              Users interact with the indexed records through a web interface
              while the original video remains on shared storage.
            </p>

            <div className="architecture-flow">
              <div className="architecture-node">
                <span>01</span>
                <strong>Shared Media Storage</strong>
                <p>Original MP4, MOV, and MKV video assets</p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-node">
                <span>02</span>
                <strong>Smart Scanner</strong>

               <p>
                    Detects files, identifies changes through scheduled synchronization,
                    extracts metadata, and generates thumbnails
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-node">
                <span>03</span>
                <strong>PostgreSQL + Prisma</strong>
                <p>
                    Stores searchable records, keyword tags, filter options,
                    taxonomy values, and timestamp markers
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-node">
                <span>04</span>
                <strong>Node.js + Express</strong>
                <p>
                  Search APIs, scanner controls, database operations, and video
                  streaming
                </p>
              </div>

              <div className="architecture-arrow">↓</div>

              <div className="architecture-node">
                <span>05</span>
                <strong>React Interface</strong>
                <p>
                  Search, filter, preview, tag, and navigate the indexed media
                  library
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MY ROLE
      ===================================================== */}

      <section className="case-container case-section">
        <div className="case-section-label">
          <span>04</span>
          <p>MY ROLE</p>
        </div>

        <div className="case-section-content">
          <h2>Owning the project from problem definition through deployment</h2>

            <p>
            I led the project from system design through implementation and
            deployment, with primary responsibility for both the technical
            architecture and user experience.
            </p>

            <p>
            A company director served as a mentor and provided guidance or
            domain context when I needed clarification, while I remained
            responsible for designing and implementing the system.
            </p>

            <div className="responsibility-grid">
            {roleGroups.map((group) => (
                <article key={group.title}>
                <h3>{group.title}</h3>

                <div className="role-tool-list">
                    {group.items.map((item) => (
                    <div className="role-tool-item" key={item.tool}>
                        <strong>{item.tool}</strong>
                        <p>{item.feature}</p>
                    </div>
                    ))}
                </div>
                </article>
            ))}
            </div>
        </div>
      </section>

      {/* =====================================================
          OUTCOME
      ===================================================== */}

      <section className="case-dark-section">
        <div className="case-container case-section case-section-dark">
          <div className="case-section-label">
            <span>05</span>
            <p>OUTCOME</p>
          </div>

          <div className="case-section-content">
            <h2>A working internal platform built around the team's real media workflow</h2>

            <p>
              The application is deployed through Docker and available to
              selected users on the local network. It turns the organization's
              shared media storage into an indexed, searchable library without
              duplicating the underlying video assets.
            </p>

            <p>
              Users can search and filter footage, inspect technical metadata,
              preview videos, apply descriptive tags, mark exact timestamps,
              and return to the original source file when they need it.
            </p>

            <div className="outcome-grid dark-outcome-grid">
              <article>
                <strong>Deployed</strong>
                <p>A functioning Docker-based internal application.</p>
              </article>

              <article>
                <strong>Shared</strong>
                <p>Multiple computers access one centrally hosted system.</p>
              </article>

              <article>
                <strong>Searchable</strong>
                <p>
                  Media discovery extends beyond filenames and folder paths.
                </p>
              </article>

              <article>
                <strong>Documented</strong>
                <p>
                  User workflows, taxonomy, storage practices, and system
                  behavior are documented for ongoing use.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED SYSTEM DESIGN PROJECT
      ===================================================== */}

      <section className="related-case-study">
        <div className="case-container">
          <p>MORE PROJECTS DURING MY INTERNSHIP</p>

          <Link to="/work/media-storage-architecture">
            <span>IT + SYSTEMS DESIGN</span>

            <h2>Media Storage Architecture & Taxonomy</h2>

            <strong>View the infrastructure project →</strong> 

            <p>
              <br>
              </br>
            </p>

          </Link>

                    <Link to="/work/Digital-Asset-Management-Application">
            <span>FULL STACK DEVELOPMENT + MEDIA SYSTEMS</span>

            <h2>Digital Asset Management Application</h2>

            <strong>View the software development project →</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MultimediaInternship;