import fotoMia from "../media/foto_mia.jpg";

export function About() {
  return (
    <div className="flex justify-center">
      <section className="max-w-5xl mx-4 flex flex-col">
        <div className="flex items-center mb-8">
          <div className="h-px bg-gray-400 flex-grow"></div>
          <h2 className="mx-4 text-cyan-700 font-bold text-xl">About me</h2>
          <div className="h-px bg-gray-400 flex-grow"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-3xl p-5">
          <div className="w-full md:w-1/2 text-center md:text-left mx-auto my-5">
            <p className=" font-bold text-cyan-700 text-3xl pb-5">
              Daniel Lucio
            </p>
            <p>
              Desarrollador web apasionado y creativo, especializado en la
              creación de soluciones innovadoras. Con experiencia en
              planificación estratégica, busco contribuir a proyectos
              emocionantes con mi dedicación y conocimientos técnicos.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700 text-white font-bold mt-5 py-2 px-4 rounded inline-flex items-center">
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download CV</span>
            </button>
          </div>
          <img
            src={fotoMia}
            className="object-cover size-64 rounded-full mx-auto "
            alt="Mi foto"
          />
        </div>
      </section>
    </div>
  );
}
