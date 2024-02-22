import { getAllProjects } from "../api/projects.api";
import github from "../media/github.svg";

export function Projects() {
  const projects = getAllProjects();

  return (
    <div className="flex items-center justify-center pb-10" id="projects">
      <section className="max-w-5xl mx-4 flex flex-col w-full">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 dark:text-cyan-500 font-bold text-xl cursor-default">
            Projects
          </h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 dark:text-white">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-100 dark:bg-gray-800 rounded-3xl text-center flex flex-col items-center  shadow-xl"
            >
              <a
                href={project.linkGit}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-3 rounded-t-3xl w-full md:h-64 lg:h-48 object-cover"
                />
              </a>
              <a
                className="font-bold mt-4 text-cyan-600 hover:text-cyan-700 active:text-cyan-800 dark:text-cyan-500"
                href={project.linkGit}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.title}
              </a>
              <p className="m-2 h-32 overflow-hidden">{project.description}</p>
              <p className="mb-3 font-semibold text-cyan-600 dark:text-cyan-500">
                Techs:
              </p>
              <div className="flex justify-center mb-3">
                {project.techs.map((tech, index) => (
                  <img
                    key={index}
                    src={tech}
                    className="size-8 md:size-9 mr-3"
                  />
                ))}
              </div>
              <a
                className="my-4 p-3 bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 cursor-pointer
              text-white rounded-lg font-semibold flex"
                href={project.linkGit}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} className="mr-3" />
                <p>GitHub</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
