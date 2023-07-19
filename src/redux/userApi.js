// src/redux/userAPI.js

import axios from 'axios';
import { fetchUserDataStart, fetchUserDataSuccess, fetchUserDataFailure } from './userSlice'; // Correct the imports
const API_URL = 'http://localhost:5000/api/user/getUser'; // Replace this with your API endpoint

export const fetchUserData = () => {
    return async (dispatch) => {
        dispatch(fetchUserDataStart());
        try {
            const response = await axios.get(API_URL);
            dispatch(fetchUserDataSuccess(response.data.getUser));
            console.log('response: ', response);
            return response.data.getUser;
        } catch (error) {
            dispatch(fetchUserDataFailure(error.message));
            throw new Error('Failed to fetch user data');
        }
    }
};