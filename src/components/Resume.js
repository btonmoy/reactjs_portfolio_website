import React from 'react'
import Bar from './Bar'
import {motion} from 'framer-motion'
import {tools, languages} from './data/resume_data'
 function Resume() {

    const resume_variant = {
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
        <motion.div className="container resume"
        variants={resume_variant}
        initial='hidden'
        animate='visible'
        exit="exit"
        >
          <div className="row">
           <div className="col-lg-6 resume-card">
               <h4 className="resume-card__heading">
                   Education
               </h4>
             <div className="resume-card__body">
                 <h5 className="resume-card__titile">
                     Computer Science Enginnering
                 </h5>
                 <p className="resume-card__name">
                 Institute of Engineering & Management (IEM) (2014-2018)
                 </p>
                 <p className="resume-card__details">
                  I have been completed B.tech in Computer Science Engineering (CSE) from INSTITUTE OF ENGINEERING & MANAGEMENT (IEM) Kolkata, India.
                 </p>
             </div>
           </div>
           <div className="col-lg-6 resume-card">
               <h4 className="resume-card__heading">
                   Exprience
               </h4>
             <div className="resume-card__body">
                 <h5 className="resume-card__titile">
                 Intern
                 </h5>
                 <p className="resume-card__name">
                 Onnet Solution Infotech Private Limited(01-09-2018 to 29-02-2020)
                 </p>
                 <p className="resume-card__details">I work as a inter in Onnet Solution Infotech Private Limited also completed some projects on testing.</p>
             </div>
            </div>
          </div>
        <div className="row">
               <div className= "col-lg-6 resume-languages">
                  <h5 className="resume-language__heading">
                      Language and Framework
                  </h5>
                  <div className="resume-language__body mt-3">
                      {
                          languages.map(Languages =>
                             <Bar value={Languages} />
                            )
                      }
                  </div>
               </div>
            <div className= "col-lg-6 resume-languages">
                  <h5 className="resume-language__heading">
                      Tools and Softwares
                  </h5>
                  <div className="resume-language__body mt-3">
                      {
                          tools.map(tool => <Bar value={tool} />)
                      }
                  </div>
               </div>   
           </div>
        </motion.div>
    )
}
export default Resume;