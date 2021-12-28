import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router, Route,
  Routes
} from "react-router-dom";
import App from "./App";
import "./index.css";
import ErrorBoundary from "./pages/ErrorBoundary";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import store from "./redux/store";
import { MaterialTheme } from "./styles/MaterialTheme";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider theme={MaterialTheme}>
        <Provider store={store}>
          <Router basename="/kanri-ui">
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="login" element={<Login />} />
                <Route path="sign-up" element={<Signup />} />
                <Route path="" element={<Home />} />
              </Route>
            </Routes>
          </Router>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
