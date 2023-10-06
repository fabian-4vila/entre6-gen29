import { createSlice } from '@reduxjs/toolkit';

export const credentialsSlice = createSlice({
    name: 'credentials',
    initialState: null,
    reducers: {
    setcredentialSlice: (state, action) => action.payload
    }
})

export const { setcredentialSlice } = credentialsSlice.actions;

export default credentialsSlice.reducer;
