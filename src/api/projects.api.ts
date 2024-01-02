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
        "https://private-user-images.githubusercontent.com/145404946/291424605-f771fec4-ffd7-4fde-8fa4-3a12fc3d5a68.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQyMjc2MTEsIm5iZiI6MTcwNDIyNzMxMSwicGF0aCI6Ii8xNDU0MDQ5NDYvMjkxNDI0NjA1LWY3NzFmZWM0LWZmZDctNGZkZS04ZmE0LTNhMTJmYzNkNWE2OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwMlQyMDI4MzFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lZGYxZmVmOWI5MzZkNDQyNTEyODQ0OGQwYWY0ODU4YmNhNjViOWYxNDg0ZTk0ZmMxYTg1ODc2MmJkOTc4ZmRlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.8QK9hXoi4sxuiqKW1AwDElKoxDO9yn7Z8c71nQQOs5I",
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
