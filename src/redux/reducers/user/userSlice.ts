import {
  createAsyncThunk,
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import { IUser } from "../../../models/user";

type UserState = {
  currentUser: IUser | null;
  error: Error | null;
};

const initialState: UserState = {
  currentUser: null,
  error: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (user: { email: string; password: string }, thunkApi) => {
    const response = await new Promise<IUser>((resolve) => {
      setTimeout(() => resolve({ email: user.email }), 100);
    });
    // thunkApi.
    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
    loginError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    login: (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
