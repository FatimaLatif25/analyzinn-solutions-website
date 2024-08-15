import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import './ServicePageServices.css'

const Services=[
{
    title:'Business Analytic',
    Descriptions:'Our Business Analytics services help you to understand your business better and make informed decisions.',
    link:'/business-analytics',
    img:'./src/assets/Service-Business.png'
},
{
    title:'Marketing Analytic',
    Descriptions:'Our Marketing Analytics services help you to understand your marketing strategies better and make informed decisions.',
    link:'/digital-marketing',
    img:'./src/assets/Service-Market.png'
},
{
    title:'Automation',
    Descriptions:'Our Automation services help you to automate your business processes and make informed decisions.',
    link:'/automation-integration',
    img:'./src/assets/Service-Ai.png'
}
]
export const ServicePageServices = () => {
  return (
    <div className='ServicePageServices'>
        <h1>Our Services</h1>
        {
            Services.map((service,index)=>{
                return(
                    <div className='serviceItem' key={index}>
                        <img src={service.img} alt="" />
                        
                        <div>
                        <h2>{service.title}</h2>
                        <p>{service.Descriptions}</p>
                        <Link to={service.link}>
                            <Button>
                                Learn More
                            </Button>
                        </Link>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
