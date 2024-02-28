import React from "react";
import "./Experience.css";
import Image from "next/image";
import icon from "../../../assets/images/icons/Mask group.png"

const Experience = () => {
  return (
    <>
      <div className="experience_section">
        <div className="experience_content_container container">
          <div className="year_of_experience">
            <h1>10 +</h1>
            <h5>YEAR OF EXPERIENCE</h5>
          </div>
          <div className="real_solution_content">
            <h3>
              Real Solution <br /> <span>For Your Business</span>
            </h3>

            <p>
              As a leading IT consulting firm, we help businesses to reinvent
              and excel by establishing complete reliance on information
              technology and offering high quality technology consulting
              services.
            </p>

            <div className="d-flex">
              <div>
                <Image src={icon} />
                <span>Creative Concept Execution</span>
              </div>
              <div>
                <Image src={icon2} />
                <span>Amazing Business Solution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
