import React from 'react';
import Navbar from '../Navbar/Navbar';
import BannerImage from '/public/bannerimg.png'
import RightArrow from '/public/rightarrow.png'
import Image from 'next/image';
import './header.css'
const Header = () => {
    return (
        <header style={{ minHeight: "400px" }} className='container mt-5'>
            <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div  className="banner_content">
                        <h1>We constantly 
                            <span> innovate to
                            create solution</span>
                            </h1>
                            <p>As a leading IT consulting firm, we help businesses to reinvent andexcel by establishing complete relianceon information technology andoffering high quality technology consulting services.</p>
                            <button className='get_start_btn me-2'>Get Start</button>
                            <button className='get_start_btn outlined_btn'>Watch Now <Image src={RightArrow} className='ms-2' /></button>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-content-center justify-content-center">
                    <div>
                        <Image src={BannerImage} width={"100%"} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;