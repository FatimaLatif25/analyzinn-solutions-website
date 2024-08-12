import React from "react";
import { Carousel } from "antd";
import { testimonialsData } from "./Testimonal/Testimonal";
import './Testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonialStyle">
        <span>
        <h1>Testimonials</h1>
        <a href="#">View All {'->'}</a>
        </span>
      <Carousel arrows infinite={true} autoplay className="carouselStyle">
      {testimonialsData.map((testimonial, index) =>
        <div key={index}>
          <div  className="contentStyle">
            <span>
            <img src={testimonial.image} alt="logo" />
            <span>
            <h3>{testimonial.name}</h3>
            <h6>{testimonial.position}  | {testimonial.company} </h6>
            </span>
            </span>
            <p>{testimonial.testimonial}</p>
          </div>
        </div>
         )}
      </Carousel>
    </div>
  );
};

export default Testimonial;
