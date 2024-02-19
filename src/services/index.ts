import axios, { AxiosResponse } from 'axios';
import { Post } from '../pages/Feed';
import { config } from '../constants';


type SignUpData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userName: string;
};


export const signUp = async (data: SignUpData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${config.BASE_URL}/user/register`, data);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw { "message": "An error occurred while signing up. Please try again.", error };
    }
};

type LoginData = {
    email: string;
    password: string;
};

export const login = async (data: LoginData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${config.BASE_URL}/user/login`, data);
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw { "message": "An error occurred while logging in. Please try again.", error };
    }
};

export type PostResponseData = {
    message: string;
    post: Post[]
}

export const getMainPagePost = async (): Promise<AxiosResponse<PostResponseData>> => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.BASE_URL}/posts/getfriendpost`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw { "message": "An error occurred while fetching posts. Please try again.", error };
    }
}

export const likePost = async (postId: number): Promise<AxiosResponse> => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.BASE_URL}/likepost/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw { "message": "An error occurred while liking post. Please try again.", error };
    }
}

export const unlikePost = async (postId: number): Promise<AxiosResponse> => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${config.BASE_URL}/unlikepost/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw { "message": "An error occurred while unliking post. Please try again.", error };
    }
}

export const deletePost = async (postId: number): Promise<AxiosResponse> => {
    try {
        const token = localStorage.getItem('token');
        const response = await axios.delete(`${config.BASE_URL}/deletepost/${postId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw { "message": "An error occurred while deleting post. Please try again.", error };
    }
}

// export type PostType = {

// }

// export const addPost = async (): Promise<AxiosResponse> => {

// }