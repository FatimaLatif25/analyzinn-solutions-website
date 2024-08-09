import React from 'react'
import './NeedForService.css'
import { Layout, Col, Row, Steps, Timeline } from 'antd'
import { useInView } from 'react-intersection-observer'

export const NeedForService = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div className='NeedForService' ref={ref} >
            <div className='NeedForService-Content' >
                <h1 className={inView ? 'fadeIn' : ''}>Why You Need Our Services</h1>
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12} >
                        <div ref={ref}>
                        <Steps direction='vertical' className={`fadeIn ${inView ? 'showSteps' : ''}`}
                            current={3}
                        >
                            <Steps.Step title="Promotes Data Democratization" description="Makes data accessible for all." />
                            <Steps.Step title="Efficient Decision Making" description="Enhances efficiency in decision-making and data processes." />
                            <Steps.Step title="Quick Identification of Issues" description="Identifies potential losses, security breaches, crises, and opportunities quicker." />
                            <Steps.Step title="Faster Response to Data Changes" description="Responds faster to changes in data and important business metrics." />
                        </Steps>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Timeline className={`fadeIn ${inView ? 'showTimeline' : ''}`}>
                            <Timeline.Item color="green">Promotes Data Democratization</Timeline.Item>
                            <Timeline.Item color="green">Efficient Decision Making</Timeline.Item>
                            <Timeline.Item color="green">Quick Identification of Issues</Timeline.Item>
                            <Timeline.Item color="green">Faster Response to Data Changes</Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
