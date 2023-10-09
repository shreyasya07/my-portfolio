import React from 'react'
import Netflix from '../assets/Project.png';
import OnlineBhojan from '../assets/onlinebhojan.png'
import Portfolio from '../assets/Portfolio.png'
import ToDo from '../assets/todo.png'


const Projects = () => {
  const projects=[
    {
      id:1,
      src:Netflix,
      demo:false,
      code:'https://github.com/shreyasya07/Netflix-clone',
      view:'',
    },
    {
      id:2,
      src:ToDo,
      demo:false,
      code:'https://github.com/shreyasya07/To-Do-App',
      view:'',
    },
    {
      id:3,
      src:Portfolio,
      demo:true, 
      code:'https://github.com/shreyasya07/my-portfolio',
      view:'https://master--glowing-croissant-04352e.netlify.app/',
    },
    {
      id:4,
      src:OnlineBhojan,
      demo:true,
      code:'https://github.com/shreyasya07/OnlineBhojan',
      view:'https://shreyasya07.github.io/OnlineBhojan/',
    },
  ]
  return (
    <div name="projects" className='md:h-screen w-full bg-gradient-to-b  
    from-black to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full '>
        <div className='pb-8'>
          <p className=' text-4xl font-bold inline 
            border-b-4 border-gray-500'>Projects</p>
          <p className='py-6 text-xl'>Here are some of my works</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 
        gap-8 px-12 sm:px-0'>
          {projects.map(({id,src,demo,view,code})=>(
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg
            '>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
              <div className='flex items-center justify-center '> 
                {demo && 
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 
                  hover:scale-105'><a href={view} target='_blank' rel='noreferrer'>Demo</a></button>}
                  <button className=' w-1/2 px-6 py-3 m-4 duration-200 
                  hover:scale-105'><a href={code} target='_blank' rel='noreferrer'>Code</a></button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Projects
