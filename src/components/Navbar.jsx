import dispelAE from "/dispelAE.svg";

const Navbar = () => {
  return (
    <header className="bg-gray-500/50 shadow-gray-400 sticky font-medium top-0 z-50 shadow-xl md:grid md:grid-cols-3 items-center lg:px-14 py-7 text-neutral-50 ">
      <div className="menu">
        <ul className=" md:flex text-xl lg:gap-3 text-white">
          <li className="bg-green-700/80 hover:brightness-130 rounded-lg py-1 px-2 ">
            <a href="./index.html">Empresa</a>
          </li>
          <li className="bg-green-700/80 hover:brightness-130 rounded-lg py-1 px-2 ">
            <a href="./Pages/Servicios.html">Servicios</a>
          </li>
          <li className="bg-green-700/80 hover:brightness-130 rounded-lg py-1 px-2 ">
            <a href="./Pages/Equipamiento.html">Equipamiento</a>
          </li>
          <li className="bg-green-700/80 hover:brightness-130 rounded-lg py-1 px-2 ">
            <a href="./Pages/Carreras.html">Carreras</a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>

      <img
        src={dispelAE}
        alt="Fabricacion HB"
        className="lg:w-[100px] justify-self-center"
      />

      <button className="bg-green-700 hover:brightness-115 rounded-2xl h-14 w-36 text-lg font-semibold text-center justify-self-end lg:mr-6 transition-colors duration-300">
        Contactanos
      </button>
    </header>
  );
};

export default Navbar;
