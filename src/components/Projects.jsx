import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const fadeIn = (
  direction = "up",
  type = "spring",
  delay = 0,
  duration = 0.75
) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
  },
  visible: { opacity: 1, y: 0, transition: { type, delay, duration } },
});

const projectsData = [
  {
    name: "Morse Code Encryptor",
    description:
      "I developed a web application that encrypts text into Morse code, providing a user-friendly platform for Morse code encoding.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: "src/MorseCode.png.png",
    source_code_link: "https://khalid13546.github.io/Morsecode/",
  },
  {
    name: "Arsenal Football Quiz",
    description:
      "An interactive quiz on the best team in the world which is user-friendly",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },

      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: "src/Screenshot (4).png",
    source_code_link: "https://khalid13546.github.io/Arsenal-Football-Quiz/",
  },
];

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="flex"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full max-w-md mx-4"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src="src/github.png"
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>

          <div className="mt-2 text-secondary text-[14px] text-gray-400">
            {description}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="text-white text-6xl mt-10 mb-10 flex justify-center items-center flex-col">
      <div>Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-5 mb-10 xl:grid-cols-2 gap-4 justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
