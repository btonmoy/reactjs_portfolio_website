import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Navbar = () => {
    const [active,setActive] = useState('')

    useEffect(() => {
        let currentURL = window.location.href
        console.log(currentURL);
        if(currentURL.endsWith('/'))
        setActive('About');
        else if (currentURL.endsWith('/Projects'))
        setActive('Projects')
        else if (currentURL.endsWith('/Resume'))
        setActive('Resume')
    }, [active])

    const nabar_variants = {
        hidden: {
            y: '-30vh',
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return(
        <motion.div className="navbar"
        
         variants={nabar_variants}
         initial='hidden'
         animate='visible'
        
         >
            <div className="navbar__active">
                {active}
            </div>
            <div className="navbar__items">
                { active!== 'About' &&  
                <Link to="/"> 
                <div className="navbar__item" onClick={() =>setActive('About')}>About</div>
                </Link>
                }
                {active!=='Resume'?
                <Link to="/Resume">
                 <div className="navbar__item" onClick={() =>setActive('Resume')}>Resume</div>
                 </Link>
                :null}
                {active!=='Projects' ? 
                <Link to="/Projects">
                <div className="navbar__item" onClick={() =>setActive('Projects')}>Projects</div>
                </Link>
                :null}
            </div>
        </motion.div>
    );
};

export default Navbar;