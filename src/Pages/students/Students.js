import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchStudents } from '../../app/features/Students/studentSlice';

const Students = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    console.log(location.state)

    useEffect(() => {
        dispatch(fetchStudents())

    }, [dispatch])

    const { students } = useSelector((state) => state)
    console.log("students", students.students)
    return (
        <div>
            {
                students.students.map(student => <div className="card lg:card-side bg-base-100 shadow-xl">
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
        </div>
    );
};

export default Students;