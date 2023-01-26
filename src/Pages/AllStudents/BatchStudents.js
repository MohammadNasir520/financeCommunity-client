import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getAllStudents } from '../../Api/StudentsApi';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';
import './BatchStudents.css'
const BatchStudents = () => {
    const [loading, setLoading] = useState(false)
    const students = useLoaderData()
    // const [students, setStudents] = useState([])


    // useEffect(() => {
    //     setLoading(true)
    //     getAllStudents()
    //         .then(data => {
    //             console.log(data);
    //             setStudents(data)
    //             setLoading(false)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setLoading(false)
    //         })
    // }, [])
    return (
        <div className='min-h-screen'>
            {
                loading ? <SmallSpinner></SmallSpinner>
                    :
                    <>
                        {
                            students.length === 0 ? <p> No student Found</p>
                                :
                                <div className='grid md:grid-cols-2 lg:grid-cols-3'>


                                    {students.map(student => <div
                                        class="flex flex-col items-center justify-center w-full max-w-xs mx-auto"
                                    >
                                        <div class="w-full h-72 bg-center object-center rounded-lg shadow-md   bg-no-repeat bg-cover " style={{ backgroundImage: `url(${student.imageUrl})` }}>
                                            hello

                                        </div>

                                        <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                            <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{student.name}</h3>

                                            <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                                <span class="font-bold text-gray-800 dark:text-gray-200"></span>

                                                <Link to={`/profile/${student._id}`}>
                                                    <button

                                                        class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600focus:outline-none">Profile

                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                </div>
                        }
                    </>

            }
        </div >
    );
};

export default BatchStudents;