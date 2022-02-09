import webdesign from '../../assets/icons/web-design.png'
import webdevelopment from '../../assets/icons/web-development.png'
import wordpressdesign from '../../assets/icons/wordpress-design.png'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import psd from '../../assets/icons/psd.png'

const skills = [
    {
        icon: webdesign,
        title: "WEB DESIGN",
        about: ["I can Design Website using", <strong key={1}> HTML, CSS, Bootstrap, Javascript, jquery and React.js</strong>]
    },  
    {
        icon: webdevelopment,
        title: "WEB DEVELOPMENT",
        about: ["I can Develop Website using", <strong key={1}> PHP, Laravel, MySql </strong>]
    },
    {
        icon: wordpressdesign,
        title: "WORDPRESS THEME CUSTOMIZATION",
        about: ["I can Customize your", <strong key={1}> WordPress Website Theme </strong>]
    },
    {
        icon: computer,
        title: "WORDPRESS THEME DEVELOPMENT",
        about: ["I will Develop your WordPress theme as your requirement", <strong key={1}> WordPress theme Development</strong>]
    },
    {
        icon: psd,
        title: "PSD TO HTML",
        about: ["I can convert your PSD file to HTML using Html, CSS, Javascript ", <strong key={1}>  PSD to HTML </strong>]
    },
    {
        icon: repair,
        title: "Frontend Development",
        about: ["Minimalistic user interface designer using", <strong key={1}> figma and framer</strong>]
    }
 
]
export default skills;