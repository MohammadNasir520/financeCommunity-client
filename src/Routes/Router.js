import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import BatchStudents from "../Pages/AllStudents/BatchStudents";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers.js/AllUsers";
import EditProfile from "../Pages/Dashboard/EditProfile/EditProfile";
import Welcome from "../Pages/Dashboard/Welcome/Welcome";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import StudentProfile from "../Pages/StudentProfile/StudentProfile";
import SignUp from "../Shared/SignUp/SignUp";
import AdminRoutes from "./AdminRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },


            {
                path: '/students/:batch',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_Base_url}/students?batch=${params.batch}`),
                element: <BatchStudents></BatchStudents>
            },
            {
                path: '/profile/:id',
                loader: ({ params }) => fetch(`${process.env.REACT_APP_Base_url}/studentProfile/${params.id}`),
                element: <StudentProfile></StudentProfile>
            }
        ]
    },


    // dshboard layout 
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '',
                element: <Welcome />
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'allUsers',
                element: <AdminRoutes> <AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/:email',
                element: <EditProfile></EditProfile>
            },
        ]

    },

])