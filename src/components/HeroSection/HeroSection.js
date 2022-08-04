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
            <Button 
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
            </Button>
        </div>
    </div>
  )
}

export default HeroSection;