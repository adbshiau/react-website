import React from 'react';
import { Button } from '../Button/Button';
import './HeroSection.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-2.mp4' autoPlay loop muted/>
        <h1>Angelica Shiau</h1>
        <p>Software Engineer</p>
        <div className='hero-btns'>
            {/* <Button 
            className='btns' 
            buttonSize='btn--large'
            buttonStyle='btn--outline'
            >
            GET STARTED    
            </Button>
            <Button 
            className='btns' 
            buttonSize='btn--large'
            buttonStyle='btn--primary'
            >
            WATCH TRAILER <i className='far fa-play-circle'/>    
            </Button> */}
            <a href="https://github.com/adbshiau" target="_blank"><i className="fa-brands fa-github fa-2xl"/></a>
            <a href="https://www.linkedin.com/in/adbshiau/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl"/></a>
            <a href="mailto:angelicashiau@gmail.com" target="_blank"><i className="fa-regular fa-envelope fa-2xl"/></a>
        </div>
    </div>
  )
}

export default HeroSection;