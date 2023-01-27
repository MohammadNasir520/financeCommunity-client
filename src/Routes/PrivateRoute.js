import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import SmallSpinner from '../Components/Spinner/SmallSpinner'
import { AuthContext } from '../Context/AuthProvider'


// const PrivateRoute = ({ children }) => {
//     // const { user, loading } = useContext(AuthContext)
//     const { user } = useContext(AuthContext);

//     // const location = useLocation()
//     const location = useLocation()

//     // console.log(loading)
//     // if (loading) {
//     //     return <SmallSpinner />
//     // }

//     // if (user && user.uid) {
//     //     return children
//     // }
//     if (user && user.uid) {
//                 return children
//             }

//     // return <Navigate to='/login' state={{ from: location }} replace />
//     return <Navigate to='/login' state={{ from: location }} replace />
// }

// export default PrivateRoute



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user);
    console.log(true);
    const location = useLocation()

    if (loading) {
        return <SmallSpinner></SmallSpinner>
    }


    if (user && user.uid) {
        return children
    }

    console.log(loading);
    return <Navigate to='/login' state={{ from: location }} replace />



};

export default PrivateRoute;

