import { createBrowserRouter } from "react-router-dom";
import { webRoutes } from "./web";
import Redirect from "./redirect";
import ErrorPage from "../pages/errrorPage";
import AuthLayout from "../layouts/authLayout";
import Login from "../pages/login";
import RequiredRoute from "./requiredRoute";
import DefaultLayout from "../layouts/DefaultLayout";
import Dashboard from "../pages/dashbaord";
import Books from "../pages/book";
import User from "../pages/user";
import BookIssue from "../pages/bookIssue";
import NotfoundPage from "../pages/notFountPage";

const errorElement = <ErrorPage />;

export const browseRoute = createBrowserRouter([
  {
    path: webRoutes.home,
    element: <Redirect />,
    errorElement: errorElement,
  },
  //auth routes
  {
    element: <AuthLayout />,
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.login,
        element: <Login />,
      },
    ],
  },

  //protected routes
  {
    element: (
      <RequiredRoute>
        <DefaultLayout />
      </RequiredRoute>
    ),
    errorElement: errorElement,
    children: [
      {
        path: webRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: webRoutes.book,
        element: <Books />,
      },
      {
        path: webRoutes.user,
        element: <User />,
      },
      {
        path: webRoutes.bookIssue,
        element: <BookIssue />,
      },
    ],
  },
  {
    path: "*",
    element: <NotfoundPage />,
    errorElement: errorElement,
  },
]);
