import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ImGithub } from "react-icons/im";
import { FaFileDownload } from "react-icons/fa";

function App() {
  function goGithub() {
    window.open("https://github.com/AboubakarArisar", "_blank");
  }

  return (
    <>
      <div
        id="home"
        className="home-container xsm:w-full xsm:overflow-hidden xsm:h-max lg:h-[80vh] xsm:flex xsm:flex-col xsm:justify-center xsm:items-center lg:grid  lg:grid-cols-2  lg:gap-2 lg:p-[20px]"
      >
        <div className="left flex flex-col gap-2 justify-center items-center xsm:order-2 lg:order-1 ">
          <h1 className="p-5 text-4xl font-semibold fade-in">
            Greetings, I'm
            <span className="text-[#C58940] fade-in"> Aboubakar Arisar 🤙</span>
          </h1>
          <p className="p-[20px] text-lg text-gray-600 fade-in">
            I specialize in building robust and scalable applications as a MERN
            Stack Developer. With a passion for turning ideas into reality, I
            leverage the power of MongoDB, Express.js, React.js, and Node.js to
            create seamless and efficient web solutions.
          </p>
          <div className="buttons flex gap-3 fade-in">
            <button
              onClick={goGithub}
              className="xsm:p-2 md:p-3 rounded bg-[#E5BA73] hover:bg-[#C58940] flex gap-2 items-center"
            >
              <ImGithub /> Explore GitHub
            </button>
            <button className="xsm:p-2 md:p-3 rounded bg-[#E5BA73] hover:bg-[#C58940] flex gap-2 items-center">
              <FaFileDownload />
              Download Resume
            </button>
          </div>
        </div>
        <div className="right xsm:order-1 lg:order-2">
          <div className="image flex justify-center items-center">
            <img src="/myPic.png" alt="" className="bg-transparent" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
