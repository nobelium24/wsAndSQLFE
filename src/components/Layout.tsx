import React from "react";
import { Navbar } from "./Navbar";
import { SideBar } from "./Sidebar";
import { Feed } from "./FeedSideBar";

type LayoutProps = {
    children: React.ReactNode;
    showNavbar?: boolean;
    showSidebar?: boolean;
    showFeedSideBar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({children, showNavbar = true, showSidebar = true, showFeedSideBar = true }) => {
    return (
        <>
        {showNavbar && <Navbar/>}
        {showSidebar && <SideBar/>}
        {showFeedSideBar && <Feed/>}
        {children}
        </>
    )
}