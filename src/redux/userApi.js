// src/redux/userAPI.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/api/user/getUser'; // Replace this with your API endpoint

export const fetchUserData = async () => {
    try {
        const response = await axios.get(API_URL);
        console.log('response: ', response);
        return response.data.getUser;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
};
