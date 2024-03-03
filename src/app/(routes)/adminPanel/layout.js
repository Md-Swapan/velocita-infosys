import logo from "../../../assets/images/Velocita-logo1 1.png";
import Image from "next/image";
import "./adminPanel.css"


export const metadata = {
  title: "Velocita Infosys Admin Panel",
  description:
    "As a leading IT consulting firm, we help businesses to reinvent and excel by establishing complete reliance on information technology and offering high quality technology consulting services.",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="admin_panel_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 p-0">
              <div className="sidebar">
                <Image width={200} src={logo} />
                <ul>
                  <li>Create job post</li>
                  <li>View job post</li>
                </ul>
              </div>
            </div>
            <div className="col-md-10 p-0">
              <div className="admin_panel_body">
                <div className="admin_header">
                  <h4>Admin</h4>
                </div>
                <div>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
