import React from "react";
import Navbar from "../Navbar/Navbar";
import BannerImage from "/public/bannerimg.png";
import RightArrow from "/public/rightarrow.png";
import BubbleImageOne from "/public/Agency/advertisement_6059057.png";
import BubbleImageTwo from "/public/Agency/artificial-intelligence_9626671.png";
import BubbleImageThree from "/public/Agency/Group 1000005377.png";
import BubbleImageFour from "/public/Agency/Group 1000005379.png";
import BubbleImageFive from "/public/Agency/Group 1000005380.png";
import BubbleImageSix from "/public/Agency/image 56.png";
import BubbleImageSeven from "/public/Agency/open-door_8465313.png";
import Image from "next/image";
import "./header.css";

const Header = () => {
  return (
    <header className="container mt-5 py-5">
      <div className="row">
        <div className="col-lg-6 d-flex mb-5 mb-lg-0 align-items-center justify-content-center">
          <div className="banner_content">
            <h2>Accelerating</h2>
            <h1>Business Velocity <br />with Comprehensive <br />BPO Solutions</h1>
            <br />
            
            <p>
            Velocita Infosys Limited is dedicated to providing top-tier services that drive businesses forward in the dynamic digital landscape. Through innovation, reliability, and customer-centricity, we pave the path to success, ensuring growth with every endeavor.
            </p>
            <button className="get_start_btn me-2 mt-4">Get Start</button>
            <button className="get_start_btn outlined_btn">
              Watch Now <Image src={RightArrow} className="ms-2" />
            </button>
          </div>
        </div>
        <div className="col-lg-6 d-flex  align-content-center justify-content-center justify-content-lg-end">
          <div className="position-relative">
            <Image src={BannerImage} className="banner_main_image" />
            <Image className="bubble_one" src={BubbleImageOne} width={65} />
            <Image className="bubble_two" src={BubbleImageTwo} width={55} />
            <Image className="bubble_three" src={BubbleImageThree} width={65} />
            <Image className="bubble_four" src={BubbleImageFour} width={65} />
            <Image className="bubble_five" src={BubbleImageFive} width={65} />
            <Image className="bubble_six" src={BubbleImageSix} width={70} />
            <Image className="bubble_seven" src={BubbleImageSeven} width={55} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
