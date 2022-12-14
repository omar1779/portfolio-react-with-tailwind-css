import React from "react";
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
    <div className="h-max flex flex-col items-center justify-center px-10 bg-slate-50 dark:bg-slate-800">
      <h1 className="neonTextDark dark:neonTextWhite dark:text-white text-3xl mb-12">
        my skills
      </h1>
      <div className="bg-slate-50 pt-2 dark:bg-slate-800 grid grid-cols-2 md:grid-cols-4 md:gap-10 lg:gap-15 lg:grid-cols-8 gap-5">
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Javascript
          </h1>
          <SiJavascript className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="dark:text-white bg-slate-200 dark:bg-slate-900 flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Typescript
          </h1>
          <SiTypescript className="w-6 h-6 text-blue-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            React
          </h1>
          <SiReact className="w-6 h-6 text-sky-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            React Native
          </h1>
          <SiReact className="w-6 h-6 text-sky-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            HTML
          </h1>
          <SiHtml5 className="w-6 h-6 text-orange-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            CSS
          </h1>
          <FaCss3Alt className="w-6 h-6 text-sky-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Redux
          </h1>
          <SiRedux className="w-6 h-6 text-violet-900" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Node.js
          </h1>
          <FaNodeJs className="w-6 h-6 text-green-800" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Express.Js
          </h1>
          <SiExpress className="w-6 h-6 text-black" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Postgres
          </h1>
          <SiPostgresql className="w-6 h-6 text-blue-800" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Bootstrap 5
          </h1>
          <BsFillBootstrapFill className="w-6 h-6 text-violet-700" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Tailwind
          </h1>
          <SiTailwindcss className="w-6 h-6 text-sky-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            MongoDb
          </h1>
          <SiMongodb className="w-6 h-6 text-green-700" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Firebase
          </h1>
          <SiFirebase className="w-6 h-6 text-yellow-500" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            MySql
          </h1>
          <SiMysql className="w-6 h-6 text-blue-600" />
        </div>
        <div className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col justify-center items-center rounded-full h-24 w-24 shadow-2xl shadow-gray-600 animate-pulse">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            Next
          </h1>
          <SiNextdotjs className="w-6 h-6 text-black" />
        </div>
      </div>
    </div>
  );
};
export default Skills;
