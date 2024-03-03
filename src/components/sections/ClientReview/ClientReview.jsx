"use client";
import React from "react";
import "./ClientReview.css";
import Slider from "react-slick";
import nextArrow from "../../../assets/images/client-review-section-img/Group 1000005240.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const ClientReview = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="client_review_section">
      <h2 className="heading">What Our Clients Say?</h2>
      <div className="client_slider_container">
        <div>
          <Slider {...settings}>
            <div className="slide_containt">
              <p className="comments">
                As a leading IT consulting firm, we help businesses to reinvent
                andexcel by establishing complete relianceon information
                technology andoffering high quality technology consulting
                services.
              </p>
              <h5>Md. Hasibul Haque</h5>
              <h6>UI/UX Designer</h6>
            </div>
            <div className="slide_containt">
              <p className="comments">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
                iusto quo totam suscipit quidem accusantium, perferendis
                repudiandae consectetur accusamus quos labore, rerum aspernatur
              </p>
              <h5>ipsum dolor sit amet.</h5>
              <h6>Lorem, ipsum</h6>
            </div>
            <div className="slide_containt">
              <p className="comments">
                Nihil, provident blanditiis in magni perspiciatis dolorem nulla
                quod, commodi, reiciendis id nisi! Laborum molestiae ipsam
                aliquid?
              </p>
              <h5>provident blanditiis</h5>
              <h6>dolorem nulla</h6>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
