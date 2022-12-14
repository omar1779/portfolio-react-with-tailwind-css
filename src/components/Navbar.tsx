import React from "react";
import "./neon.css"
interface Props {
  handleTheme: () => void;
  theme: string;
}

const Navbar: React.FC<Props> = (props: Props) => {
  return (
    <div className="bg-slate-200 dark:bg-slate-900 h-12 flex items-center justify-between px-3 shadow-2xl">
      <h1 className="neonTextDark dark:neonTextWhite dark:text-white">Portfolio Omar Sosa</h1>
      <button
        className="bg-slate-900 dark:bg-slate-100 dark:text-black text-white p-1 rounded-md animate-pulse hover:bg-slate-500"
        onClick={props.handleTheme}
      >
        {props.theme === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Navbar;
