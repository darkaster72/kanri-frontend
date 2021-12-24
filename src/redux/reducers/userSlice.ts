import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../modes/user";

const initialState: { currentUser: IUser | null } = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<IUser>) => ({
      ...state,
      currentUser: action.payload,
    }),
    logout: (state) => ({
      ...state,
      currentUser: null,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
