import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
      <div id='project' className='w-full  bg-white dark:bg-gray-900 text-black dark:text-white transition-colors shadow pt-20'>
      <div className='p-6'>
        <h1 className='text-center text-4xl p-2'>Featu<span className='border-b-2 border-green-500'>red Pr</span>ojects</h1>
        <p className='text-center p-2'>A selection of my recent work showcasing my skills in frontend development and design</p>
      </div>
       <div className="flex flex-col lg:flex-row justify-center ">
        <ProjectCard/>
         
       </div>
    </div>
  )
}

export default Project
