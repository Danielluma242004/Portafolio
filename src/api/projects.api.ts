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
  ];

  return projects;
};
