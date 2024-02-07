import React from "react";
import { Navbar } from "./Navbar";
import { SideBar } from "./Sidebar";

type LayoutProps = {
    children: React.ReactNode;
    showNavbar?: boolean;
    showSidebar?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({children, showNavbar = true, showSidebar = true}) => {
    return (
        <>
        {showNavbar && <Navbar/>}
        {showSidebar && <SideBar/>}
        {children}
        </>
    )
}