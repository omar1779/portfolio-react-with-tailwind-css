import React, { lazy } from "react";
const CardProject = lazy(()=>import("./CardProject"))
import data from "./Data";
export interface PersonalProjectsInterface {}

const PersonalProjects: React.FC<PersonalProjectsInterface> = () => {
  return (
    <div className="h-auto flex flex-col items-center px-10 pb-16 bg-slate-50 dark:bg-zinc-900 p-20 lg:pt-0">
      <div
        className=" w-full flex flex-col items-center md:flex-row-reverse md:justify-center mb-20"
      >
        <h1 className="shadow-2xl shadow-black py-2 px-5 rounded-2xl text-black dark:text-white text-3xl md:ml-10">
          Projects section
        </h1>
        <img className="h-60 w-60 lg:h-64 lg:w-64" src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/undraw_hacker_mindset_re_8a33.svg?alt=media&token=e637a484-b90c-4e1d-9d35-06ba8b27ca26"/>
      </div>
      <div className="grid grid-cols-1 md:gap-15 md:grid-cols-2 2xl:grid-cols-3 gap-10">
        {data?.map((element) => (
					<CardProject
					key={element.title}
					title={element.title}
					img={element.img}
					description={element.description}
					youtube={element.youtube}
					website={element.website}
					github={element.github}
					/>
        ))}
      </div>
    </div>
  );
};

export default PersonalProjects;
