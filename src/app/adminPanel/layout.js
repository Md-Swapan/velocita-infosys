import "./adminPanel.css";
import AdminSidebar from "@/components/sections/AdminSidebar/AdminSidebar";

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
            <AdminSidebar/>
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
