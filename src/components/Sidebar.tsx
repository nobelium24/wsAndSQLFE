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
            <div id="sideBarDiv" style={  sidebar ? 
                {width:"200px", opacity: 1, transform: 'translateX(0)', transition: "transform 0.5s, opacity 0.5s"} : 
                {width:"200px", opacity: 0, transform: 'translateX(-100%)', transition:"transform 0.5s, opacity 0.5s"}}>
                <button id="closeButton" onClick={showSidebar}>X</button>
                <ul>
                    <a href="/home">
                        <li>Home</li>
                    </a>
                    <a href="">
                        <li>About Us</li>
                    </a>
                    <a href="">
                        <li>Contact Us</li>
                    </a>
                    <a href="">
                        <li>Report a problem</li>
                    </a>
                    <a href="">
                        <li>Book a demo</li>
                    </a>
                    <a href="/signup">
                        <li>Sign up</li>
                    </a>
                    <a href="/login">
                        <li>Login</li>
                    </a>
                </ul>
            </div>
        </>
    )
}