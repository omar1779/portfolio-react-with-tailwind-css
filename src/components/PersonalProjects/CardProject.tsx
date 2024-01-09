import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdApps } from "react-icons/md";
import { SiYoutube, SiGithub } from "react-icons/si";
import VisibilitySensor from "react-visibility-sensor";

interface Props {
  title: string;
  img?: string;
  description: string;
  youtube: string;
  website?: string;
  github: string;
}
const CardProject = (props: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible: boolean) => {
    setIsVisible(isVisible);
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.9,
        ease: "easeIn",
      },
    },
  };

  return (
    <VisibilitySensor
      onChange={handleVisibilityChange}
      partialVisibility={true}
    >
      {({ isVisible }: { isVisible: string }) => (
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          key={props.title}
          className="bg-slate-50 dark:bg-zinc-800 dark:text-white flex flex-col rounded-2xl p-5 shadow-2xl shadow-black justify-between"
        >
          <h1 className="text-lg">{props.title}</h1>
          <p>{props.description}</p>
          <div className="flex w-full items-center justify-between">
            {props.github !== "#" && (
              <a
                href={props.github}
                className="dark:text-white"
                target="_blank"
              >
                <SiGithub className="h-8 w-8" />
              </a>
            )}
            {props.youtube !== "#" && (
              <a
                href={props.youtube}
                className="dark:text-white"
                target="_blank"
              >
                <SiYoutube className="h-8 w-8 text-red-600" />
              </a>
            )}
            {props.website !== "#" && (
              <a
                href={props.website}
                className="dark:text-white"
                target="_blank"
              >
                <MdApps className="h-8 w-8 text-teal-900" />
              </a>
            )}
          </div>
        </motion.div>
      )}
    </VisibilitySensor>
  );
};

export default CardProject;
