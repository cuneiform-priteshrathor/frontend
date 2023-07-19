import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchUserDataStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchUserDataSuccess(state, action) {
            state.userData = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchUserDataFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchUserDataStart,
    fetchUserDataSuccess,
    fetchUserDataFailure,
} = userSlice.actions;

export default userSlice.reducer;