import React from 'react'
import { Button, Layout, Row, Col, Typography } from 'antd'
import './HeroSection.css'

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const HeroSection = () => {
  const title = "Grow Your Business with Data-driven Decision-Making!";
  const words = title.split(' ').map((word, index) => (
    <span key={index}>{word}</span>
  ));
  return (
    <>
     <Layout>
      <Content className='hero-content'>
        <Row justify="center" align="middle" style={{ minHeight: '60vh' }}>
          <Col span={20}>
            <Title level={1} className='hero-title'>{words}</Title>
            <Paragraph className='hero-paragraph'>
            Discover how leveraging your data can propel your business forward. 
            Connect with us to explore innovative data solutions tailored for growth.
            </Paragraph>
            <Button className='custom-button' size="large">Get a Free Quote</Button>
          </Col>
        </Row>
      </Content>
    </Layout>
    </>
  )
}

export default HeroSection



