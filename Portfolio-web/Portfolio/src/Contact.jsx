import { React, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="contact-container h-[80vh] w-full">
        <div className="contact-content grid grid-cols-2 gap-2">
          <div className="contact-left flex flex-wrap justify-center items-center p-4">
          <div className="heading w-2/3">
            <h1 className="text-5xl font-semibold">
              Get in touch <span className="text-yellow-900">with us</span> for
              more information
            </h1>
            </div>
            <div className="location h-[200px] bg-[#FAEED1] w-2/3 flex flex-col justify-center items-start px-5 ">
              <div className="item-1">
                <h3 className="text-xl">Location</h3>
                <h3 className="text-yellow-600">Sukkur IBA University</h3>
              </div>
              <div className="item-2">
                <h3 className="text-xl">Mail at</h3>
                <h3 className="text-yellow-600">pindaricoders@gmail.com</h3>
              </div>
              <div className="item-3">
                <h3 className="text-xl">Follow on</h3>
                <div className="items flex gap-2">
                <a className="text-yellow-600 cursor-pointer">Facebook</a>
                <a className="text-yellow-600 cursor-pointer"> - Instagram</a>
                <a className="text-yellow-600 cursor-pointer"> - Github</a>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right flex justify-center items-center flex-col  p-4">
            <h1 className="text-4xl py-10 font-bold">Contact us</h1>
            <div className="form w-full border-1 flex items-center justify-center p-5">
              <form className="flex flex-col gap-2  p-5 bg-yellow-50 backdrop-opacity-10 rounded backdrop-blur-sm">
                <input
                  required
                  className="p-3 w-full bg-[#FAEED1] outline-none rounded"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <input
                  required
                  className="p-3 w-full bg-[#FAEED1] outline-none rounded"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <textarea
                  required
                  className="p-3 w-full bg-[#FAEED1] rounded outline-none overflow-hidden"
                  cols="30"
                  rows="5"
                  placeholder="Enter your Message"
                ></textarea>
                <button
                  className="p-3 rounded bg-[#E5BA73] hover:bg-[#C58940] "
                  type="sumbit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
