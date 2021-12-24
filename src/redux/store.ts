import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(
        thunkMiddleware
        // you can also type middlewares manually
        // untypedMiddleware as Middleware<
        //   (action: Action<'specialAction'>) => number,
        //   RootState
        // >
      )
      .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export default store;
