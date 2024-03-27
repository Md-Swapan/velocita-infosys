"use client";
import Link from "next/link";
import "./navbar.css";
import Logo from "/public/logo.png";
import Image from "next/image";
import MenuIcon from "/public/menu.png";
import CloseIcon from "/public/close.png";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState(null);
  const pathname = usePathname();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   setToken(token);

  // }, [pathname]);

  // const LogoutHandler = () => {
  //   localStorage.removeItem("token");
  //   setToken(null);

  //   setTimeout(() => {
  //     router.push("/login");
  //   });
  // };

  return (
    <div className="navbar">
      <nav className="velocita_nav container ">
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
            <Link href={"/"}>Home</Link>
          </p>
          <p>
            <Link href={"/about"}>About Us</Link>
          </p>
          <p>
            <Link href={"/services"}>Services</Link>
          </p>
          <p>
            <Link href={"#"}>Portfolio</Link>
          </p>
          <p>
            <Link href={"/career"}>Career</Link>
          </p>
          <p>
            <Link className="mobile_link_btn" href={"#"}>
              Contact Us
            </Link>
          </p>
          {/* {token && (
          <p>
            <Link href={"/createjobpost"}>Create Job Post</Link>
          </p>
        )} */}
          {/* {token ? (
          <p onClick={LogoutHandler}>Logout</p>
        ) : (
          <p>
            <Link href="/login">Login</Link>
          </p>
        )} */}
        </div>
        {/* for mobile device  */}




        {/* for desktop device */}
        <ul className="d-none d-md-flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>

          <li>
            <Link href={"/about"}>About Us</Link>
          </li>
          <li>
            <Link href={"/services"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Portfolio</Link>
          </li>

          <li>
            <Link href={"/career"}>Career</Link>
          </li>
          <li>
            <Link className="link_btn" href={"#"}>
              Contact Us
            </Link>
          </li>
          {/* {token ? (
          <li>
            <Link className="link_btn" href={"/createjobpost"}>
              Create Job Post
            </Link>
          </li>
        ) : (
          ""
        )} */}
          {/* {token ? (
          <li onClick={LogoutHandler}>Logout</li>
        ) : (
          <li>
            <Link className="link_btn" href="/login">
              Login
            </Link>
          </li>
        )} */}
        </ul>
        {/* for desktop device */}
      </nav>
    </div>
  );
};

export default Navbar;
