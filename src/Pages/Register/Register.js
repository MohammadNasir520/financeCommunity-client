import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { imageUpload } from '../../Api/ImageUpload';
import { getSingleStudentByEmail, updateUserByEmail } from '../../Api/StudentsApi';
import { AuthContext } from '../../Context/AuthProvider';
import Form from '../Dashboard/Form/Form';

const Register = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    console.log(email);

    const [studentInformation, setStudentInformation] = useState({ role: "requested", email: email })
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

        const studentInformations = { ...studentInformation, role: 'requested' }
        updateUserByEmail(studentInformations)
            .then(data => {
                console.log(data);
                fetchStudentInformation()
            })
            .catch(error => { console.log(error); })

    }
    return (
        <div>

            {
                studentInformation?.role ?
                    <>
                        {
                            studentInformation?.role === 'requested' &&
                            <div className='h-screen flex text-2xl font-bold items-center justify-center'>
                                <p>Your student Registration on processing. Please wait for Approval</p>
                            </div>


                        }
                    </>
                    :
                    <div>
                        <h1 className="text-xl text-center font-bold text-black capitalize dark:text-white">Register as a Finance Family Member</h1>
                        <Form

                            studentInformation={studentInformation}
                            setStudentInformation={setStudentInformation}
                            fetchStudentInformation={fetchStudentInformation}
                            handleSubmit={handleSubmit}
                            handleImage={handleImage}
                        ></Form>

                    </div>



                // .................................................................................



            }








        </div>
    );
};

export default Register;