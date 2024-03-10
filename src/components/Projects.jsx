import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div className='w-full m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#006D77]'>Projects</h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aut at necessitatibus asperiores perferendis minus, ad id commodi fugit illo.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
      <ProjectItem img="project1.jpg" title="Eco-Friendly Home Renovation"/>
    <ProjectItem img="project2.jpg" title="Community Garden Initiative"/>
<ProjectItem img="project3.jpg" title="Virtual Reality Education Platform"/>
<ProjectItem img="project4.jpg" title="AI-Powered Healthcare System"/>

      </div>
    </div>
  )
}

export default Projects
