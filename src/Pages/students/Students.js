import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllStudents } from '../../Api/StudentsApi';
import { fetchStudents } from '../../app/features/Students/studentSlice';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';

const Students = () => {
    const [loading, setLoading] = useState(false)
    const [students, setStudents] = useState([])
    // const dispatch = useDispatch()
    // const location = useLocation()
    // console.log(location.state)

    // useEffect(() => {
    //     setLoading(true)
    //     dispatch(fetchStudents())

    // }, [dispatch])

    // const { students } = useSelector((state) => state)
    setLoading(false)
    // console.log("students", students.students)


    useEffect(() => {
        getAllStudents()
            .then(data => {
                console.log(data);
                setStudents(data)
            })
    }, [])
    return (

        <div>

            {/* <>

                {
                    students?.map(student => <div className="card lg:card-side bg-base-100 shadow-xl">
                        <img src={student?.imageUrl} alt="Album" />
                        <div className="card-body">
                            <h2 className="card-title">{student.email}</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>)
                }
            </> */}

        </div>
    );
};

export default Students;