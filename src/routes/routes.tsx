
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddNewBooks from "../pages/AddNewBooks";
import Books from "../pages/Books";
import BookDetails from "../pages/BookDetails";
import SignUpFrom from "../pages/SignUpFrom";
import LogInFrom from "../pages/LogInFrom";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import UpdateBook from "../pages/UpdateBook";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/addNewBook',
                element: <PrivateRoute>
                    <AddNewBooks />
                </PrivateRoute>,
            },
            {
                path: '/updateBook/:id',
                element: <PrivateRoute>
                    <UpdateBook />
                </PrivateRoute>,
            },
            {
                path: '/allBooks',
                element: <Books />,
            },
            {
                path: '/book-details/:id',
                element: <PrivateRoute>
                    <BookDetails />,
                </PrivateRoute>
            },
        ],
    },
    {
        path: '/login',
        element: <LogInFrom />,
    },
    {
        path: '/signup',
        element: <SignUpFrom />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);
export default routes;