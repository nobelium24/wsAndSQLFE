import React, { useState } from "react";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import "../sideBar.scss";


export const SideBar: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <button id="toggleButton" onClick={showSidebar}>
                <ViewHeadlineIcon />
            </button>
            <div id="sideBarDiv" style={sidebar ? {width:"200px", display:"block"} : {width: 0, display:"none"}}>
                <button id="closeButton" onClick={showSidebar}>X</button>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Report a problem</li>
                    <li>Book a demo</li>
                    <li>Sign up</li>
                    <li>Login</li>
                </ul>
            </div>
        </>
    )
}