import React from "react";
import { Navbar } from "./Navbar";
import { SideBar } from "./Sidebar";
import { MainPageSideBar } from "./MainPageSideBar";

type LayoutProps = {
    children: React.ReactNode;
    showNavbar?: boolean;
    showSidebar?: boolean;
    showMainPageSideBar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({children, showNavbar = true, showSidebar = true, showMainPageSideBar = true }) => {
    return (
        <>
        {showNavbar && <Navbar/>}
        {showSidebar && <SideBar/>}
        {showMainPageSideBar && <MainPageSideBar/>}
        {children}
        </>
    )
}