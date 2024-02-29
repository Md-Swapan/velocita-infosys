"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import { sliderSettings } from './../utils/utils';
const SliderRightToLeft = ({badgeTitle,products}) => {
    const [rtl, setRtl] = useState(false);
    const settings = {
        ...sliderSettings,
        rtl: rtl
    };
    const handleBeforeChange = (oldIndex, newIndex) => {
        if (newIndex === 0) {
            setRtl(false);
        } else if (newIndex === products.length-1) {
            setRtl(true);
        }
    };
    return (
        <div className="row mb-5">
        <div className="col-md-3">
            <div className="slider_badge">
                <div>
                <p>{badgeTitle} </p>
                <p>Support </p>
                </div>
            </div>
        </div>
        <div className="col-md-9">
            <Slider className="custom-slider" {...settings} beforeChange={handleBeforeChange}>
                {
                    products.map((item, i) => (
                            <img key={i} className="explore_slider_image" src={item?.image} alt="" />

                    ))
                }
            </Slider>
        </div>
    </div>
    );
};

export default SliderRightToLeft;