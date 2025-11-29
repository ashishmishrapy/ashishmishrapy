import { Link } from "react-router-dom"

const ProjectCard = ({name, summary, title, link, completed}) => {
  return (
    <div>
        <div className='bg-gray-900 rounded-2xl'>
            {/* <img src={img} alt="" className='rounded-t-2xl border-8 border-gray-900 object-top min-h-[300px] max-h-[300px] lg:max-h-[350px] lg:min-h-[350px] w-full' /> */}
            <div className='text-center p-10  shadow-2xl w-full'>
              <p className='font-black text-[30px] text-zinc-300'>
                {name}
              </p>
              <em className='text-zinc-500'>{summary}</em>
            </div>
            <h1 className='text-center pt-2 text-white'>{title}</h1>
            {
              completed ? 
                <a className='block text-center hover:text-blue-500 pb-2 text-(--grey) italic' target='_blank' href={link}>[Link]</a> :
                <Link className='block text-center hover:text-blue-500 pb-2 text-(--grey) italic' to="/construction">[Constructing]</Link>

            }
        </div>
    </div>
  )
}

export default ProjectCard