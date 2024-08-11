import React from 'react'
import { AutomationHeroSection } from './SubComponents/AutomationHeroSection/AutomationHeroSection'
import { AutomationServices } from './SubComponents/AutomationServices/AutomationServices'
import { AutomationServiceCards } from './SubComponents/AutomationServiceCards/AutomationServiceCards'
export const Automation = () => {
  return (
    <div>
        <AutomationHeroSection />
        <AutomationServices />
        <AutomationServiceCards />
    </div>
  )
}
 