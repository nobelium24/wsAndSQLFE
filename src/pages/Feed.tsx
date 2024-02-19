import React from 'react';
import { Layout } from '../components/Layout';
import { getMainPagePost } from '../services';
import { Tabs, Tab, Box, DialogTitle, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../feed.scss';
import { PostComponent } from '../components/PostComponent';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';


export type Post = {
    id: number;
    title: string;
    content: string;
    likes: number;
}

type TabPanelProps = {
    children?: React.ReactNode;
    value: number;
    index: number;
}


const TabPanel = (props: TabPanelProps) => {
    const {children, value, index, ...other} = props;
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    )
}


export const Feed:React.FC = () => {
    const userPosts = getMainPagePost();
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
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
                <Tabs 
                    value={value} 
                    onChange={handleChange}
                    TabIndicatorProps={
                        {
                            style:{
                                backgroundColor:"#3B444B"
                            }
                        }
                    }
                    id="feedTab"
                    centered>
                    <Tab label="Posts" sx={{'&.Mui-selected':{color:' #3B444B'}, color:"white"}} />
                    <Tab label="Messages" sx={{'&.Mui-selected':{color:' #3B444B'}, color:"white"}} />
                </Tabs>
                <TabPanel value={value} index={0}>
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
                    <button id='modalButton' type="button" onClick={handleOpen}>
                        Open Modal
                    </button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="dialog-title"
                        aria-describedby="dialog-description">
                        <DialogTitle id="dialog-title">
                            Create new post
                        <IconButton 
                            edge="end" 
                            color="inherit" 
                            onClick={handleClose} 
                            aria-label="close"
                            sx={{ position: 'absolute', right: 8, top: 8 }}
                        >
                            <CloseIcon />
                        </IconButton>
                        </DialogTitle>
                        <DialogContent id="dialog-description">
                            <PostComponent />
                        </DialogContent>
                    </Dialog>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>
            </div>
        </Layout>
    )
}
