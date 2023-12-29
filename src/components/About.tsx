import fotoMia from "../media/foto_mia.jpg";
import cv from "../media/CV-Daniel_Lucio_Mireles_en.pdf";

export function About() {
  return (
    <div id="about" className="flex justify-center">
      <section className="max-w-5xl mx-4 flex flex-col">
        <div className="flex items-center">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 font-bold text-xl">About me</h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl py-5 px-6 md:px-0 my-8">
          <div className="w-full md:w-1/2 text-center md:text-left md:mx-11 my-5">
            <p className="font-bold text-cyan-700 text-3xl pb-5">
              Daniel Lucio
            </p>
            <p>
              Passionate and creative web developer, specialized in creation of
              innovative solutions. With experience in strategic planning, I
              seek to contribute to projects exciting with my dedication and
              technical knowledge.
            </p>
            <div>
              <div>
                <p className="font-bold my-2">Frontend:</p>
                <div className="flex flex-row md:justify-start justify-center">
                  <a
                    href="https://getbootstrap.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                      alt="bootstrap"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://www.w3schools.com/css/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                      alt="css3"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://www.w3.org/html/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                      alt="html5"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                      alt="react"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                      alt="tailwind"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                </div>
              </div>
              <div>
                <p className="font-bold my-2">Backend:</p>
                <div className="flex flex-row md:justify-start justify-center">
                  <a
                    href="https://www.djangoproject.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/django.svg"
                      alt="django"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                      alt="nodejs"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://expressjs.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                      alt="express"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                      alt="typescript"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                      alt="javascript"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://www.python.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                      alt="python"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                </div>
              </div>
              <div>
                <p className="font-bold my-2">Databases:</p>
                <div className="flex flex-row md:justify-start justify-center">
                  <a
                    href="https://www.mysql.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                      alt="mysql"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                  <a
                    href="https://www.postgresql.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                      alt="postgresql"
                      width="40"
                      height="40"
                      className="mr-2"
                    />
                  </a>
                </div>
              </div>
            </div>
            <a
              className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold mt-5 py-2 px-4 rounded inline-flex items-center"
              href={cv}
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
          <img
            src={fotoMia}
            className="object-cover size-64 rounded-full mx-auto"
            alt="Mi foto"
          />
        </div>
      </section>
    </div>
  );
}
