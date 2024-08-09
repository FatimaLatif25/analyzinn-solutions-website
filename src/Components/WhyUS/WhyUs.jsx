// import React from 'react'
import { Layout,Tabs,Grid } from 'antd'
import './whyus.css'
// import ServTab from './Tab/ServTab'
import { PPoints } from '../../Constant/PositivePoints/PositivePoint';
// import {PieChartOutlined,BranchesOutlined,ShareAltOutlined} from '@ant-design/icons'
const WhyUs = () => {
    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
  return (
    <div className='WhyUs'>
        <Layout
           className='LayoutStyle'
        >
            <Tabs className='Tabs' tabPosition= {screens.xl?'top':'left'} items={PPoints.map((points, index) => {
                return(
                    {
                        key: index + 1,
                        label: screens.md?points.title:null,
                        
                        children: <div 
                            style={screens.sm?{
                                width: '70%',
                                margin: 'auto',
                            }:{
                                width: '100%',
                            }
                            }
                        >
                            <h1>{points.title}</h1>
                            <p>{points.Descriptions}</p>
                        </div>,
                        icon: points.icon
                    }
                )
            })
            } defaultActiveKey='1' centered />
               
        </Layout>
    </div>
  )
}

export default WhyUs