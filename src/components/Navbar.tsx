import React from "react";
import "./neon.css"
import {MdDarkMode ,MdLightMode} from "react-icons/md"
interface Props {
  handleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900 h-12 flex items-center justify-between px-3 shadow-2xl fixed z-10 w-full md:h-20">
      <h1 className="neonTextDark dark:neonTextWhite dark:text-white md:text-xl">Portfolio Omar Sosa</h1>
      <button
        className="bg-slate-900 dark:bg-slate-100 dark:text-black text-white p-1 rounded-md animate-pulse hover:bg-slate-500 text-center"
        onClick={props.handleTheme}
      >
        {props.theme === "dark" ? <MdLightMode className="h-5 w-5 md:h-7 md:w-7"/> : <MdDarkMode className="h-5 w-5 md:h-7 md:w-7"/>}
      </button>
    </div>
  );
};

export default Navbar;
