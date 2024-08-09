import React from 'react'
import './MarketingServicesCards.css'
import { DrawerCard } from '../../../CommonComponent/DrawerCard/DrawerCard'
import { Row, Col } from 'antd'

// Social Media Marketing

// SEO (Search Engine Optimization)

// Pay Per Click Marketing

// Email Marketing

// Website/ Logo Design, Landing Pages

// Content Writing

export const MarketingServicesCards = () => {
  return (
    <div className='MarketingServicesCards'>
        <div className='MarketingServicesCards-Content'>
            <h1>Marketing Services</h1>
            <Row gutter={[16, 16]} className='Row'>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Social Media Marketing' description='Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic.' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='SEO (Search Engine Optimization)' description='SEO stands for “search engine optimization.” In simple terms, it means the process of improving your site to increase its visibility for relevant searches.' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Pay Per Click Marketing' description='Pay-per-click marketing is a way of using search engine advertising to generate clicks to your website, rather than “earning” those clicks organically.' />
                </Col>
            
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Email Marketing' description='Email marketing is the act of sending a commercial message, typically to a group of people, using email.' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Website/ Logo Design, Landing Pages' description='Website design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design.' />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={3}>
                    <DrawerCard title='Content Writing' description='Content writing is the process of planning, writing and editing web content, typically for digital marketing purposes.' />
                </Col>
            </Row>
        </div>

    </div>
  )
}
