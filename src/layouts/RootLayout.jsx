import React from "react";
import MainHeader from "../components/MainHeader/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <MainHeader />
      <main style={{ "margin-top": "40px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
