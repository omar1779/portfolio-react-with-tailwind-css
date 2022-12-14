import React from "react";
import image from "../../public/WhatsApp_Image_2022-11-18_at_6.00.50_PM-removebg-preview (1).png";
import Typewriter from "typewriter-effect";
import "./neon.css";

const Home = () => {
  return (
    <div className="h-auto flex flex-col items-center px-10 pb-16 bg-slate-50 dark:bg-slate-800">
      <h1 className="neonTextDark dark:neonTextWhite text-3xl mt-20 md:mt-28 dark:text-white">
        <Typewriter
          options={{
            strings: [
              "Hello , I am Omar Sosa",
              "Fullstack web developer ",
              "Fullstack mobile developer",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="flex flex-col items-center md:flex-row">
        <img
          className="rounded-full h-52 w-52 m-16 shadow-2xl"
          src={image}
          alt="photo omar sosa"
        />
        <div className="flex flex-col">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white animate-pulse">
            "Hi there , I am Omar Sosa 👨🏻‍💻 Fullstack Web Developer With
            experience building sites and web applications. I specialize in
            JavaScript 🤓 I am always looking to improve my skills to grow
            professionally in a continuous way to be able to constantly
            contribute to the work group I am with and in the future groups that
            I will be, always willing to teach and learn. ❤"
          </h1>
          <a
            className="dark:text-white text-xl animate-pulse hover:font-bold"
            href="https://drive.google.com/file/d/1449m6Tsp_um2FdIY8d_TymwR2H8rcDFH/view?usp=share_link"
            target="_blank"
          >
            View my CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
