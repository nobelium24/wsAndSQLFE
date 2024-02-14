import React from 'react';
import { Layout } from '../components/Layout';
import { getMainPagePost } from '../services';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';


export type Post = {
    id: number;
    title: string;
    content: string;
    likes: number;
}


export const Feed:React.FC = () => {
    const userPosts = getMainPagePost();
    const [posts, setPosts] = React.useState<Post[]>([]);
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await userPosts;
                setPosts(response.data.post);
            } catch (error) {
                console.error(error);
            }
        }
        setInterval(fetchData, 1000 * 60 * 5);
    }, [userPosts]);
    return (
        <Layout showFeedSideBar={true} showNavbar={false} showSidebar={false}>
            <div>
            
                {
                    posts && posts.map((post: Post) => {
                        return (
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                                <p>{post.likes}</p>
                            </div>
                        )
                    })
                }
            </div>
        </Layout>
    )
}