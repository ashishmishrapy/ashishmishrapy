import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  let projectArray = [
    {name: "Portfolio", summary:"A simple portfolio showcasing my projects, skills, and personal information clearly.", title : "Ashish Mishra - Portfolio website", link : "https://ashishmishra-ai.vercel.app/", completed: true},
    {name: "Reelify", summary:"Users submit Instagram reels and instantly receive downloadable videos with metadata.", title : "Reelify - Instagram Video Downloader", link : "https://reelify-frontend-ptcj.onrender.com/", completed: true},
    {name: "DBUUConnect", summary: "DBUU platform helping students connect, chat, discover campus resources easily.", title : "DbuuConnect", link : "https://dbuuconnect.vercel.app/", completed: true},
    {name: "AI SAAS", summary: "AI platform generating blogs, improving resumes, summarizing chats, captioning images.", title : "WriteWise AI", link : "/construction", completed: false},
  ]
  return (
    <div className="min-h-screen pt-[75px] p-1 md:px-5">
      <div className='grid p-2 grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-4'>
        {
          projectArray.map((project, index)=>(
            <ProjectCard key={index} name ={project.name} summary={project.summary} title={project.title} link={project.link} completed={project.completed} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects