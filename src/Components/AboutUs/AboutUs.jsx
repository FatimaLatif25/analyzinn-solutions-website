import React from 'react'
import {Layout,Button} from 'antd'
import './Aboutus.css'


const AboutUs = () => {

  return (
    <div className='AboutUs'>
      <div className='OverLay'>

      
      </div>
      <Layout
        className='LayoutStyle'
        >
          <div>

        <h2>Who We Are</h2>
        <p>Consulting Firm Powered by Analytics!
        We support leaders to EVOLVE their organizations using our proven analytics consulting services.</p>
        <p>We’re a growing group of IT professionals providing businesses worldwide with solutions and services of Data Management, Reporting & Visualization, Digital marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue, and accelerate innovation!</p>
          </div>
        <Button className='ButtonStyle'>Learn More</Button>
      </Layout>
    </div>

  )
}

export default AboutUs