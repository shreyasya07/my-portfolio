import React from 'react';
import HeroImage from "../assets/heroImage.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {AiOutlineDownload} from 'react-icons/ai'
import {Link} from 'react-scroll';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
const Home = () => {
    const [typeEffect]=useTypewriter({
        words:[' Full Stack Developer',' Software Developer' ],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40,
    });
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b  
    from-black via-black to-gray-800">
        <div className='max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full mt-8 w-2/3'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white '> 
                I'm a
                <span className='text-green-600'>
                    {typeEffect} 
                </span>
                <span className='text-red-500'>
                    <Cursor/>
                </span>
                </h2>
                <p className='text-gray-500 py-5 max-w-md '>Welcome to my Portfolio website. Hello, I'm Shreyasya Tripathi currently pursuing B.Tech in Computer Engineering from NIT, Kurukshetra. I am a passionate Full Stack and Software Developer with a diverse interest in Technologies.</p>
                <div className='flex flex-row '>
                    <div >
                        <Link to="projects" smooth duration={500} className='text-white group w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 font-bold cursor-pointer'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25}
                                className='ml-1'/>
                            </span>
                        </Link>
                    </div>
                    <div className='ml-6'>
                        <a href='/resume.pdf' download={true} className='text-white group w-fit px-6 py-3 my-2
                        flex items-center rounded-md bg-gradient-to-r from-green-400 via-green-500 to-green-600 font-bold cursor-pointer'>
                            Resume
                            <span>
                                <AiOutlineDownload size={25}
                                className='ml-1'/>
                            </span>
                        </a>
                    </div>
                </div>   
            </div>
            <div>
                <img src={HeroImage} alt="my profile"
                className='rounded-2xl mx-auto w-3/5 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home
