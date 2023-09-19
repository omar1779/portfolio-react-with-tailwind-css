import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BiCoffeeTogo } from "react-icons/bi";
import { scrollToBottom } from "../utils/scroll";
import { Dropdown } from "./Dropdown";
interface Props {
  handleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<Props> = (props: Props) => {
  const [scrolling, setScrolling] = useState(false);

  // Agregar un efecto de desplazamiento
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para manejar el desplazamiento
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  return (
    <div
      className={`bg-slate-50 dark:bg-zinc-800 h-12 flex items-center justify-center gap-4 px-3 shadow-md fixed z-10 w-full md:h-20 lg:h-14 shadow-black ${
        scrolling ? "bg-opacity-70 dark:bg-opacity-70 shadow-none" : ""
      }`}
    >
      <button className="bg-zinc-800 dark:bg-slate-50 dark:text-black text-white p-1 rounded-md animate-pulse hover:bg-gray-500 active:animate-spin text-center">
        <BiCoffeeTogo
          onClick={() => scrollToBottom("start")}
          className="h-5 w-5 md:h-7 md:w-7"
        />
      </button>
      <h1 className=" dark:text-white md:text-xl lg:text-2xl xl:text-3xl">
        Omar Sosa
      </h1>
      <h1 className=" dark:text-white md:text-xl lg:text-2xl xl:text-3xl">
        ______
      </h1>
      <Dropdown />
      <button
        className="bg-zinc-800 dark:bg-slate-50 dark:text-black text-white p-1 rounded-md animate-pulse hover:bg-gray-500 text-center"
        onClick={props.handleTheme}
      >
        {props.theme === "dark" ? (
          <MdLightMode className="h-5 w-5 md:h-7 md:w-7" />
        ) : (
          <MdDarkMode className="h-5 w-5 md:h-7 md:w-7" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
