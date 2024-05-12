import logo from "../assets/logo.png";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="w-full sticky top-0 px-3 h-20 flex items-center justify-center bg-black">
      <div className="">
        <img src={logo} alt="logo" className="w-16 mx-auto" />
      </div>
      <div className="text-white text-4xl absolute right-3">
        <MdLightMode />
      </div>
    </header>
  );
};

export default Header;
