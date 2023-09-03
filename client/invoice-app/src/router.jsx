
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/users/LoginPage";
import RegisterPage from "./pages/users/RegisterPage";
import LogoutPage from "./pages/users/LogoutPage";
import NewInvoice from "./pages/NewInvoicePage";
import DeleteInvoice from "./pages/DeleteInvoice";
import UpdateInvoice from "./pages/UpdateInvoice";
import ProfilePage from "./pages/ProfilePage";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/invoice/:invoiceId",
        element: <DetailPage/>,
      },
      {
        path :"/signin",
        element:<LoginPage/>,
      },
      {
        path :"/signup",
        element:<RegisterPage/>,
      },
      {
        path :"/logout",
        element:<LogoutPage/>,
      },
      {
        path :"/new/invoice",
        element:<NewInvoice/>,
      },
      {
        path :"/delete/:invoiceId/invoice",
        element:<DeleteInvoice/>,
      },
      {
        path :"/update/:invoiceId/invoice",
        element:<UpdateInvoice/>,
      },
      {
        path :"/profile/:userId",
        element:<ProfilePage/>,
      },
    ],
  },
]);

export default Router;
 