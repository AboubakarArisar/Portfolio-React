import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message has been sent",
        showConfirmButton: false,
        timer: 1500,
      });
      const response = await axios.post("http://localhost:5000/contact", {
        name: name,
        email: email,
        message: message,
      });
      console.log(response.data);
    } catch (error) {
      console.log(`${name}, ${email} , ${message}`);
      console.error(" hello i am error");
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div id="contact" className="contact-container md:h-[80vh] w-full">
        <h1 className="text-4xl font-semibold text-[#C58940] mt-8 text-center">
          Contact us
        </h1>
        <div className="contact-content grid xsm:grid-cols-1 md:grid-cols-2 gap-8 p-8">
          <div className="contact-left flex flex-col justify-center items-start">
            <h1 className="text-5xl font-semibold  text-[#2C3E50]">
              Get in Touch <span className="text-[#E5BA73]">with Us</span>
            </h1>
            <div className="location mt-6">
              <h3 className="text-xl text-[#2C3E50]">Location</h3>
              <p className="text-lg text-[#5B6C7E]">Sukkur IBA University</p>
            </div>
            <div className="mail mt-4">
              <h3 className="text-xl text-[#2C3E50]">Mail at</h3>
              <p className="text-lg text-[#5B6C7E]">pindaricoders@gmail.com</p>
            </div>
            <div className="follow mt-4">
              <h3 className="text-xl text-[#2C3E50]">Follow on</h3>
              <div className="items flex gap-2 text-[#5B6C7E]">
                <a className="cursor-pointer hover:text-[#E5BA73]">Facebook</a>
                <a className="cursor-pointer hover:text-[#E5BA73]">
                  - Instagram
                </a>
                <a className="cursor-pointer hover:text-[#E5BA73]">- Github</a>
              </div>
            </div>
          </div>
          <div className="contact-right flex flex-col justify-center items-center p-8 bg-[#F4F6F7] rounded-lg">
            <h1 className="text-4xl font-bold text-[#2C3E50]">Contact Us</h1>
            <form
              className="flex flex-col gap-4 mt-6 w-full max-w-md"
              onSubmit={handleSubmit}
            >
              <input
                required
                className="p-3 border-b-2 border-[#2C3E50] outline-none placeholder-[#5B6C7E]"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                required
                className="p-3 border-b-2 border-[#2C3E50] outline-none placeholder-[#5B6C7E]"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <textarea
                required
                className="p-3 border-b-2 border-[#2C3E50] outline-none placeholder-[#5B6C7E] resize-none"
                style={{ minHeight: "150px" }}
                placeholder="Your Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <button
                className="p-3 bg-[#E5BA73] hover:bg-[#C58940] text-[#2C3E50] rounded transition-colors"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
