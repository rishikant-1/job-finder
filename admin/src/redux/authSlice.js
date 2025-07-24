import { createSlice } from "@reduxjs/toolkit";


const storedAdmin = localStorage.getItem("admin")
const initialAdmin = storedAdmin ? JSON.parse(storedAdmin) : null

const initialState = {
  admin: initialAdmin,
  isAuthenticated: !!initialAdmin
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.admin = action.payload;
      state.isAuthenticated = true;
    },
    logOut: (state) => {
      state.admin = null;
      state.isAuthenticated = false;
    }
  }
})

export const { logOut, login } = authSlice.actions;
export default authSlice.reducer