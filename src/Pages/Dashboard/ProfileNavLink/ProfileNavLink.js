import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getSingleStudentByEmail } from '../../../Api/StudentsApi';
import { AuthContext } from '../../../Context/AuthProvider';

const ProfileNavLink = () => {
    const { user } = useContext(AuthContext)
    const [student, setStudent] = useState({})
    useEffect(() => {

        getSingleStudentByEmail(user?.email)
            .then(data => {
                console.log(data);
                setStudent(data)
            })
    }, [user?.email])
    return (
        <div>
            <NavLink to={`/dashboard/profile/${student._id}`} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span className="mx-4 font-medium">Profile</span>
            </NavLink>
        </div>
    );
};

export default ProfileNavLink;