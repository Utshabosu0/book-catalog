
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AddNewBooks from "../pages/AddNewBooks";
import Books from "../pages/Books";

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
                element: <AddNewBooks />,
            },
            {
                path: '/allBooks',
                element: <Books />,
            },
            {
                path: '/book-details/:id',
                // element: <ProductDetails />,
            },
        ],
    },
    {
        path: '/login',
        // element: <Login />,
    },
    {
        path: '/signup',
        // element: <Signup />,
    },
    {
        path: '*',
        // element: <NotFound />,
    },
]);
export default routes;