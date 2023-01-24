import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import BatchStudents from "../Pages/AllStudents/BatchStudents";
import AllStudents from "../Pages/AllStudents/BatchStudents";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import StudentProfile from "../Pages/StudentProfile/StudentProfile";
import Students from "../Pages/students/Students";
import SignUp from "../Shared/SignUp/SignUp";

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
                path: '/register',
                element: <Register></Register>
            },
            // {
            //     path: '/students',
            //     element: <Students></Students>
            // }
            {
                path: '/students/:batch',
                loader: ({ params }) => fetch(`http://localhost:5000/students?batch=${params.batch}`),
                element: <BatchStudents></BatchStudents>
            },
            {
                path: '/studentProfile/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/studentProfile/${params.id}`),
                element: <StudentProfile></StudentProfile>
            }
        ]
    }
])