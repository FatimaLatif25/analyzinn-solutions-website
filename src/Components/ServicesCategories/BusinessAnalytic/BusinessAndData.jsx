import React from 'react'
import { BusinessHeroSection } from './SubComponents/HeroSection/BusinessHeroSection'
import { ProblemSolSection } from './SubComponents/ProblemSolvingSection/ProblemSolSection'
import { NeedForService } from './SubComponents/NeedForService/NeedForService'
import { DataComprehension } from './SubComponents/DataComprehension/DataComprehension'
import { DataAndBusinessServices } from './SubComponents/DataAndBusinessServices/DataAndBusinessServices'
import './BusinessStyle.css'

export const BusinessAndData = () => {
  return (
    <div className='BusinessStyle'>
        <BusinessHeroSection />
        <ProblemSolSection />
        <NeedForService />
        <DataComprehension />
        <DataAndBusinessServices />
    </div>
  )
}
