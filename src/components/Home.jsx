import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub,FaLinkedinIn,FaInstagram} from "react-icons/fa";

function Home() {
  return (
    <div id='home'> 
      <div className='w-full h-screen absolute top-0 left-0 '>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl leading-tight tracking-tight text-4xl font-bold text-[#006d77]'>I'm Yashaswi Kumar Mishra</h1>
            <h2 className='leading-tight tracking-tighter flex sm:text-3xl text:2xl pt-4 text-[#e29578]'>
            <TypeAnimation
      sequence={[
        'Full-Stack Developer !',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'BTech Student !',
        2000,
        'Technology Enthusiast !',
        2000
      ]}
      wrapper="span"
      cursor={true}
      speed={50}
      style={{fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
            </h2>
            <div className='text-center flex justify-between mr-6 pt-6 max-w-[200px] w-full'>
            <FaXTwitter className='cursor-pointer' size={20} /> 
            <FaGithub className='cursor-pointer' size={20} />
            <FaLinkedinIn className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20}/>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Home
