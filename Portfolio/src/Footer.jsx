import React from "react";
import { ImGithub, ImLinkedin, ImTwitter } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-white py-12">
      <div className="container mx-auto flex flex-col items-center">
        <div className="social-icons flex justify-center gap-5 items-center mb-6">
          <a
            href="https://github.com/AboubakarArisar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5BA73] hover:text-[#C58940]"
          >
            <ImGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5BA73] hover:text-[#C58940]"
          >
            <ImLinkedin size={30} />
          </a>
          <a
            href="https://twitter.com/yourtwitterprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E5BA73] hover:text-[#C58940]"
          >
            <ImTwitter size={30} />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="text-[#E5BA73] hover:text-[#C58940]"
          >
            <MdEmail size={30} />
          </a>
        </div>
        <p className="text-gray-500 text-sm mb-4">
          Let's connect and build something amazing together!
        </p>
        <p className="text-gray-500 text-sm">
          © 2023 Pindari Coders. All rights reserved. || Built with React and ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
