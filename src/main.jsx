import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap3/dist/css/bootstrap.min.css";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./responsive.css"
import "./assets/external-css/font-awesome.min.css"
import "./assets/external-css/ie10-viewport-bug-workaround.css"
import "./assets/external-css/normalize.css"
import "./assets/external-css/ruby-demo.css"
import "./assets/external-css/ruby-main.css"
import "./assets/external-css/ruby-responsive.css"
import "./assets/external-css/ruby-transitions.css"


// Create a clientss
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
            <ToastContainer />
        </QueryClientProvider>
    </React.StrictMode>
);
