import React, { useState } from "react";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import "../feedSideBar.scss";


export const Feed: React.FC = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <button id="toggleButton" onClick={showSidebar}>
                <ViewHeadlineIcon />
            </button>
            <div id="sideBarDiv" style={
                    sidebar ? 
                    {width:"200px", opacity: 1, transform: 'translateX(0)', transition: "transform 0.5s, opacity 0.5s"} : 
                    {width:"200px", opacity: 0, transform: 'translateX(-100%)', transition:"transform 0.5s, opacity 0.5s"}}>
                <button id="closeButton" onClick={showSidebar}>X</button>
                <ul>
                    <li>Messaging</li>
                    <li>View Friends</li>
                    <li>View Profile</li>
                    <li>Settings</li>
                    <li>Logout</li>
                </ul>
            </div>
        </>
    )
}