import React, { memo, useState } from "react";
import Sidebar from "../components/sidebar";
import Header from "../layouts/Header";
import { Outlet } from "react-router-dom";
const DefaultLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      {/* ===== Page Wrapper Start ===== */}
      <div className="flex h-screen overflow-hidden">
        {/* ===== Sidebar ===== */}
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {/* {children} */}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default memo(DefaultLayout);
