import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../../app/features/Students/studentSlice';
import Batch from './Batch';

const Batches = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchStudents())

    }, [dispatch])

    const { students } = useSelector((state) => state)
    console.log("students", students.students)
    return (

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                students.students.map(student => <Batch
                    student={student}
                ></Batch>)
            }
        </div>


    );
};

export default Batches;