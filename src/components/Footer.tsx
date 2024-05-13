import { FaHome } from "react-icons/fa";
import { MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full sticky bottom-0 h-20 grid grid-cols-2 bg-black">
      <Link to={"/"}>
        <div className="text-white flex flex-col justify-center items-center">
          <FaHome className="text-4xl" />
          <span>Home</span>
        </div>
      </Link>
      <Link to={"/pokedex"}>
        <div className="text-white flex flex-col justify-center items-center">
          <MdCatchingPokemon className="text-4xl" />
          <span>My Pokemon</span>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
