import Typewriter from "typewriter-effect";
import "./neon.css";
const options: any = {
  strings: ["Hello, welcome to my website","Fullstack web developer", "Fullstack mobile developer"],
  autoStart: true,
  loop: true,
  pauseFor : 2500,
};
const Home = () => {
  return (
    <div className="h-auto flex flex-col items-center px-10 pb-16">
      <div className="text-3xl lg:text-5xl h-32 mt-20 md:mt-28 dark:text-white">
        <Typewriter options={options}/>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <img
          className="rounded-full h-52 w-52 xl:h-64 xl:w-64 m-5 shadow-2xl"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/WhatsApp_Image_2022-11-18_at_6.00.50_PM-removebg-preview%20(1).png?alt=media&token=dd5eb900-0e75-489e-b41a-972b82ea7373"
          alt="photo omar sosa"
        />
        <div className="flex flex-col lg:px-28 xl:text-xl xl:px-32 bg-slate-50 dark:bg-slate-800">
          <h1 className="neonTextDark dark:neonTextWhite dark:text-white">
            "Hi there , I am Omar Sosa 👨🏻‍💻 Fullstack Web Developer and Mobile
            Developer With experience building sites, web applications and
            mobile app. I specialize in JavaScript 🤓 I am always looking to
            improve my skills to grow professionally in a continuous way to be
            able to constantly contribute to the work group I am with and in the
            future groups that I will be, always willing to teach and learn. ❤"
          </h1>
          <a
            className="dark:text-white text-xl xl:text-2xl animate-pulse hover:font-bold"
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
