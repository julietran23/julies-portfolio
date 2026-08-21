import { useParams } from "react-router-dom";
import ProjectCaseStudy from "../components/ProjectCaseStudy";
import { projects } from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="not-found">
        <h1>Project not found.</h1>
        <a href="/">Return home</a>
      </main>
    );
  }

  return <ProjectCaseStudy project={project} />;
}

export default ProjectPage;