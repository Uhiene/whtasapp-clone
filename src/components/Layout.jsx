import React from "react";
import ChatArea from "./ChatArea";
import Chats  from "./Chats";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen">
      <Navbar />
      <div className="flex">
        <SideBar />
        <div className="w-[97%] flex rounded-lg overflow-hidden h-screen border border-gray-300">
            <Chats/>
            <ChatArea/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
