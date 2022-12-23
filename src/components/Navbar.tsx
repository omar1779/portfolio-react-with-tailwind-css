import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Dropdown } from "./Dropdown";
interface Props {
  handleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <div className="bg-slate-50 dark:bg-zinc-800 h-12 flex items-center justify-between px-3 shadow-md fixed z-10 w-full md:h-20 shadow-black">
      <h1 className=" dark:text-white md:text-xl lg:text-2xl xl:text-3xl">
        Portfolio Omar Sosa
      </h1>
      <Dropdown/>
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
