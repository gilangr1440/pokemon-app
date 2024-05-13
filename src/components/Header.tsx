import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState<string | any>(localStorage.getItem("poketheme") ? localStorage.getItem("poketheme") : "light");

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("poketheme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("poketheme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full sticky top-0 px-3 h-20 flex items-center justify-center bg-black">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="w-14 mx-auto" />
      </Link>
      <button onClick={handleThemeSwitch} className="text-white text-4xl absolute right-3">
        {theme == "dark" ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </header>
  );
};

export default Header;
