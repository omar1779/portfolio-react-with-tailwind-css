import {
  SiExpress,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiPostgresql,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiNextdotjs
} from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="h-max flex flex-col items-center justify-center lg:pt-28 pb-10 px-10 lg:px-7 dark:bg-zinc-900 bg-slate-50">
      <div className=" rounded-2xl p-5 w-full flex flex-col items-center md:flex-row md:justify-evenly">
      <h1 className=" shadow-2xl shadow-black py-2 px-5 rounded-2xl dark:text-white text-3xl md:mr-10">
      Technologies:
      </h1>
      <img className="h-64 w-64 lg:h-60 lg:w-60 lg:ml-10" src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/undraw_firmware_re_fgdy%20(1).svg?alt=media&token=884654d2-a039-44ae-bf7d-562aaf8d89ad"/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 lg:gap-15 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-10">
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            Javascript
          </h1>
          <SiJavascript className="w-6 h-6 animate-pulse text-yellow-500" />
        </div>
        <div className="dark:text-white bg-slate-50 dark:bg-zinc-800 flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse">
          <h1 className=" dark:text-white">
            Typescript
          </h1>
          <SiTypescript className="w-6 h-6 animate-pulse text-blue-500" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse">
          <h1 className=" dark:text-white">
            React
          </h1>
          <SiReact className="w-6 h-6 animate-pulse text-sky-500" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            React Native
          </h1>
          <SiReact className="w-6 h-6 animate-pulse text-sky-500" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse">
          <h1 className=" dark:text-white">
            HTML
          </h1>
          <SiHtml5 className="w-6 h-6 animate-pulse text-orange-600" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            CSS
          </h1>
          <FaCss3Alt className="w-6 h-6 animate-pulse text-sky-600" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            Redux
          </h1>
          <SiRedux className="w-6 h-6 animate-pulse text-violet-900" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse">
          <h1 className=" dark:text-white">
            Node.js
          </h1>
          <FaNodeJs className="w-6 h-6 animate-pulse text-green-800" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            Express.Js
          </h1>
          <SiExpress className="w-6 h-6 animate-pulse text-black" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse">
          <h1 className=" dark:text-white">
            Postgres
          </h1>
          <SiPostgresql className="w-6 h-6 animate-pulse text-blue-800" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            Bootstrap 5
          </h1>
          <BsFillBootstrapFill className="w-6 h-6 animate-pulse text-violet-700" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            Tailwind
          </h1>
          <SiTailwindcss className="w-6 h-6 animate-pulse text-sky-600" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            MongoDb
          </h1>
          <SiMongodb className="w-6 h-6 animate-pulse text-green-700" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            Firebase
          </h1>
          <SiFirebase className="w-6 h-6 animate-pulse text-yellow-500" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse ">
          <h1 className=" dark:text-white">
            MySql
          </h1>
          <SiMysql className="w-6 h-6 animate-pulse text-blue-600" />
        </div>
        <div className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse">
          <h1 className=" dark:text-white">
            Next
          </h1>
          <SiNextdotjs className="w-6 h-6 animate-pulse text-black" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
