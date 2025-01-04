import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I'm <span className='font-semibold'> Peter</span>
            <br/>
            A computer science student in Chicago 
        </h1>
    ),
    2: (
        <InfoBox
            text = "I'm always looking to streamline and optimize"
            link = "/about"
            btnText = "Learn More" 
        />
    ),
    3: (
        <InfoBox
            text = "I've worked on many projects over the years. Curious to see what I've done?"
            link = "/projects"
            btnText = "Visit portfolio" 
        />    
    ),    
    4: (
        <InfoBox
            text = "Looking for a dev? Get in touch"
            link = "/contact"
            btnText = "Let's talk" 
        />    
    ),
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo