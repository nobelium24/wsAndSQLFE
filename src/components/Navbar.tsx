import React from "react";
import "../mainNav.scss";

export const Navbar: React.FC = () => {
    return(
        <>
            <nav className="" id="mainNav">
                <div id="divOne">
                    <h4>TestRam Chat App</h4>
                </div>

                <div id="divTwo">
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Report a problem</li>
                        <li>Book a demo</li>
                    </ul>
                </div>

                <div id="divThree">
                    <a href="/signup">
                        <button>Sign Up</button>
                    </a>
                    <a href="/login">
                        <button>Login</button>
                    </a>
                </div>

                <div id="divFour">
                    <h4>TestRam Chat App</h4>
                </div>
            </nav>
        </>
    )
}