import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { imageUpload } from '../../Api/ImageUpload';
import { getSingleStudentByEmail, registrationRequest } from '../../Api/StudentsApi';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { user } = useContext(AuthContext)
    const email = user?.email;
    console.log(email);

    const [studentInformation, setStudentInformation] = useState({})
    console.log(studentInformation);

    useEffect(() => {
        getSingleStudentByEmail(user?.email)
            .then(data => {
                console.log(data);
                setStudentInformation(data)
            })
            .catch(error => { console.log(error); })
    }, [user?.email])




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
        registrationRequest(studentInformation)
            .then(data => {
                console.log(data);
            })
            .catch(error => { console.log(error); })

    }
    return (
        <div>

            <section className="max-w-4xl p-6 mx-auto bg-cyan-700 rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 className="text-xl text-center font-bold text-white capitalize dark:text-white">Register as a Finance Family Member</h1>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-white dark:text-gray-200" for="username">Your Official Name</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, name: event.target.value })}
                                defaultValue={studentInformation.name}
                                id="name"
                                type="text"
                                className=" border-none outline-none block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" for="emailAddress">Your Email</label>
                            <input
                                readOnly
                                defaultValue={user?.email}
                                onSubmit={(event) => setStudentInformation({ ...studentInformation, email: event.target.value })}
                                id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" for="number">Your Student Id Number</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, studentId: event.target.value })}
                                id="number" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" for="district">Your Home District</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, district: event.target.value })}
                                id="district" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" for="address">Present Address</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, address: event.target.value })}
                                id="address" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div className='flex mt-5 gap-4'>
                            <div className='w-40'>
                                <label className="text-white  dark:text-gray-200" for="">Your Current Level</label>
                                <select
                                    onChange={(event) => setStudentInformation({ ...studentInformation, level: event.target.value })}
                                    className="w-40   text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    <option>Level 1</option>
                                    <option>Level 2</option>
                                    <option>Level 3</option>
                                    <option>Level 4</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-white dark:text-gray-200" for="">Your Current Semester</label>
                                <select
                                    onChange={(event) => setStudentInformation({ ...studentInformation, semester: event.target.value })}
                                    className="block w-40   text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                    <option>Semester i</option>
                                    <option>Semester ii</option>

                                </select>
                            </div>

                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" for="skill">Your Strength Point (skill)</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, skill: event.target.value })}
                                id="" type="text" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" for="date">Date</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, birthDate: event.target.value })}
                                id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-white dark:text-gray-200" for="hobby">hobby</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, hobby: event.target.value })}
                                id="hobby" type="text" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" for="">Your Collage</label>
                            <input
                                onChange={(event) => setStudentInformation({ ...studentInformation, collage: event.target.value })}
                                id="collage" type="text" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                        <div>
                            <label className="text-white dark:text-gray-200" for="">Write about yourself</label>
                            <textarea
                                onChange={(event) => setStudentInformation({ ...studentInformation, about: event.target.value })}
                                id="about" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                        </div>





                        <div>
                            <label className="block text-sm font-medium text-white">
                                Upload Your Image  Image
                            </label>

                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg className="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label for="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span className="">Upload a file</span>


                                            <input
                                                onChange={(event) => handleImage(event.target.files[0])}
                                                id="file-upload"
                                                name="image"
                                                type="file"
                                                className="sr-only"
                                            />

                                        </label>
                                        <p className="pl-1 text-white">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-white">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>





                    </div>
                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>







            {/* ----------------------------------------------------------------------------------------------- */}

            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

                <form>
                    <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="username">Username</label>
                            <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="emailAddress">Email Address</label>
                            <input id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="password">Password</label>
                            <input id="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>

                        <div>
                            <label className="text-gray-700 dark:text-gray-200" for="passwordConfirmation">Password Confirmation</label>
                            <input id="passwordConfirmation" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Register;