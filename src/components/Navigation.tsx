import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import dark_theme from "../media/dark_theme.svg";

export function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [offset, setOffset] = useState(-100);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      // Ajustar el offset según el tamaño de la pantalla
      const newOffset = window.innerWidth < 768 ? -270 : -100;
      setOffset(newOffset);
    };

    // Configurar el event listener para cambios de tamaño
    window.addEventListener("resize", handleResize);

    // Llamar a handleResize al inicio para establecer el valor inicial
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Dark Mode

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme == "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme]);

  const handleChangueTheme = () => {
    setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"));
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-200 dark:bg-gray-800 ">
        <header className="flex flex-wrap justify-between items-center py-3 text-lg px-8">
          <ScrollLink
            to="/"
            onClick={scrollToTop}
            className="text-cyan-700 dark:text-cyan-500 font-semibold cursor-pointer"
            smooth={true}
            duration={500}
          >
            D L
          </ScrollLink>

          <button
            type="button"
            onClick={toggleMenu}
            className={`inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 dark:hover:bg-gray-900 active:bg-gray-400 dark:active:bg-gray-950 ${
              isMenuOpen ? "bg-gray-300 dark:bg-gray-900" : ""
            }`}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="font-medium flex flex-col justify-center w-full items-center p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-900 dark:text-white dark:border-gray-900 dark:md:bg-transparent md:bg-transparent md:flex-row md:space-x-11 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={offset}
                  className="block py-2 px-3 rounded hover:bg-gray-200 md:text-cyan-700 md:p-0 active:bg-cyan-700 active:text-white dark:active:bg-cyan-700 dark:active:text-white active:md:bg-transparent active:md:text-gray-500 cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-500 dark:hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  about
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={offset}
                  className="block py-2 px-3 rounded hover:bg-gray-200 md:text-cyan-700 md:p-0 active:bg-cyan-700 active:text-white dark:active:bg-cyan-700 dark:active:text-white active:md:bg-transparent active:md:text-gray-500 cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-500 dark:hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  offset={offset}
                  duration={500}
                  className="block py-2 px-3 rounded hover:bg-gray-200 md:text-cyan-700 md:p-0 active:bg-cyan-700 active:text-white dark:active:bg-cyan-700 dark:active:text-white active:md:bg-transparent active:md:text-gray-500 cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-500 dark:hover:bg-gray-800"
                  onClick={toggleMenu}
                >
                  contact
                </ScrollLink>
              </li>
              <li className="flex">
                <button
                  onClick={handleChangueTheme}
                  className="flex items-center focus:outline-none text-gray-500 hover:text-gray-700"
                >
                  <img src={dark_theme} className="w-10" alt="Toggle Theme" />
                </button>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </div>
  );
}
