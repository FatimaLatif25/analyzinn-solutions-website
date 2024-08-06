import React from 'react'
import { Layout, Button} from 'antd'
import Count from '../CountUp/Count';
import './Progress.css'

const Progress = () => {
   

  return (
    <div className='Progress'>
        <Layout className='LayoutStyle'
        >
            <div className='Left'>
            <h1>Why You Need to Invest in Data Today.</h1>
            <p>There’s no denying that data, has become vital for us in our everyday lives. Our Amazon and Google know our preferences, our smart home devices have adapted to our everyday lives. The World of Social Media itself produces enough data to help customize our lives. So Why shouldn’t you use data, and scale your business exponentially!</p>
            <Button className='ButtonStyle' >Learn More</Button>
            </div>
            <div className='Right'>
                <Count title="Years in Business" start={0} end={5} duration={5} prefix="" suffix="+" />
                <Count title="Big Data Analytics Market 2023" start={0} end={274} duration={5} prefix="$" suffix="B" />
                <Count title="Blame Unstructured Data as a Problem.​" start={0} end={95} duration={7} prefix="" suffix="%" />
                <Count title="Of The World's Data is User Generated​" start={0} end={70} duration={7} prefix="" suffix="%" />
            </div>
        </Layout>
    </div>
  )
}

export default Progress