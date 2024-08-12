// import React from 'react'
import { Layout,Tabs,Grid } from 'antd'
import './services.css'
// import ServTab from './Tab/ServTab'
import { Services } from '../../Constant/Services/Services'
// import {PieChartOutlined,BranchesOutlined,ShareAltOutlined} from '@ant-design/icons'
const ServiceTab = () => {
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
  return (
    <div className='Services'>
        <Layout className='LayoutStyle' >
            <Tabs className='Tabs' items={Services.map((service, index) => {
                return(
                    {
                        key: index + 1,
                        label: screens.md?service.title:null,
                        children: <div 
                            style={screens.sm?{
                                width: '70%',
                                margin: 'auto',
                            }:{
                                width: '100%',
                            }
                            }
                            >
                            <h1>{service.title}</h1>
                            <p>{service.Descriptions}</p>
                            </div>,
                        icon: service.icon
                    }
                )
            })
        } defaultActiveKey='1' centered />
               
            </Layout>
    </div>
  )
}

export default ServiceTab