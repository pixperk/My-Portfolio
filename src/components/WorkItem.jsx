import React from 'react'

function WorkItem({year, title, duration, details}) {
  return (
    <ol className='mt-4 flex flex-col md:flex-row relative border-l border-[#006D77]'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-[#E29578] rounded-full mt-1.5 -left-1.5 border-[]'/>
        <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-[#fec2ac] bg-[#006D77] rounded-lg'>{year}</span>
            <span className='text-lg font-semibold text-[#006D77]'>{title}</span>
            <span className='my-1 text-sm font-normal leading-none text-[#75aea9]'>{duration}</span>
        </p>
        <p className='my-2 text-base font-normal'>{details}</p>
     </li>
    </ol>
  )
}

export default WorkItem
