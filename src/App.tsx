import { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Loader } from "./components/Loader/";
import { PersonalProjects } from "./components/PersonalProjects";
//import ParticlesContainer  from "./components/ParticlesContainer/ParticlesContainer";
const HomeLazy = lazy(() => import("./components/Home"));
const SkillsLazy = lazy(()=> import("./components/Skills"))
const ParticlesLazyLoading = lazy(
  () => import("./components/ParticlesContainer/ParticlesContainer")
);

function App() {
  const [theme, setTheme] = useState("light");
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
      {state ? (
        <div className="h-screen font-extralight">
          <Loader title="Enter" setEnter={setState} />
        </div>
      ) : (
        <Suspense>
          <div className="h-screen font-extralight">
            <Navbar handleTheme={handleTheme} theme={theme} />
            <ParticlesLazyLoading theme={theme} />
            <HomeLazy />
            <SkillsLazy />
            <PersonalProjects />
          </div>
        </Suspense>
      )}
    </>
  );
}

export default App;
