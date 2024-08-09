import React from 'react';
import Nav from '../Nav';
import Testimonial from './testimonials/Testimonial';
import WhyUs from './whyUs/WhyUs';
import { PPoints } from './whyUs/PositivePoints/PositivePoint';

const About=()=>{
    return(
        <div>
            {/* <Nav/> */}
            <WhyUs/>
            <Testimonial/>
        </div>

    );
};

export default About;





