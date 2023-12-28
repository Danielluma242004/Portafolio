import { getAllProjects } from "../api/projects.api";

export function Projects() {
  const projects = getAllProjects();

  return (
    <div className="flex items-center justify-center pb-10">
      <section className="max-w-5xl mx-4 flex flex-col w-full">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 font-bold text-xl">Projects</h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-100 rounded-3xl p-5 md:p-8 text-center"
            >
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
