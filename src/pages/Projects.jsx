import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  let projectArray = [
    {
      name: "Portfolio",
      summary:
        "A simple portfolio showcasing my projects, skills, and personal information clearly.",
      title: "Ashish Mishra - Portfolio website",
      link: "https://ashishmishra-ai.vercel.app/",
      completed: true,
    },
    {
      name: "Reelify",
      summary:
        "Users submit Instagram reels and instantly receive downloadable videos.",
      title: "Reelify - IG Video Downloader",
      link: "https://reelify-frontend-ptcj.onrender.com/",
      completed: true,
    },
    {
      name: "DBUUConnect",
      summary: "DBUU platform helping students connect, chat, discover easily.",
      title: "DbuuConnect",
      link: "https://dbuuconnect.vercel.app/",
      completed: true,
    },
    {
      name: "AI SAAS",
      summary:
        "AI platform generating blogs, ELI5, Chat summarizer, Text rewriting.",
      title: "WriteWise AI",
      link: "/construction",
      completed: false,
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen pt-[72px] pb-20 flex flex-col justify-center p-1 md:px-5"
    >
      <h3 className="text-white font-black justify-start md:text-[60px] text-[40px] leading-none tracking-tight text-center mb-2">
        My Works{" "}
      </h3>
      <div className="grid p-2 grid-cols-1 md:px-[20%] mt-10 lg:grid-cols-2 gap-10">
        {projectArray.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            summary={project.summary}
            title={project.title}
            link={project.link}
            completed={project.completed}
          />
        ))}
      </div>
      <div className="flex flex-col mt-15 gap-2 items-center justify-center">
        <p className="text-gray-400">Want to view more?</p>
        <a
          className="bg-blue-600 transition-all ease-in-out duration-500 text-gray-200 text-sm font-semibold px-3 py-2 hover:scale-105 rounded-md shadow-black"
          target="_blank"
          href="https://github.com/ashishmishrapy"
        >
          View here →
        </a>
      </div>
    </section>
  );
};

export default Projects;
