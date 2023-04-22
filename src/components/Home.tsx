import { Cursor, useTypewriter } from "react-simple-typewriter";
const Home = () => {
  const [text] = useTypewriter({
    words : [" Omar Sosa", " Fullstack web developer"," Fullstack mobile developer"," Omar Sosa"],
    loop : 2
  })
  return (
    <div className="h-auto flex flex-col items-center px-10 pb-16 bg-slate-50 dark:bg-zinc-900 lg:h-full lg:w-2/6 lg:fixed lg:shadow-lg lg:shadow-black">
      <div className="text-3xl xl:text-4xl h-32 mt-20 md:mt-28 dark:text-white">
        <h1>I am
          <span>
            {text}
          </span>
          <Cursor/>
        </h1>
      </div>
      <div className="flex flex-col items-center md:flex-row lg:flex-col">
        <img
          className="rounded-full h-52 w-52 xl:h-64 xl:w-64 m-5 shadow-2xl shadow-black"
          src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/WhatsApp_Image_2022-11-18_at_6.00.50_PM-removebg-preview%20(1).png?alt=media&token=dd5eb900-0e75-489e-b41a-972b82ea7373"
          alt="photo omar sosa"
        />
        <div className="p-5 flex flex-col rounded-3xl lg:p-5 xl:text-xl xl:px-3 bg-slate-50 shadow-2xl shadow-black dark:bg-zinc-800">
          <h1 className=" text-black dark:text-white">
            "Hi there , I am Omar Sosa 👨🏻‍💻 Fullstack Web Developer and Mobile
            Developer With experience building sites, web applications and
            mobile app. I specialize in JavaScript 🤓 I am always looking to
            improve my skills to grow professionally in a continuous way to be
            able to constantly contribute to the work group I am with and in the
            future groups that I will be, always willing to teach and learn. ❤"
          </h1>
          <a
            className="dark:text-dark rounded-lg dark:bg-slate-50 text-center text-xl xl:text-2xl animate-pulse hover:font-bold"
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
