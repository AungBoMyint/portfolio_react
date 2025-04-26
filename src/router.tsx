import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      { path: "*", element: <NotFoundPage /> },
      { index: true, /* path: "/dashboard", */ element: <HomePage /> },
    ],
  },
]);
export default router;
