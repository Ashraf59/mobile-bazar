import AllUsers from "../../DashBoard/AllUsers/AllUsers";
import AddProducts from "../../DashBoard/DashBoard/AddProducts/AddProducts";
import MyProducts from "../../DashBoard/DashBoard/MyProducts/MyProducts";
import Payment from "../../DashBoard/DashBoard/Payment/Payment";
import MyOrders from "../../DashBoard/MyOrders/MyOredrs";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AllCatagory from "../../Page/Home/AllCatagory/AllCatagory";
import Blog from "../../Page/Home/Blog/Blog";
import Category from "../../Page/Home/Category/Category";
import Home from "../../Page/Home/Home";
import Login from "../../Page/Login/Login";
import SignUp from "../../Page/SignUp/SignUp";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path: '/allcatagory',
                element:<AllCatagory></AllCatagory>
            },
            {
                path: '/category/:name',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://mobile-bazar-server-ten.vercel.app/category/${params.name}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/dashboard/myorder',
                element: <MyOrders></MyOrders>,
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>,
            },
            {
                path: '/dashboard/products',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`https://mobile-bazar-server-ten.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])


export default router;