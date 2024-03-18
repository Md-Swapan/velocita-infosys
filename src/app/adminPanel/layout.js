import logo from "../../assets/images/Velocita-logo1 1.png";
import Image from "next/image";
import "./adminPanel.css";
import Link from "next/link";
import { FaList } from "react-icons/fa";
import { LuClipboardEdit } from "react-icons/lu";
import { IoArrowBackSharp } from "react-icons/io5";

export const metadata = {
  title: "Velocita Infosys Admin Panel",
  description:
    "As a leading IT consulting firm, we help businesses to reinvent and excel by establishing complete reliance on information technology and offering high quality technology consulting services.",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="admin_panel_layout">
        <div className=" admin_panel_container ">
          <div className="sidebar_container ">
            <div className="sidebar">
              <Image width={200} src={logo} />
              <ul>
                <Link href={"/adminPanel/job-application-list"}>
                  <li>
                    <FaList /> Job Application List
                  </li>
                </Link>
                <Link href={"/adminPanel/create-job-post"}>
                  <li>
                    <LuClipboardEdit /> Create job post
                  </li>
                </Link>
                <Link href={"/"}>
                  <li>
                    <IoArrowBackSharp /> Back to Home
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="admin_panel_body">
            <div className="admin_header">
              <h4>Admin Panel </h4>
            </div>
            <div className="admin_panel_children">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
