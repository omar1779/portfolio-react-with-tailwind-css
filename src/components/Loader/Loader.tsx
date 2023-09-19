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
    <div className="h-screen w-screen flex-col lg:flex-row flex justify-center py-16 items-center bg-zinc-900">
      <h1 className="text-white text-3xl animate-pulse shadow-zinc-700">"Welcome to my Portfolio"</h1>
      <video onClick={handleEnter} className="text-black text-center bg-welcome2 bg-center bg-cover rounded-full h-40 w-40 lg:h-60 xl:h-80 xl:w-80 lg:w-60 shadow-2xl shadow-white m-10 cursor-pointer" autoPlay muted loop src="https://firebasestorage.googleapis.com/v0/b/coffeeandcode-cfa1d.appspot.com/o/ezgif-4-251db243ea.webm?alt=media&token=94b4f661-098d-46f0-91b5-4a8b42ab4fd3"/>
      <div>
      <h1 className="text-white text-3xl animate-pulse shadow-2xl">"Nice to meet you!"</h1>
      </div>
    </div>
  );
};

export default Loader;
