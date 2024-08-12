import React from 'react'
import { BusinessHeroSection } from './SubComponents/HeroSection/BusinessHeroSection'
import { ProblemSolSection } from './SubComponents/ProblemSolvingSection/ProblemSolSection'
import { NeedForService } from './SubComponents/NeedForService/NeedForService'
import { DataComprehension } from './SubComponents/DataComprehension/DataComprehension'
import { DataAndBusinessServices } from './SubComponents/DataAndBusinessServices/DataAndBusinessServices'

const BusinessAndData = () => {
  return (
    <div>
        <BusinessHeroSection />
        <ProblemSolSection />
        <NeedForService />
        <DataComprehension />
        <DataAndBusinessServices />
    </div>
  )
}
export default BusinessAndData
