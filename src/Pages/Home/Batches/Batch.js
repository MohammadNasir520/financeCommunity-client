import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Batch = ({ batch }) => {
    console.log(batch)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto '>
            <Link to={`/students/${batch}`} state={batch.batch}>
                <div className="card w-96 h-40 bg-base-100 shadow-xl image-full mx-auto">
                    <figure><img className='w-full' src="https://www.shutterstock.com/image-illustration/creative-forex-chart-on-blue-260nw-1377926345.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Batch: {batch}</h2>
                        <p>See all students of {batch} batch</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Batch </button>
                        </div> */}
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Batch;