import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { ImGithub } from "react-icons/im";
import { FaFileDownload } from "react-icons/fa";

export function Navbar() {
  return (
    <>
      <header className="bg-[#ece9e0] h-[100px] lg:w-full xsm:w-full  ">
        <nav className="grid grid-cols-2 justify-center items-center p-6">
          <div className="logo">
            <h2 className="text-black font-semibold mx-2 text-2xl">
              Pind
              <span className="text-yellow-900 font-semibold">ari</span>
            </h2>
          </div>
          <div className="links flex justify-center items-center gap-7 px-6 text-xl font-semibold">
            <Link className="link px-3 py-2" to="/">Home</Link>
            <Link className="link px-3 py-2" to="/portfolio">Portfolio</Link>
            <Link className="link px-3 py-2" to="/skills">Skills</Link>
            <Link className="link px-3 py-2" to="/projects">Projects</Link>
            <Link className="link px-3 py-2" to="/contact">Contact</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
function App() {
  return (
    <>
      <div className="home-container flex h-[80vh] grid lg:grid-cols-2 xsm:grid-cols-1 gap-2 p-[20px]">
        <div className="left  flex flex-col gap-2 justify-center items-center xsm:order-2 lg:order-1 ">
          <h1 className="p-5 text-4xl font-semibold ">
            Greetings, I'm
            <span className="text-[#C58940]"> Aboubakar Arisar 🤙</span>
          </h1>
          <p className="p-[20px] text-lg text-gray-600">
            I specialize in building robust and scalable applications as a MERN Stack Developer. With a passion for turning ideas into reality, I leverage the power of MongoDB, Express.js, React.js, and Node.js to create seamless and efficient web solutions.
          </p>
          <div className="buttons flex gap-3">
            <button className='p-3 rounded bg-[#E5BA73] hover:bg-[#C58940] flex gap-2 items-center'>
              <ImGithub /> Explore GitHub
            </button>
            <button className='p-3 rounded bg-[#E5BA73] hover:bg-[#C58940] flex gap-2 items-center'>
              <FaFileDownload />Download Resume
            </button>
          </div>
        </div>
        <div className="right xsm:order-1 lg:order-2">
          <div className="image flex justify-center items-center">
            <img src="/myPic.png" alt="" className='bg-transparent'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;