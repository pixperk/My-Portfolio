import React, { useState } from 'react'
import { AiOutlineClose,AiOutlineMenu, AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { CiBoxes } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";

import {Link, NavLink} from "react-router-dom"


function Sidenav() {

    const[nav,setNav]=useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
      
      {nav ? (
                <AiOutlineClose
                    onClick={handleNav}
                    className='absolute top-4 right-4 z-[99] md:hidden'
                />
            ) : (
                <AiOutlineMenu
                    onClick={handleNav}
                    className='absolute top-4 right-4 z-[99] md:hidden'
                />
            )}
      {
        
        nav?(
            
            <div className='fixed w-full h-screen bg-[#edf6f9be] flex flex-col justify-center items-center z-20'>
                <Link
                to=''
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#ffddd2] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <AiOutlineHome size={20} />
                <span className='pl-4'>Home</span>
                </Link>
                <Link
                to='about'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#ffddd2] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <AiOutlineInfoCircle size={20} />
                <span className='pl-4'>About</span>
                </Link>
                <Link
                to='projects'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#ffddd2] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <CiBoxes size={20} />
                <span className='pl-4'>Projects</span>
                </Link>
                <Link
                to='resume'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#ffddd2] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <IoNewspaperOutline size={20} />
                <span className='pl-4'>Resume</span>
                </Link>
                <Link
                to='contact'
                className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#ffddd2] shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <AiOutlineMessage size={20} />
                <span className='pl-4'>Contact</span>
                </Link>
            </div>
        ):
        (
            <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
        )
      }

      <div className='md:block hidden fixed top-[25%] z-10'>
        <div className='flex flex-col'>
            <Link
            to=''
            className='rounded-full shadow-lg shadow-gray-400 bg-[#ffddd2] m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <AiOutlineHome size={20}/>
            </Link>
            <Link
            to='about'
            className='rounded-full shadow-lg shadow-gray-400 bg-[#ffddd2] m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <AiOutlineInfoCircle size={20}/>
            </Link>
            <Link
            to='projects'
            className='rounded-full shadow-lg shadow-gray-400 bg-[#ffddd2] m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <CiBoxes size={20}/>
            </Link>
            <Link
            to='resume'
            className='rounded-full shadow-lg shadow-gray-400 bg-[#ffddd2] m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <IoNewspaperOutline size={20}/>
            </Link>
            <Link
            to='contact'
            className='rounded-full shadow-lg shadow-gray-400 bg-[#ffddd2] m-2 p-4 cursor-pointer hover:scale-110 transform transition duration-200 ease-in-out'>
                <AiOutlineMessage size={20}/>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default Sidenav
