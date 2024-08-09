import React from 'react'
import './BusinessHeroSection.css'
export const BusinessHeroSection = () => {
  return (
    <div className='BusinessHeroSection'>
        <div className='Video-Container'>
        <video src="./src/assets/videoplayback.webm"
        autoPlay loop muted
        ></video>
        </div>
        <div className='Hero-Content'>
            <h1>Data & Business Analytics</h1>
            <p>Our Business Analytics services help you to understand your business better and make informed decisions. We offer a wide range of services to help you achieve your business goals.</p>
        </div>

    </div>
  )
}
