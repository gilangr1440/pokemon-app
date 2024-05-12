import logo from "../assets/logo.png";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full px-3 h-20 flex items-center justify-end bg-black">
      <div className="flex-grow">
        <img src={logo} alt="logo" className="w-16 mx-auto" />
      </div>
      <div className="text-white text-4xl">
        <MdLightMode />
      </div>
    </header>
  );
};

export default Header;
