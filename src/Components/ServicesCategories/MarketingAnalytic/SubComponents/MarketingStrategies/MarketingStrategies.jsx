import React from 'react'
import './MarketingStrategies.css'
import { Layout, Row, Col,Timeline } from 'antd'
import { useInView } from 'react-intersection-observer'



export const MarketingStrategies = () => {
    const { ref, inView } = useInView({
        threshold: 0.8,
        triggerOnce: true,
    });
  return (
    <div className='MarketingStrategies' ref={ref}>
        <div className='MarketingStrategies-Content'>
            <h1 className={inView?'fadeIn':''}>How can you access our Digital Marketing Strategies?</h1>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <p>Analyzinn will provide you the additional stack for accessing our Digital Marketing Strategies:</p>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Timeline>
                        <Timeline.Item>Marketing Analytics Dashboards</Timeline.Item>
                        <Timeline.Item>Revenue Dashboards</Timeline.Item>
                        <Timeline.Item>Customer Level Dashboards</Timeline.Item>
                        <Timeline.Item>Campaign Level Dashboards</Timeline.Item>
                    </Timeline>
                </Col>
            </Row>
            </div>


    </div>
  )
}
