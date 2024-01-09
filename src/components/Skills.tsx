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
  SiNextdotjs,
  SiPython,
  SiSinglestore,
  SiCss3,
} from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const SkillItem = ({ technology, icon, color }: { technology: string; icon: any; color: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY;
      const threshold = 200;
      if (yOffset >= threshold && !isVisible) {
        setIsVisible(true);
      } else if (yOffset < threshold && isVisible) {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);
  const variants = {
    visible: {
      opacity: 1,
      x: 0, // Elemento en su posición original
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%", // Elemento fuera de la pantalla hacia la izquierda
      transition: {
        duration: 0.9,
        ease: "easeIn",
      },
    },
  };
  
 
  return (
    <VisibilitySensor
      onChange={(isVisible: any) => {
        if (isVisible) {
          setIsVisible(true);
        }
      }}
      partialVisibility={true}
    >
      {({ isVisible }:{isVisible : string}) => (
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          className={`bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col justify-center items-center rounded-xl h-32 w-32 shadow-2xl shadow-black active:animate-bounce hover:animate-pulse `}
        >
          <h1 className="dark:text-white">{technology}</h1>
          {icon({ className:`w-6 h-6 animate-pulse ${color}`})}
        </motion.div>
      )}
    </VisibilitySensor>
  );
};

const Skills = () => {
  return (
    <div className="h-max flex flex-col items-center justify-center lg:pt-28 pb-10 px-10 lg:px-7 dark:bg-zinc-900 bg-slate-50">
      <div className=" rounded-2xl p-5 w-full flex flex-col items-center md:flex-row md:justify-evenly">
        <h1 className=" shadow-2xl shadow-black py-2 px-5 rounded-2xl dark:text-white text-3xl md:mr-10">
          Technologies:
        </h1>
        <img
          className="h-64 w-64 lg:h-60 lg:w-60 lg:ml-10"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/undraw_firmware_re_fgdy%20(1).svg?alt=media&token=884654d2-a039-44ae-bf7d-562aaf8d89ad"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 md:gap-10 lg:gap-15 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-10">
        <SkillItem technology="Javascript" icon={SiJavascript} color="text-yellow-500"/>
        <SkillItem technology="Typescript" icon={SiTypescript} color="text-blue-500"/>
        <SkillItem technology="React" icon={SiReact} color="text-sky-500" />
        <SkillItem technology="React Native" icon={SiReact} color="text-sky-500" />
        <SkillItem technology="HTML" icon={SiHtml5} color="text-orange-600" />
        <SkillItem technology="CSS" icon={SiCss3} color="text-sky-600" />
        <SkillItem technology="Redux" icon={SiRedux} color="text-violet-900" />
        <SkillItem technology="Node.js" icon={FaNodeJs} color="text-green-800" />
        <SkillItem technology="Express.Js" icon={SiExpress} color="text-black" />
        <SkillItem technology="Postgres" icon={SiPostgresql} color="text-blue-800" />
        <SkillItem technology="Bootstrap 5" icon={BsFillBootstrapFill} color="text-violet-700"/>
        <SkillItem technology="Tailwind" icon={SiTailwindcss} color="text-sky-600" />
        <SkillItem technology="MongoDb" icon={SiMongodb} color="text-green-700" />
        <SkillItem technology="Firebase" icon={SiFirebase} color="text-yellow-600" />
        <SkillItem technology="MySql" icon={SiMysql} color="text-blue-600" />
        <SkillItem technology="Next" icon={SiNextdotjs} color="text-black" />
        <SkillItem technology="Python" icon={SiPython} color="text-yellow-500" />
        <SkillItem technology="SingleStore" icon={SiSinglestore} color="text-violet-600"
        />
      </div>
    </div>
  );
};
export default Skills;
