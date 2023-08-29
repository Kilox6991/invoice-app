import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { CssBaseline } from "@mui/material"; 

import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <CssBaseline />
    <RouterProvider router={router} />
  </>
);
