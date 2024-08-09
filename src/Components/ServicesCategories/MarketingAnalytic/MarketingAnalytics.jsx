import React from 'react'
import { MarketingHeroSection } from './SubComponents/MarketingHeroSection/MarketingHeroSection'
import { MarketingStrategies } from './SubComponents/MarketingStrategies/MarketingStrategies'
import { MarketingServices } from './SubComponents/MarketingServices/MarketingServices'
import { MarketingServicesCards } from './SubComponents/MarketingServicesCards/MarketingServicesCards'

export const MarketingAnalytics = () => {
  return (
    <div>
        <MarketingHeroSection />
        <MarketingServices />
        <MarketingServicesCards />
        <MarketingStrategies />
    </div>
  )
}
