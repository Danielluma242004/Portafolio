import { getAllProjects } from "../api/projects.api";
import github from "../media/github.svg";

export function Projects() {
  const projects = getAllProjects();

  return (
    <div className="flex items-center justify-center pb-10" id="projects">
      <section className="max-w-5xl mx-4 flex flex-col w-full">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 dark:text-cyan-500 font-bold text-xl">
            Projects
          </h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 dark:text-white">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-100 dark:bg-gray-900 rounded-3xl text-center flex flex-col items-center"
            >
              <a href={project.linkGit}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-3 rounded-t-3xl"
                />
              </a>
              <a className="font-bold" href={project.linkGit}>
                {project.title}
              </a>
              <p className="mb-3">{project.description}</p>
              <p className="mb-3 font-semibold">Techs:</p>
              <div className="flex justify-center mb-3">
                {project.techs.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    className="size-8 md:size-9 mr-3"
                  />
                ))}
              </div>
              <button
                className="mb-4 p-3 bg-cyan-500
              text-white rounded-lg font-semibold flex"
              >
                <img src={github} className="mr-3" />
                <p>GitHub</p>
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
