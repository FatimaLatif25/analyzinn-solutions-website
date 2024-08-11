import React from 'react'
import { useParams } from 'react-router-dom'
import {Automation} from '../Components/ServicesCategories/Automation/Automation'
import {MarketingAnalytics} from '../Components/ServicesCategories/MarketingAnalytic/MarketingAnalytics'
import {BusinessAndData} from '../Components/ServicesCategories/BusinessAnalytic/BusinessAndData'
import ServiceTab from '../Components/Services/ServiceTab'

const Service = () => {
    const {service} = useParams()
    if(!service || service === 'services') {
        return <ServiceTab />
    }
    switch (service) {
        case 'automation':
            return <Automation />
        case 'marketing-analytics':
            return <MarketingAnalytics />
        case 'business-and-data':
            return <BusinessAndData />
        default:
            return <h1>Services Not Found</h1>
    }
}

export default Service