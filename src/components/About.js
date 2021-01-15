import React from 'react'
import Skillcard from './Skillcard';
import {motion} from 'framer-motion'
import skills from './data/about_data'

function About() {
    const about_variant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.7,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
      }


    return (
        <motion.div className="about"
        variants={about_variant}
        initial='hidden'
        animate='visible'
        exit='exit'
        >
           <h6 className="about__intro">
           Hi, I am Tonmoy Biswas. I am a Computer Science Engineering (CSE) student. I did complete my B. Tech Engineering 2018. 
           I live in Kolkata, India. I am a Web developer and  Web Designer. I am working for 2+ years as a web developer & designer. 
           I am hard-working and passionate towards my work.</h6>
           <div className="container about__container">
                <h6 className="about__heading">What I offer</h6>
                <div className="row">
                    { 
                       skills.map(skill =>
                        <Skillcard skill={skill} />

                       )
                    }
                </div>
           </div>
        </motion.div>
    );
};
export default About;