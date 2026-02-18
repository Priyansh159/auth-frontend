import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface AuthState {
  token: string | null;
  email: string | null;
  name: string | null;
  isAuthenticated: boolean;
}

const token = localStorage.getItem("token");
const email = localStorage.getItem("email");
const name = localStorage.getItem("name");

const initialState: AuthState = {
  token: token,
  email: email,
  name: name,
  isAuthenticated: !!token,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (
    state,
    action: PayloadAction<{
        token: string;
        email: string;
        name: string;
    }>
    ) => {
    state.token = action.payload.token;
    state.email = action.payload.email;
    state.name = action.payload.name;
    state.isAuthenticated = true;

    // Persist
    localStorage.setItem("token", action.payload.token);
    localStorage.setItem("email", action.payload.email);
    localStorage.setItem("name", action.payload.name);
    },

    logout: (state) => {
      state.token = null;
      state.email = null;
      state.name = null;
      state.isAuthenticated = false;

      localStorage.clear();
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
