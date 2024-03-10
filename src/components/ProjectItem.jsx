import React from 'react';

function ProjectItem({ img, title }) {
  return (
    <div className='relative'>
      <div className='relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#83C5BE] to-[#006D77]'>
        <img className='rounded-xl group-hover:opacity-10' src={img} alt={title} />
        <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100'>
          <h3 className='text-2xl font-bold text-[#FFDDD2] tracking-wider text-center mb-2'>
            {title}
          </h3>
          <p className='pb-2 text-white text-center font-semibold text-sm'>React JS</p>
          <a href="/" className='mt-2'>
            <p className='px-4 py-2 rounded-lg bg-white text-[#83C5BE] font-bold cursor-pointer text-lg'>Learn More</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
