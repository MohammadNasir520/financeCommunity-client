import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../../app/features/Students/studentSlice';
import Batch from './Batch';

const Batches = () => {

    // const dispatch = useDispatch()


    // useEffect(() => {
    //     dispatch(fetchStudents())

    // }, [dispatch])

    // const { students } = useSelector((state) => state)
    // console.log("students", students.students)

    const batch = [2020, 2019, 2018, 2017, 2016]

    return (

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                batch.map(batch => <Batch
                    batch={batch}
                ></Batch>)
            }
        </div>


    );
};

export default Batches;