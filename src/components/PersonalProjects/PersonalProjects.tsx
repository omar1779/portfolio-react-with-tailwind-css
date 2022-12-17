import React, { lazy } from "react";
const CardProject = lazy(()=>import("./CardProject"))
import data from "./Data";
export interface PersonalProjectsInterface {}

const PersonalProjects: React.FC<PersonalProjectsInterface> = () => {
  return (
    <div className="h-auto flex flex-col items-center px-10 pb-16 mt-16">
      <div
        className=" bg-slate-50 dark:bg-slate-800 w-full flex flex-col items-center lg:flex-row lg:justify-center mb-20"
      >
        <h2 className="neonTextDark dark:neonTextWhite dark:text-white text-3xl lg:mr-10">
          Projects section
        </h2>
        <img className="h-60 w-60 lg:h-80 lg:w-80 lg:ml-10" src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/undraw_hacker_mindset_re_8a33.svg?alt=media&token=e637a484-b90c-4e1d-9d35-06ba8b27ca26" />
      </div>
      <div className="grid grid-cols-1 lg:gap-15 lg:grid-cols-2 gap-10">
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
