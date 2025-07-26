import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col m-4">
        {/* Page content here */}
        {
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        }
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-gray-900 text-white min-h-full w-80 p-4 space-y-4">
          {/* Sidebar content here */}
          <Link href="/user-dashboard">
            <li>User Dashboard</li>
          </Link>
          <Link href="/admin-dashboard">
            <li>Admin Dashboard</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
