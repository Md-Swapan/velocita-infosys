"use client"
import logo from "@/assets/images/Velocita-logo1 1.png";
import Image from "next/image";
import Link from "next/link";
import { FaList } from "react-icons/fa";
import { LuClipboardEdit } from "react-icons/lu";
import { IoArrowBackSharp } from "react-icons/io5";
import { useParams } from "next/navigation";

const AdminSidebar = () => {
  // const {params} = useParams()


  return (
    <>
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
    </>
  );
};

export default AdminSidebar;