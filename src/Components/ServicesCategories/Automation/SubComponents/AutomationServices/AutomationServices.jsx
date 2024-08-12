import React from 'react'
import './AutomationServices.css'
import { Row, Col } from 'antd'
import { DrawerCard } from '../../../CommonComponent/DrawerCard/DrawerCard'

// Our Services
// Our Services will help you Answer these Questions:

// Want to reduce manual work? 
// Exploring ways on how the applications can talk and integrate?
// Need workflow-based automation?
// Are you looking for Automation and Integration Services
// Want to get rid of excel sheets and data management?

export const AutomationServices = () => {
  return (
        <div className='AutomationServices'>
            <div className='AutomationServices-Content'>
                <h1>Services</h1>
                <h4>Our Services will help you Answer these Questions:</h4>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                        <DrawerCard title='Want to reduce manual work?' description='Reduce manual work by automating repetitive tasks.' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                        <DrawerCard title='Exploring ways on how the applications can talk and integrate?' description='Integrate applications to talk to each other and share data.' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                        <DrawerCard title='Need workflow-based automation?' description='Automate workflows to improve efficiency and reduce errors.' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                        <DrawerCard title='Are you looking for Automation and Integration Services?' description='Get Automation and Integration Services to automate and integrate your business processes.' />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={8}>
                        <DrawerCard title='Want to get rid of excel sheets and data management?' description='Automate data management and get rid of excel sheets.' />
                    </Col>
                </Row>
                </div>
        </div>
  )
}
