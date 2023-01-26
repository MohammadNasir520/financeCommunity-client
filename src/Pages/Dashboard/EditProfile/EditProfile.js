import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import { imageUpload } from '../../../Api/ImageUpload';
import { getSingleStudentByEmail, updateUserByEmail } from '../../../Api/StudentsApi';
import { AuthContext } from '../../../Context/AuthProvider';
import Form from '../Form/Form';

const EditProfile = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    console.log(email);

    const [studentInformation, setStudentInformation] = useState({ email: email })
    console.log(studentInformation);


    useEffect(() => {
        fetchStudentInformation()
    }, [user?.email])

    const fetchStudentInformation = () => {
        getSingleStudentByEmail(user?.email)
            .then(data => {
                console.log(data);
                setStudentInformation(data)
            })
            .catch(error => { console.log(error); })
    }


    const handleImage = image => {

        console.log('submit');

        console.log(image);

        imageUpload(image)
            .then(url => {
                console.log(url);
                setStudentInformation({ ...studentInformation, image: url })
            })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(studentInformation);

        const studentInformations = { ...studentInformation, }
        updateUserByEmail(studentInformations)
            .then(data => {
                console.log(data);
                toast.success('Your Information updated Successfully')
                fetchStudentInformation()
            })
            .catch(error => { console.log(error); })

    }
    return (
        <div className='mt-5'>

            <h1 className="text-xl text-center my-7 font-bold text-black capitalize dark:text-white">Hei... <span className='text-emerald-400'>{user?.displayName}</span>   Update Your Information</h1>

            <Form
                studentInformation={studentInformation}
                setStudentInformation={setStudentInformation}
                fetchStudentInformation={fetchStudentInformation}
                handleSubmit={handleSubmit}
                handleImage={handleImage}
            ></Form>
        </div>
    );
};

export default EditProfile;