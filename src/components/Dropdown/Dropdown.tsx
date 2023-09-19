import React from "react";
import { useState } from "react";
import { AiFillLinkedin, AiFillGithub, AiFillYoutube,AiOutlineArrowLeft } from "react-icons/ai";
export interface DropdownInterface {}

const Dropdown: React.FC<DropdownInterface> = () => {
  const [contact, setContact] = useState(false);
  return (
    <div className="flex justify-between md:justify-around lg:justify-center lg:items-center">
      <h1
        onClick={() => setContact(contact ? false : true)}
        className="dark:text-white text-lg md:text-xl lg:text-2xl xl:text-3xl animate-pulse cursor-pointer mr-2"
      >
        {contact ? <AiOutlineArrowLeft/>: "Contact"}
      </h1>
      {contact && (
        <div className="flex justify-evenly">
          <a href="https://www.linkedin.com/in/omar-codex/" target="_blank">
            <AiFillLinkedin className="text-blue-600 h-8 w-8 md:h-9 md:w-9 lg:w-10 lg:h-10 md:mr-2" />
          </a>
          <a  href="https://github.com/omar1779" target="_blank">
            <AiFillGithub className="text-black dark:text-white md:mr-2 h-8 w-8 md:h-9 md:w-9 lg:w-10 lg:h-10" />
          </a>
          <a  href="https://www.youtube.com/channel/UCKfpqaG3ktbfm_8ey4IbZ9g" target="_blank">
            <AiFillYoutube className="text-red-600 h-8 w-8 md:h-9 md:w-9 lg:w-10 lg:h-10" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
