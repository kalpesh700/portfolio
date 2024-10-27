import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p className='about_me_left'>Hello! I'm Kalpesh Koli, a budding Full Stack Developer with a strong interest in AI and machine learning. I'm currently pursuing my bachelor's degree in Computer Science and diving deep into both front-end and back-end technologies.
!</p>
    </div>

    </motion.div>
    
  )
}

export default AboutMe
