import React from "react";
import { MdApps } from "react-icons/md";
import { SiYoutube, SiGithub } from "react-icons/si";
interface Props {
  title: string;
  img: string;
  description: string;
  youtube: string;
  website?: string;
  github: string;
}
const CardProject = (props: Props) => {
  return (
    <div key={props.title} className="bg-slate-200 dark:bg-slate-900 dark:text-white flex flex-col rounded-2xl p-5 shadow-2xl shadow-gray-600 ">
      <img src={props.img} alt="image project" />
      <h2 className="text-lg">{props.title}</h2>
      <h2>{props.description}</h2>
      <div className="flex w-full justify-evenly">
          <a className="dark:text-white" target="_blank">
            <SiGithub className="h-8 w-8" />
          </a>
          <a className="dark:text-white" target="_blank">
            <SiYoutube className="h-8 w-8 text-red-600" />
          </a>
          <a className="dark:text-white" target="_blank">
            <MdApps className="h-8 w-8 text-teal-900" />
          </a>
      </div>
    </div>
  );
};

export default CardProject;
