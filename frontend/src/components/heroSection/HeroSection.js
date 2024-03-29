import React from 'react';
import { Button } from '../button/Button';
import '../../App.css';
import './HeroSection.css';


const HeroSection = ()=>{

    return (
        <div className="hero-container">
            <video src="/video/farm.mp4" autoPlay loop muted></video>
            <h1>
                Wlecome to Cattle Zoo
            </h1>
            <p>Download our app and get started</p>
            
			<div className="hero-btns" >
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
					Get Started
				</Button>
				<Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
					Go For Products
				</Button>
            </div>
           
        </div>
    );

}
export default HeroSection;