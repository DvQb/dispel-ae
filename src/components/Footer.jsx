import logo from "/dispelAE.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="grid  bg-black text-white">
      <div className="flex justify-around items-center text-lg py-12">
        <img src={logo} alt="" className="lg:w-[180px]" />
        <ul className="grid gap-6">
          <li>
            <Link to="/">Empresa</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/equipamiento">Equipamiento</Link>
          </li>
          <li>
            <Link to="/carreras">Carreras</Link>
          </li>
        </ul>

        <ul className="grid gap-6">
          <li>
            Direccion: Francisco J. Mújica Num.183,
            <br /> 58880 Francisco Villa, Mich.
          </li>
          <li>Correo: </li>
          <li>Telefono: +524433088907</li>
        </ul>
      </div>
      <div className="flex justify-center gap-14 py-10">
        <FontAwesomeIcon icon={faYoutube} className="lg:text-3xl" />
        <FontAwesomeIcon icon={faFacebookF} className="lg:text-3xl" />
        <FontAwesomeIcon icon={faLinkedinIn} className="lg:text-3xl" />
        <FontAwesomeIcon icon={faXTwitter} className="lg:text-3xl" />
      </div>
    </section>
  );
}
