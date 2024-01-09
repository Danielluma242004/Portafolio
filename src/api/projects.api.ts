export interface Project {
  title: string;
  image: string;
  description: string;
  techs: string[];
  linkGit: string;
}

export const getAllProjects = (): Project[] => {
  const projects: Project[] = [
    {
      title: "DODOC",
      image:
        "https://github.com/Danielluma242004/DODOC-WEB/assets/145404946/f771fec4-ffd7-4fde-8fa4-3a12fc3d5a68",
      description: "Interactive website about quantum computing",
      techs: [
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      ],
      linkGit: "https://github.com/Danielluma242004/DODOC-WEB",
    },
    {
      title: "Movies Scraping",
      image:
        "https://github.com/Danielluma242004/Movies_Scraping/assets/145404946/333ad6cd-b8b7-4493-beb3-a479903cdd43",
      description:
        "Web application developed using Python and TypeScript that performs scraping to retrieve detailed information about movies",
      techs: [
        "https://cdn.worldvectorlogo.com/logos/django.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      ],
      linkGit: "https://github.com/Danielluma242004/Movies_Scraping",
    },
    {
      title: "Task App",
      image:
        "https://github.com/Danielluma242004/Task_App/assets/145404946/1b5080a7-6160-49d7-86e0-8b2ae96dbf62",
      description: "Web App developed in Django FrameWork",
      techs: [
        "https://cdn.worldvectorlogo.com/logos/django.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/sqlite.svg",
      ],
      linkGit: "https://github.com/Danielluma242004/Task_App",
    },
  ];

  return projects;
};
