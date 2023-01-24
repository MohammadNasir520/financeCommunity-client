import React from 'react';
import { useSelector } from 'react-redux';
import Batches from './Batches/Batches';

const Home = () => {
    const batch = useSelector((state) => state.setBatch.batch)
    console.log(batch)
    return (
        <div className='mx-auto min-h-screen mx-10 my-10'>
            <Batches></Batches>
        </div>
    );
};

export default Home;