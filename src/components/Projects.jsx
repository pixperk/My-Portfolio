import React from 'react'
import ProjectItem from './ProjectItem'

function Projects() {
  return (
    <div className='w-full m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#006D77]'>Projects</h1>
      <p className='text-center py-8'>
      With a blend of creativity and technical prowess, we crafted a seamless user experience that seamlessly integrates captivating visuals and intuitive functionality. From interactive components to fluid animations, every detail was meticulously crafted to elevate the user journey.
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
      <ProjectItem img="https://imgs.search.brave.com/ptf3qnwvV7Ph9KQ4CnN0Z8pOTYkY8mLPLsBr34_5tV4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVhbGVzdGF0ZS5j/b20uYXUvbmV3cy1p/bWFnZS93XzkyMixo/XzY5Mi92MTY2MTQ2/NzUzMS9uZXdzLWxp/ZmVzdHlsZS1jb250/ZW50LWFzc2V0cy93/cC1jb250ZW50L3By/b2R1Y3Rpb24vc3Vz/dGFpbmFibGUtaG9t/ZV84MDB4NjAwLmpw/Zz9faT1BQQ" title="Eco-Friendly Home Renovation"/>
    <ProjectItem img="https://images.pexels.com/photos/7283/garden.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Community Garden Initiative"/>
<ProjectItem img="https://imgs.search.brave.com/8uu8d6KTy-pZzvdNBl8anOTehMmNaPSqrGfTpJhFfG4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idWls/dGluLmNvbS9jZG4t/Y2dpL2ltYWdlL2Y9/YXV0byxxdWFsaXR5/PTgwLHdpZHRoPTc1/MixoZWlnaHQ9NDM1/L2h0dHBzOi8vYnVp/bHRpbi5jb20vc2l0/ZXMvd3d3LmJ1aWx0/aW4uY29tL2ZpbGVz/L3N0eWxlcy9ieWxp/bmVfaW1hZ2UvcHVi/bGljL3ZpcnR1YWwt/cmVhbGl0eS1pbi1l/ZHVjYXRpb24uanBn" title="Virtual Reality Education Platform"/>
<ProjectItem img="https://imgs.search.brave.com/JSIS15OW_J7m25MvfXvhPxd6koLe3vg21VUSrMa4uC0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9idWls/dGluLmNvbS9zaXRl/cy93d3cuYnVpbHRp/bi5jb20vZmlsZXMv/c3R5bGVzL2NrZWRp/dG9yX29wdGltaXpl/L3B1YmxpYy9pbmxp/bmUtaW1hZ2VzL2Fp/LWhlYWx0aGNhcmUt/ZXhhbXBsZXMtMy5w/bmc" title="AI-Powered Healthcare System"/>

      </div>
    </div>
  )
}

export default Projects
