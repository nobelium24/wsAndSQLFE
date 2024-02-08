import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3000';

type SignUpData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    userName: string;
};


export const signUp = async (data: SignUpData): Promise<AxiosResponse> => {
    try {
        const response = await axios.post(`${BASE_URL}/user/register`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw {"message": "An error occurred while signing up. Please try again.", error};
    }
};