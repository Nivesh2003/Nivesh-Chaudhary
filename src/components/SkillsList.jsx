import React from 'react'

const SkillsList = () => {
  const skills = [
  "JavaScript",
  "Java",
  "SQL",
  "React.js",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "RESTful APIs",
  "Git",
  "GitHub",
  "Postman"
];

  return (
    <div className='mt-20 animate-fade-in'>
        <p className='text-sm text-muted-foreground mb-6 text-center'>Tools and technologies i can work with</p>
        <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>{[...skills,...skills].map((skill,idx)=>(
                <div key={idx} className='shrink-0 px-8 py-4'><span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>{skill}</span></div>
            ))}</div>
        </div>
    </div>
  )
}

export default SkillsList