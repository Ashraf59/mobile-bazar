import Main from "../../Layout/Main";
import Blog from "../../Page/Home/Blog/Blog";
import Category from "../../Page/Home/Category/Category";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path: '/category/:name',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.name}`)
            }
        ]
    }
])


export default router;