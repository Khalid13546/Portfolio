import React from "react";
const linked = () => {
  return (
    <a
      href="https://www.linkedin.com/in/khalid-adan-73a768286"
      target="_blank"
    />
  );
};
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-inherit flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-8xl font-bold">
          Hi,I'm
          <span className="text-purple-700"> Khalid</span>
        </h1>
        <p className="text-gray-300 text-5xl mt-4">A software developer</p>

        <a
          href="https://github.com/Khalid13546?tab=repositories"
          target="_blank"
          className="absolute bottom-30 right-0 m-4 bg-inherit"
        >
          <img
            src="./src/components/github.png"
            className="h-20 w-20 rounded-full ml-4 right-0 flex"
            alt="Github"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/khalid-adan-73a768286"
          target="_blank"
          className="absolute bottom-10 right-0 m-4"
        >
          <img
            src="src/download.png"
            className="h-20 w-20 rounded-full ml-4 right-0 flex bg-white"
            alt="Linkedin"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
