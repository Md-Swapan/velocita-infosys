"use client";
import React, { useEffect, useState } from "react";
import "./footer.css";
import Image from "next/image";
import Logo from "/public/logo.png";
import youtube from "../../../../public/footer/youtube.png";
import adidas from "../../../../public/footer/adidas.png";
import gpay from "../../../../public/footer/gpay.png";
import aws from "../../../../public/footer/aws.png";
import linkedin from "../../../../public/footer/linkedin.png";
import riverbed from "../../../../public/footer/riverbed.png";
import facebookLogo from "../../../../public/footer/facebook.png";
import youtubeLogo from "../../../../public/footer/youtubeLogo.png";
import instagramLogo from "../../../../public/footer/instagram.png";
import twitterLogo from "../../../../public/footer/twitter.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const [token, setToken] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, [pathname]);

  const LogoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);

    setTimeout(() => {
      router.push("/login");
    });
  };

  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container footer_menu">
        <div>
          <Image src={Logo} />
          <p className="footer_des">
            Our experienced team of developers, designers, and strategists is
            eager to explore your project idea, brainstorm solutions, and craft
            a tailored plan to bring it to life. From web and mobile
            applications to cutting-edge software solutions, we're committed to
            delivering excellence every step of the way. Let's embark on this
            journey together and create something extraordinary!"
          </p>
          <button className="contact_btn">Contact US</button>
        </div>
        <div className="footer_sub_menu">
          <div>
            <h4>Quick Lick</h4>
            <Link href="">Home</Link>
            <Link href="">About</Link>
            <Link href="">Portfolio</Link>
            <Link href="">Blog</Link>
            <Link href="">Career</Link>
            {token ? (
              <Link className="link_btn" href={"/adminPanel"}>
                Admin Panel
              </Link>
            ) : (
              ""
            )}
            {/* {token ? (
              <Link className="link_btn" href={"/createjobpost"}>
                Create Job Post
              </Link>
            ) : (
              ""
            )} */}

            {token ? (
              <Link href={""} onClick={LogoutHandler}>
                Logout
              </Link>
            ) : (
              <Link className="link_btn" href="/login">
                Admin Login
              </Link>
            )}
          </div>
          <div>
            <h4>Services</h4>
            <Link href="">International Call Center Support</Link>
            <Link href="">Software Development Support</Link>
            <Link href="">Software Design</Link>
            <Link href="">UI/UX Design</Link>
            <Link href="">Graphics Design</Link>
            <Link href="">SEO</Link>
            <Link href="">Digital Marketing Support</Link>
            <Link href="">Applications</Link>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container sponsor_menu">
        <div className="sponsor_link">
          <Image src={youtube} />
        </div>
        <div className="sponsor_link">
          <Image src={adidas} />
        </div>
        <div className="sponsor_link">
          <Image src={gpay} />
        </div>
        <div className="sponsor_link">
          <Image src={aws} />
        </div>
        <div className="sponsor_link">
          <Image src={linkedin} />
        </div>
        <div className="sponsor_link">
          <Image src={riverbed} />
        </div>
      </div>
      <div className="divider"></div>
      <div className="container footer_bottom">
        <div>&copy;{year}, Velocita Infosys Ltd. All Rights Reserved.</div>
        <div className="footer_bottom_right">
          <p>Join Us on...</p>
          <div className="social_link">
            <Image src={facebookLogo} />
          </div>
          <div className="social_link">
            <Image src={youtubeLogo} />
          </div>
          <div className="social_link">
            <Image src={instagramLogo} />
          </div>
          <div className="social_link">
            <Image src={twitterLogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
