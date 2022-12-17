import React from "react";
export interface LoaderInterface {
  title ?: string
  setEnter?: any
}

const Loader: React.FC<LoaderInterface> = (props : LoaderInterface) => {
  const handleEnter = () => {
    props.setEnter(false)
  }
  return (
    <div className="h-screen w-screen flex-col lg:flex-row flex justify-around items-center bg-slate-200">
      <img className="h-auto w-auto" src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/PYh.gif?alt=media&token=645b29f0-420e-4f67-9da6-cdd66c69dee7" alt="loader" />
      <h1 onClick={handleEnter} className="text-5xl font-thin text-white text-center bg-slate-800 rounded-2xl w-1/4 h-32 p-5 animate-bounce shadow-2xl">{props.title}</h1>
    </div>
  );
};

export default Loader;
