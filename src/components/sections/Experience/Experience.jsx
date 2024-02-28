import React from "react";
import "./Experience.css";
import Image from "next/image";
import icon from "../../../assets/images/icons/Mask group.png";
import icon2 from "../../../assets/images/icons/Mask group (1).png";

const Experience = () => {
  return (
    <>
      <div className="experience_section">
        <div className="experience_content_container container">
          <div className="year_of_experience">
            <div className="d-flex">
              <h1>10 </h1>
              <span>+</span>
            </div>
            <h5>YEAR OF EXPERIENCE</h5>
          </div>

          <div className="real_solution_content">
            <div className="real_solution_content_title">
              <span className="span1">Real Solution </span>
              <br /> <span className="span2">For Your Business</span>
            </div>

            <p>
              As a leading IT consulting firm, we help businesses to reinvent
              and excel by establishing complete reliance on information
              technology and offering high quality technology consulting
              services.
            </p>

            <div className="d-flex mt-5 text-white">
              <div className="d-flex me-5">
                <Image width={40} src={icon} />
                <span className="mx-3">Creative <br />Concept Execution</span>
              </div>
              <div className="d-flex me-5">
                <Image width={40} src={icon2} />
                <span className="mx-3">Amazing <br />Business Solution</span>
              </div>
            </div>
            <button className="read_more_btn">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
