import React from 'react';
import Nav from '../Nav';
import Testimonial from './testimonials/Testimonial';
import WhyUs from './whyUs/WhyUs';
import { PPoints } from '../../Constant/PositivePoints/PositivePoint';

const About=()=>{
    return(
        <div>
            <Nav/>
            <WhyUs/>
            <PPoints/>
            <Testimonial/>
        </div>

    );
};

export default About;
