
import dispelAE from '/dispelAE.svg'



const Navbar = () => {
    return (


        <header className="bg-gray-500/50 shadow-green-200/50 sticky top-0 z-50 shadow-xl md:grid md:grid-cols-3 items-center lg:px-14 py-7 text-neutral-50 ">


            {/* <nav className="nav-main" >
                

                {/*  Botón de Menú (Se muestra en pantallas pequeñas y medianas)  


             <button id="menu-toggle" className="md:hidden text-gray-700 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button> 

            </nav> */}


            <div className="menu">
                <ul className=" md:flex text-xl lg:gap-3 text-white">
                    <li className='bg-green-700 rounded-lg py-1 px-2 '> 
                    <a href="./index.html">Empresa</a>
                    </li >
                    <li className='bg-green-700 rounded-lg py-1 px-2 '>
                    <a href="./Pages/Servicios.html">Productos y Servicios</a>
                    </li>
                    <li className='bg-green-700 rounded-lg py-1 px-2 '>
                    <a href="./Pages/Equipamiento.html">Equipamiento</a>
                    </li>
                    <li className='bg-green-700 rounded-lg py-1 px-2 '>
                    <a href="./Pages/Carreras.html">Carreras</a>
                    </li>
                    <li>
                    <a href="#"></a>
                    </li>
                </ul>
            </div>


            <img src={dispelAE} alt="Fabricacion HB" className="lg:w-[100px] justify-self-center"/>

            <button className='bg-green-700 hover:brightness-115 rounded-2xl h-14 w-36 text-lg font-semibold text-center justify-self-end lg:mr-6 transition-colors duration-300'>Contactanos</button>
        </header>
    )
}

export default Navbar;