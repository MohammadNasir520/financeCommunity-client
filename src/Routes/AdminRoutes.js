import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { getStudentRole } from '../Api/StudentsApi';
import { AuthContext } from '../Context/AuthProvider';

const AdminRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);


    const [role, setRole] = useState('')

    useEffect(() => {
        getStudentRole(user?.email)
            .then(data => {
                setRole(data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [user?.email])

    if (role === 'admin') {
        return (
            <div>
                {children}
            </div>
        );
    }
    else {
        console.log('not athoriged');
        <Navigate to={'/'}></Navigate>
    }

};

export default AdminRoutes;