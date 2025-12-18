import React from 'react'
import { Icons, skills } from '../assets'

const About = () => {
  return (
    <div className='pt-20'>
    <div className='w-full  bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition-colors shadow'>
      <div className='p-6'>
        <h1 className='text-center text-4xl p-2'>Skills <span className='border-b-2 border-green-500'>& Exp</span>ertise</h1>
        <p className='text-center p-2'>With expertise in modern frontend technologies and a passion for creating intuitive user experiences</p>
      </div>
    <div className="flex flex-col lg:flex-row justify-center flex-wrap">
  {skills.map((skill, index) => {
    // Pick the category icon dynamically
    const CategoryIcon = skill.code || skill.server || skill.pencil;

    return (
      <div id='about'
        className="shadow-lg p-6 m-4 rounded-2xl lg:flex-1  bg-white dark:bg-gray-800 transition-colors "
        key={index}
      >
        <div className="flex-col items-center mb-4 gap-2">
          {CategoryIcon && <CategoryIcon className="w-8 h-8 text-blue-500" />}
          <h3 className="font-bold text-2xl lg:text-3xl mt-2">{skill.category}</h3>
        </div>
        <ul className="list-disc list-inside space-y-2">
          {skill.items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-lg lg:text-xl">
              <skill.check className="text-green-500 w-4 h-4 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  })}
</div>


    </div>
    </div>
  )
}

export default About
