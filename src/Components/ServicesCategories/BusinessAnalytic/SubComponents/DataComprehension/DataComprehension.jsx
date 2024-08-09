import React from 'react'
import './DataComprehension.css'
import { Layout, Col, Row, Steps, Card } from 'antd'
import { InView, useInView } from 'react-intersection-observer'


// EVOLVE Through Data Comprehension
// Truly data-driven organizations: Gain a competitive advantage over competitors who use traditional data methods.
// Unlock business potential: Enable your organization to view data differently to empower decision-making across all business functions.

// How ANALYZINN Helps You Gain a Competitive Advantage
//-- Understand Your Customers:

// Offer superior customer experiences by comprehending customer needs and behaviors.
//-- Identify Opportunities and Threats:

// Market more effectively by recognizing opportunities and potential threats.
//-- Proactive Business Response:

// Respond to business needs in a timely manner, enhancing agility.
//-- Foster Innovation:

// Innovate faster by leveraging relevant data insights.
// Make Informed Decisions:

// Gain a competitive edge by making well-informed and optimized decisions using data.

export const DataComprehension = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

  return (
    <div className='DataComprehension' ref={ref}>
        <div className='DataComprehension-Content'>
            <h1 className={inView?'fadeIn':''}>EVOLVE Through Data Comprehension</h1>
            <Row gutter={[16, 16]}>
                {/* // Steps */}
                <Col xs={24} sm={24} md={24} lg={12} xl={10} 
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <Steps direction='vertical' current={1} className={inView?'showSteps':''}>
                        <Steps.Step title="Truly data-driven organizations" description="Gain a competitive advantage over competitors who use traditional data methods." />
                        <Steps.Step title="Unlock business potential" description="Enable your organization to view data differently to empower decision-making across all business functions." />
                    </Steps>
                </Col>
                
                <Col xs={24} sm={24} md={24} lg={12} xl={'auto'}>
                   <Row gutter={[16, 16]}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Card title="Understand Your Customers" bordered={false}>
                                <p>Offer superior customer experiences by comprehending customer needs and behaviors.</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Card title="Identify Opportunities and Threats" bordered={false}>
                                <p>Market more effectively by recognizing opportunities and potential threats.</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Card title="Proactive Business Response" bordered={false}>
                                <p>Respond to business needs in a timely manner, enhancing agility.</p>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <Card title="Foster Innovation" bordered={false}>
                                <p>Innovate faster by leveraging relevant data insights.</p>
                            </Card>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}
