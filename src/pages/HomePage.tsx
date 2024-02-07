import React from 'react';
import { Layout } from '../components/Layout';
import "../landingPage.scss"

export const HomePage: React.FC = () => {
    return (
    <Layout showNavbar={true} showSidebar={true}>
        <div id='landingPageDiv'>
            <div>
                <h1>
                    Welcome to test ram social media app
                </h1>
                <p>
                    This is a social media app that allows you to chat with your friends and family
                </p>
            </div>
            <div>
                <img src="../public/undraw_chatting_re_j55r.svg" alt="" />
            </div>
        </div>
        
    </Layout>
    )
}

