import react from  'react';

import facebook  from '../assets/icons/facebook.svg'
import instagram  from '../assets/icons/instagram.svg'
import github  from '../assets/icons/github.svg'
import pin  from '../assets/icons/pin.svg'
import tie  from '../assets/icons/tie.svg'
import mightycoder  from '../assets/mightycoder.svg'
import resume  from '../assets/resume.pdf'
import {motion} from 'framer-motion'

const Sidebar =() => {

 const handaleEmailme = () => {
     window.open("mailto:tanubiswas420@gmail.com")
 }

 const sidebar_variant = {
    hidden: {
        x: '-20vh',
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.1, duration: 0.7, type: 'spring'
        }
    }
  }

    return (
        <motion.div className="sidebar"
        
        variants={sidebar_variant}
        initial='hidden'
        animate='visible'
         >
            <img src={mightycoder} alt="avatar" className="sidebar__avatar"/>
             <div className="sidebar__name">Tonmoy <span>Biswas</span></div>
              <div className="sidebar__item sidebar__title">Web Development</div>
              <a href={resume} download="resume.pdf">
                 <div className="sidebar__item sidebar__resume">
                     <img src={tie} alt="resume" className="sidebar__icon"/>Download Resume
                 </div>
              </a>
             <figure className="sidebar__social-icon my-2">
                 <a href="#"><img src={facebook} alt="facebook" className="sidebar__icon mr-3"/> </a>
                 <a href="#"><img src={instagram} alt="instagram" className="sidebar__icon"/></a>
             </figure>
             <div className="sidebar_contact">
                 <div className="sidebar__item sidebar__github">
                   <a href="#"><img src={github} alt="github" className="sidebar__icon mr-3"/>github</a>
                 </div>
                 <div className="sidebar__location">
                     <img src={pin} alt="location" className="sidebar__icon mr-3"/>
                     Kolkata, India
                 </div>
                 <div className="sidebar__item">tanubiswas420@gmail.com</div>
                 <div className="sidebar__item">1111111/0000000</div>
             </div>
              <div className="sidebar__item sidebar__email" onClick={handaleEmailme}>email me</div>
        </motion.div>
    );
}

export default Sidebar;