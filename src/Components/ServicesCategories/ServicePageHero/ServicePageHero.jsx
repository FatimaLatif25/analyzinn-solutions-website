import React from 'react'
import './ServicePageHero.css'
export const ServicePageHero = () => {
  return (
    <div className='ServicePageHero'>
        <div className="background3dimg">
            <img src="./src/assets/file.png" alt="" />
        </div>
        <div className='ServicePageHero__container'>
            <h1 className='ServicePageHero__heading'>Services</h1>
            <p className='ServicePageHero__description'>Empowering your business with cutting-edge solutions.</p>
        </div>
    </div>
  )
}
