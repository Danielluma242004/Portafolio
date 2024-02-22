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
      title: "TicketCrowd",
      image:
        "https://github.com/Danielluma242004/TicketCrowd/assets/145404946/368e9122-a9f4-4372-8ff2-39cb3923627e",
      description:
        "A React-Django app for events where users can create sessions, post events, comment, mark attendance, delete their content, and effortlessly browse others' posts.",
      techs: [
        "https://cdn.worldvectorlogo.com/logos/django.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      ],
      linkGit: "https://github.com/Danielluma242004/TicketCrowd.git",
    },
    {
      title: "Movies Scraping",
      image:
        "https://github.com/Danielluma242004/Movies_Scraping/assets/145404946/d7497a8e-9b32-4f8e-936f-50c681d87159",
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
      title: "Bitcoin Closing Price Forecast",
      image:
        "https://github.com/Danielluma242004/pronostico_bitcoin/assets/145404946/e622af7a-8dce-4640-8d7f-d45290637316",
      description:
        "This program utilizes neural networks to predict Bitcoin's closing price, addressing time series forecasting challenges.",
      techs: [
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
        "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
      ],
      linkGit: "https://github.com/Danielluma242004/pronostico_bitcoin",
    },
    {
      title: "Django-React-Authentication-App",
      image:
        "https://github.com/Danielluma242004/Django-React-Authentication-App/assets/145404946/da5b1f26-ac65-4604-a782-2dc1c52a7ba6",
      description:
        "Secure authentication with Django and React, designed to handle user registration, login, and authentication sessions. Ideal for web projects that require efficient authentication.",
      techs: [
        "https://cdn.worldvectorlogo.com/logos/django.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/sqlite.svg",
      ],
      linkGit:
        "https://github.com/Danielluma242004/Django-React-Authentication-App",
    },
    {
      title: "Task App",
      image:
        "https://github.com/Danielluma242004/Task_App/assets/145404946/1b5080a7-6160-49d7-86e0-8b2ae96dbf62",
      description:
        "Presenting a Web App crafted with Django Framework and React, featuring an elegant dark mode for an enhanced user experience.",
      techs: [
        "https://cdn.worldvectorlogo.com/logos/django.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        "https://cdn.worldvectorlogo.com/logos/sqlite.svg",
      ],
      linkGit: "https://github.com/Danielluma242004/Task_App",
    },
    {
      title: "DODOC",
      image:
        "https://github.com/Danielluma242004/DODOC-WEB/assets/145404946/f771fec4-ffd7-4fde-8fa4-3a12fc3d5a68",
      description:
        "Discover quantum computing on our interactive website. Register, log in, and engage in discussions. Dive into the quantum world with a user account for seamless interaction.",
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
