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
import "./neon.css";

const Skills = () => {

  return (
    <div className="h-max flex flex-col items-center justify-center px-10">
      <div className=" bg-slate-50 dark:bg-slate-800 w-full flex flex-col items-center lg:flex-row lg:justify-center mb-20">
      <h1 className="neonTextDark dark:neonTextWhite dark:text-white text-3xl lg:mr-10">
      Technologies:
      </h1>
      <img className="h-60 w-60 lg:h-80 lg:w-80 lg:ml-10" src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/undraw_firmware_re_fgdy%20(1).svg?alt=media&token=884654d2-a039-44ae-bf7d-562aaf8d89ad"/>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 md:gap-10 lg:gap-15 lg:grid-cols-8 gap-10">
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Javascript
          </h1>
          <SiJavascript className="w-6 h-6 animate-pulse text-yellow-500" />
        </div>
        <div className="dark:text-white bg-slate-200 dark:bg-slate-900 flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Typescript
          </h1>
          <SiTypescript className="w-6 h-6 animate-pulse text-blue-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            React
          </h1>
          <SiReact className="w-6 h-6 animate-pulse text-sky-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            React Native
          </h1>
          <SiReact className="w-6 h-6 animate-pulse text-sky-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            HTML
          </h1>
          <SiHtml5 className="w-6 h-6 animate-pulse text-orange-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            CSS
          </h1>
          <FaCss3Alt className="w-6 h-6 animate-pulse text-sky-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Redux
          </h1>
          <SiRedux className="w-6 h-6 animate-pulse text-violet-900" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Node.js
          </h1>
          <FaNodeJs className="w-6 h-6 animate-pulse text-green-800" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Express.Js
          </h1>
          <SiExpress className="w-6 h-6 animate-pulse text-black" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Postgres
          </h1>
          <SiPostgresql className="w-6 h-6 animate-pulse text-blue-800" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Bootstrap 5
          </h1>
          <BsFillBootstrapFill className="w-6 h-6 animate-pulse text-violet-700" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Tailwind
          </h1>
          <SiTailwindcss className="w-6 h-6 animate-pulse text-sky-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            MongoDb
          </h1>
          <SiMongodb className="w-6 h-6 animate-pulse text-green-700" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Firebase
          </h1>
          <SiFirebase className="w-6 h-6 animate-pulse text-yellow-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce ">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            MySql
          </h1>
          <SiMysql className="w-6 h-6 animate-pulse text-blue-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 hover:animate-bounce">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Next
          </h1>
          <SiNextdotjs className="w-6 h-6 animate-pulse text-black" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
