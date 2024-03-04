"use client";
import Link from "next/link";
import "./navbar.css";
import Logo from "/public/logo.png";
import Image from "next/image";
import MenuIcon from "/public/menu.png";
import CloseIcon from "/public/close.png";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  
  const token = localStorage.getItem("token");
  const LogoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };


  return (
    <nav className="velocita_nav container mt-3">
      <div className="velocita_logo">
        <Image src={Logo} />
      </div>
      {/* for mobile device  */}
      <Image
        onClick={() => setOpenMenu(true)}
        className="menu_icon d-md-none"
        width={30}
        src={MenuIcon}
      />
      <div className={`mobile_menu d-md-none ${openMenu ? "show" : "hide"}`}>
        <Image
          onClick={() => setOpenMenu(false)}
          className="menu_icon d-md-none mb-5"
          width={30}
          src={CloseIcon}
        />
        <p>
          <Link href={"#"}>Home</Link>
        </p>
        <p>
          <Link href={"#"}>Services</Link>
        </p>
        <p>
          <Link href={"#"}>About Us</Link>
        </p>
        <p>
          <Link href={"#"}>Portfolio</Link>
        </p>
        <p>
          <Link href={"#"}>Career</Link>
        </p>
        <p>
          <Link href={"#"}>Team</Link>
        </p>
        <p>
          <Link className="mobile_link_btn" href={"#"}>
            Contact Us
          </Link>
        </p>
        {token && (
          <p>
            <Link href={"/adminPanel"}>Admin Panel</Link>
          </p>
        )}
        {token ? (
          <p onClick={LogoutHandler}>Logout</p>
        ) : (
          <p>
            <Link href="/login">Login</Link>
          </p>
        )}
      </div>
      {/* for mobile device  */}

      {/* for desktop device */}
      <ul className="d-none d-md-flex">
        <li>
          <Link href={"#"}>Home</Link>
        </li>
        <li>
          <Link href={"#"}>Services</Link>
        </li>
        <li>
          <Link href={"#"}>About Us</Link>
        </li>
        <li>
          <Link href={"#"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"#"}>Career</Link>
        </li>
        <li>
          <Link href={"#"}>Team</Link>
        </li>
        <li>
          <Link className="link_btn" href={"#"}>
            Contact Us
          </Link>
        </li>
        {token && (
          <li>
            <Link href={"/adminPanel"}>Admin Panel</Link>
          </li>
        )}
        {token ? (
          <li onClick={LogoutHandler}>Logout</li>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
      {/* for desktop device */}
    </nav>
  );
};

export default Navbar;
