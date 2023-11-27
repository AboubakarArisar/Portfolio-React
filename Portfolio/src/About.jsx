import React from "react";

const About = () => {
  return (
    <>
      <div className="about-container p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center">
          <div className="about-image mb-4 md:mb-0 w-[500px]">
            <img
              src="/myPic.png"
              alt="Aboubakar"
              className="rounded-full w-[500px] h-[500px] object-cover mx-auto md:mx-0 shadow-md"
            />
          </div>

          <div className="about-content">
            <p className="text-lg text-gray-600">
              Hello! I'm Aboubakar, a passionate coder and developer. I specialize in creating robust and scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). With a keen interest in technology and a commitment to turning ideas into reality, I strive to deliver efficient and elegant solutions.
            </p>

            <p className="text-lg text-gray-600 mt-4">
              My journey in coding began with a fascination for problem-solving and the desire to create meaningful impact through software development. Over the years, I have honed my skills in various programming languages and frameworks, gaining experience in areas such as web development, software architecture, and more.
            </p>

            <p className="text-lg text-gray-600 mt-4">
              Continuous learning is at the core of my approach. I stay updated with the latest technologies and trends to ensure that I can leverage the best tools for each project. Apart from coding, I enjoy exploring new technologies, collaborating with talented individuals, and contributing to open-source projects.
            </p>

            <p className="text-lg text-gray-600 mt-4">
              Let's connect and explore the possibilities of creating innovative solutions together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
