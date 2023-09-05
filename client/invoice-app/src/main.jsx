import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material";

import { AuthProvider } from './hooks/isAuth'

import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </AuthProvider>

);
document.body.style.backgroundColor = "#F0F0F0";
