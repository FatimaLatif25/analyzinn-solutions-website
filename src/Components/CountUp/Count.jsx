// src/components/CountUpNumber.js
import React from 'react';
import { Statistic } from 'antd';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Count.css';

const Count = ({ title, start, end, duration, prefix, suffix }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once
        threshold: 0.5,    // 10% of the component must be visible
      });

      const [isCounting, setIsCounting] = React.useState(false);
      React.useEffect(() => {
        if (inView) {
          setIsCounting(true);
        }
      }, [inView]);

    return (
  <div ref={ref} className="countup-card">
    {/* <h3 className="countup-title">{title}</h3> */}
    <Statistic 
      valueRender={() => (
        <CountUp className='countup-number'
          start={isCounting?start:0}
          end={isCounting?end:0}
          duration={isCounting?duration:0}
          separator=","
          prefix={prefix}
          suffix={suffix}
          decimals={0}
          decimal="."
          // redraw={true}
        />
      )}
    />
    <h3>{title}</h3>
    
  </div>
    );
};

export default Count;
