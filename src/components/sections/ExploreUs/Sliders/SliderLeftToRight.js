"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import { sliderSettings } from './../utils/utils';
const SliderLeftToRight = ({badgeTitle,products}) => {
    const [srtl, setSRtl] = useState(true);
    const s_settings = {
       ...sliderSettings,
        rtl: srtl
    };
    const handleBeforeChange = (oldIndex, newIndex) => {
        if (newIndex === 0) {
            setSRtl(false);
        } else if (newIndex === products.length-1) {
            setSRtl(true);
        }
    };
    return (
        <div className="row flex-md-row-reverse mb-5">
                    <div className="col-md-3">
            <div className="soft_dev_slider_badge">
                <div>
                <p>{badgeTitle} </p>
                <p>Support </p>
                </div>
            </div>
        </div>
        <div className="col-md-9">
            <Slider className="custom-slider" {...s_settings} beforeChange={handleBeforeChange}>
                {
                    products.map((item, i) => (
            
                            <img className="explore_slider_image" src={item?.image} key={i} alt="" />
                 
                    ))
                }
            </Slider>
        </div>

    </div>
    );
};

export default SliderLeftToRight;