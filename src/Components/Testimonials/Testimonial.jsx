import React from "react";
import {  } from "antd";
import { testimonialsData } from "../../Constant/Testimonal/Testimonial";
import './testimonial.css';

const Testimonial = () => {
  return (
    <div className="testimonialStyle">

        <div className="slider-container" style={{
          '--width': 'min(30vw, 400px)',
          '--height': '100px',
          '--quantity': testimonialsData.length 
        }} >

          <h3>Our Partners Speak</h3>
          <div className="item-list">

         { testimonialsData.map((item, index) => {
           return(
             <div key={item.name} className="item" style={{
              '--position': index + 1
             }}>
                <div className="testimonial">
                   
                    <div className="testimonial-author">
                        <img src={item.image} alt="author" />
                        <div className="author-info">
                            <h4>{item.name}</h4>
                            <h5>{item.designation}</h5>
                        </div>
                    </div>
                    <div className="testimonial-content">
                        <p>{item.testimonial}</p>
                    </div>
                </div>
            </div>
            );
       })}
              </div>
        </div>

    </div>
  );
};

export default Testimonial;
