export interface Project {
  title: string;
  image: string;
  description: string;
  techs: string;
}

export const getAllProjects = (): Project[] => {
  const projects: Project[] = [
    {
      title: "Proyecto 1",
      image: "ruta/imagen1.jpg",
      description: "Descripción 1",
      techs: "ruta/techs.jpg",
    },
    {
      title: "Proyecto 2",
      image: "ruta/imagen2.jpg",
      description: "Descripción 2",
      techs: "ruta/techs.jpg",
    },
    {
      title: "Proyecto 3",
      image: "ruta/imagen3.jpg",
      description: "Descripción 3",
      techs: "ruta/techs.jpg",
    },
  ];

  return projects;
};
