import { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Loader } from "./components/Loader/";
import { PersonalProjects } from "./components/PersonalProjects";
const HomeLazy = lazy(() => import("./components/Home"));
const SkillsLazy = lazy(() => import("./components/Skills"));

function App() {
  const [theme, setTheme] = useState("dark");
  const [state, setState] = useState(true);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        {state ? (
          <div className="h-screen font-extralight">
            <Loader title="" setEnter={setState} />
          </div>
        ) : (
          <div className="h-screen font-extralight">
            <Navbar handleTheme={handleTheme} theme={theme} />
            <div className="flex-col items-center bg-slate-50 dark:bg-zinc-900 lg:px-60">
              <HomeLazy />
              <PersonalProjects />
              <SkillsLazy />
            </div>
          </div>
        )}
      </Suspense>
    </>
  );
}

export default App;
