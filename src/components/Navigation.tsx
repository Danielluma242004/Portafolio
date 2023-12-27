import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gray-100">
        <header className="flex flex-wrap justify-between items-center py-3 text-lg px-8">
          <a className="text-cyan-700 font-semibold">D L</a>
          <button
            type="button"
            onClick={toggleMenu}
            className={`inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 active:bg-gray-300 ${
              isMenuOpen ? "bg-gray-200" : ""
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
            <ul className="font-medium flex flex-col p-4 md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-11 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100  md:text-cyan-700 md:p-0 active:bg-cyan-700 active:text-white active:md:bg-transparent active:md:text-gray-500"
                  onClick={toggleMenu}
                >
                  about
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:text-cyan-700 md:p-0 active:bg-cyan-700 active:text-white active:md:bg-transparent active:md:text-gray-500"
                  onClick={toggleMenu}
                >
                  projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:text-cyan-700 md:p-0 active:bg-cyan-700 active:text-white active:md:bg-transparent active:md:text-gray-500"
                  onClick={toggleMenu}
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </div>
  );
}
