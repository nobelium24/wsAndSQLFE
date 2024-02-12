import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../constants';



export const authenticateUser = async (token: string): Promise<AxiosResponse> => {
    try {
        const response = await axios.get(`${BASE_URL}/user/auth`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
        throw {"message": "An error occurred while authenticating user. Please try again.", error};
    }
}