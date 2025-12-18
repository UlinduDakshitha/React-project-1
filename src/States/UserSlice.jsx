 import { createSlice } from "@reduxjs/toolkit";


const initialState = {
step: 1,
firstName: "",
lastName: "",
dob: "",
age: 0,
gender: "",
maritalStatus: "",
spouseName: "",
};


const userSlice = createSlice({
name: "user",
initialState,
reducers: {
setData: (state, action) => ({ ...state, ...action.payload }),
nextStep: (state) => { state.step += 1; },
},
});


export const { setData, nextStep } = userSlice.actions;
export default userSlice.reducer;
