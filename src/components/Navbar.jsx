import React, { useState } from 'react';
import { FaBars,FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav,setNav]=useState(false);
  const links= [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'projects'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black'>
      <div>
        <Link to="home" smooth duration={500} className='cursor-pointer'>
          <h1 className='text-5xl font-signature ml-2'>Str07</h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({id,link}) =>(
          <li key={id} className='px-4 capitalize cursor-pointer font-medium text-gray-500 hover:scale-125 duration-500 text-xl'>
            <Link to={link} smooth duration={400}>{link}</Link></li>
        ))}
      </ul>
      <div onClick={()=>setNav(!nav)} 
      className='cursor-pointer pr-4 text-gray-500 z-10 md:hidden'>
        {nav ? <FaTimes size={40}/> : <FaBars size={40}/>}
      </div>
        {nav && (
          <ul className='flex flex-col justify-center items-center absolute 
          top-0 left-0 w-full h-screen bg-gradient-to-b
          from-black to-gray-800 text-gray=500 '>
            {links.map(({id,link}) =>(
            <li key={id} className='capitalize px-4 py-6 cursor-pointer text-4xl'>
              <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
          ))} 
          </ul>
        )} 
    </div>
  )
}

export default Navbar
