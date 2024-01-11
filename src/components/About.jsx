const About = () => {
  const technologies = [
    {
      name: "HTML 5",
      icon: "src/html.png",
    },
    {
      name: "CSS 3",
      icon: "src/css.png",
    },
    {
      name: "JavaScript",
      icon: "src/javascript.png",
    },
    {
      name: "TypeScript",
      icon: "src/typescript.png",
    },
    {
      name: "React JS",
      icon: "src/reactjs.png",
    },

    {
      name: "Tailwind CSS",
      icon: "src/tailwind.png",
    },
    {
      name: "Redux",
      icon: "src/redux.png",
    },
    {
      name: "Git",
      icon: "src/git.png",
    },
  ];
  const TechGrid = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-black rounded-md transition-colors hover:bg-blue-900 hover:text-blue-900"
            style={{ margin: "20px" }}
          >
            <img src={tech.icon} alt={tech.name} className="h-12 w-12 mb-2 " />
            <span className="text-white hover:text-blue-300">{tech.name}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <div className="mb-10">
        <h1 className="text-white text-6xl gap-[2px]">About</h1>
        <p className="text-gray-500 text-[20px] mt-4 leading-[30px]">
          I'm Khalid Adan, a 19-year-old tech enthusiast currently pursuing a
          computer science degree. <br />
          Proficient in HTML, CSS, JavaScript, and Tailwind, my passion for web
          technologies drives my
          <br /> journey in software development. Beyond coding, my A-levels in
          Mathematics, Biology, and <br />
          Chemistry (ABB) add a diverse layer to my analytical skills. Eager to
          blend my academic insights <br />
          with hands-on development, I'm excited about the possibilities in the
          tech landscape.
        </p>
      </div>
      <div className="mb-5">
        <h3 className="flex justify-center align-middle text-white text-5xl">
          Tech skills
        </h3>
      </div>

      <TechGrid />
    </section>
  );
};

export default About;
