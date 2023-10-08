"use client";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";

const Dashboard = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  return (
    <div
      className={`mx-auto text-black max-w-screen-2xl p-4 relative pl-2 ${
        sideBarOpen ? " md:pl-[310px]" : " md:pl-20"
      }`}
    >
      Dashboaed
    </div>
  );
};

export default Dashboard;
