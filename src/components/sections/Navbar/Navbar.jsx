import Link from "next/link";
import './navbar.css'
import Logo from '/public/logo.png'
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="velocita_nav container mt-3">
       <div className="velocita_logo">
       <Image width={270} src={Logo} />
       </div>
       <ul className="d-none d-md-flex">
          <li><Link href={"#"}>Home</Link></li>
          <li><Link href={"#"}>Services</Link></li>
          <li><Link href={"#"}>About Us</Link></li>
          <li><Link href={"#"}>Portfolio</Link></li>
          <li><Link href={"#"}>Blog</Link></li>
          <li><Link href={"#"}>Career</Link></li>
          <li><Link href={"#"}>Team</Link></li>
          <li><Link className="link_btn" href={"#"}>Contact Us</Link></li>
       </ul>
    </nav>
  );
};

export default Navbar;