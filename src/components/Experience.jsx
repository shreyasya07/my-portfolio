import React from 'react'
import CSS from '../assets/css.png';
import HTML from '../assets/html.png';
import Javascript from '../assets/javascript.png';
import MongoDB from '../assets/mongodb.png';
import Node from '../assets/node.png';
import ReactImage from '../assets/react.png';
import Tailwind from '../assets/tailwind.png'
import FireBase from '../assets/Firebase.png'

const Experience = () => {
    const tech=[
        {
            id:1,
            tname:"HTML",
            src:HTML,
            style: 'shadow-orange-500',
        },
        {
            id:2,
            tname:"CSS",
            src:CSS,
            style: 'shadow-blue-500',
        },
        {
            id:3,
            tname:"JavaScript",
            src:Javascript,
            style: 'shadow-yellow-500',
        },
        {
            id:4,
            tname:"Tailwind CSS",
            src:Tailwind,
            style: 'shadow-sky-400',
        },
        {
            id:5,
            tname:"ReactJS",
            src:ReactImage,
            style: 'shadow-blue-600',
        },
        {
            id:6,
            tname:"NodeJS",
            src:Node,
            style: 'shadow-green-400',
        },
        {
            id:7,
            tname:"MongoDB",
            src:MongoDB,
            style: 'shadow-green-600',
        },
        {
            id:8,
            tname:"FireBase",
            src:FireBase,
            style: 'shadow-yellow-600',
        },
    ]
  return (
    <div name="experience" className='h-screen w-full bg-gradient-to-b  
    from-gray-800 to-black text-white pt-5'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full '>
        <div>
            <p className=' text-4xl font-bold inline 
            border-b-4 border-gray-500 '>Experience</p>
            <p className='py-6 text-xl'>Technologies i currently work with:</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3
        gap-8 text-center py-8 px-12 sm:px-0'>
            {tech.map(({id,tname,src,style})=>(
                <div key={id} className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{tname}</p> 
                </div>
            ))} 
        </div>
      </div>
    </div>
  )
}

export default Experience
