import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Home = () => {
  const [text] = useTypewriter({
    words: [
      " Omar Sosa",
      " Fullstack web developer",
      " Fullstack mobile developer",
      " Data Analist",
      " Omar Sosa",
    ],
    loop: 2,
  });
  const variants = {
    start: {
      opacity: 1,
    },
    fadeInOut: {
      opacity: [0, 1], // Inicia con opacidad 0 y termina con opacidad 1
      transition: {
        duration: 0.9,
        repeat: 1, // Repite la animación dos veces (una vez más después de la primera)
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      id="start"
      className="h-auto flex flex-col items-center px-10 lg:px-28 pb-16 bg-slate-50 dark:bg-zinc-900"
    >
      <div className="text-3xl xl:text-4xl h-32 mt-20 md:mt-28 dark:text-white">
        <h1>
          I am
          <span>{text}</span>
          <Cursor />
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row lg:flex-col">
        <img
          className="rounded-full h-52 w-52 lg:h-44 lg:w-44 m-5 shadow-2xl shadow-black"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/WhatsApp_Image_2022-11-18_at_6.00.50_PM-removebg-preview%20(1).png?alt=media&token=dd5eb900-0e75-489e-b41a-972b82ea7373"
          alt="photo omar sosa"
        />
        <motion.div
          initial="start"
          animate="fadeInOut"
          variants={variants}
          className="p-10 flex flex-col rounded-3xl lg:p-10 xl:text-xl xl:px-3 "
        >
          <p className=" text-black dark:text-white">
            "Hello there! I'm Omar Sosa 👨🏻‍💻, a passionate full-stack developer
            and freelancer based in Panama. My passion lies in crafting digital
            services and innovative solutions that truly matter. I relish every
            stage of the development process, from planning and design to
            tackling real-world challenges with code.
            <br />
            <br />
            I specialize in JavaScript / Typescript 🤓 and I'm always on the
            lookout to enhance my skills, continually growing professionally. My
            commitment is to make consistent contributions to my current team
            and any future endeavors. I'm equally enthusiastic about sharing my
            knowledge and learning from others.
            <br />
            <br />
            ❤️ I'm here to build outstanding and exciting digital experiences.
            Nice to meet you!" 😊🚀
          </p>
          <a
            className="dark:text-dark rounded-lg mt-10 p-2 dark:bg-slate-50 text-center text-xl xl:text-2xl animate-pulse hover:font-bold"
            href="https://docs.google.com/document/d/e/2PACX-1vRoWbQ81g7ijIFtYItOYcTYWPiOjnkrTxtWYiVNy-uDm-DOqCOiOhCIijHujoRCXYLoripwzUWz2vu_/pub"
            target="_blank"
          >
            <h1>View my CV</h1>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
