import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from "../redux/reducers/user/userSlice";
import React from "react";

function render(
  ui: any,
  {
    // preloadedState,
    store = configureStore({ reducer: { user: userReducer } }),
    ...renderOptions
  } = {}
) {
  const Wrapper: React.FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
