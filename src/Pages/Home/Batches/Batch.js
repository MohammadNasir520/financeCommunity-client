import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Batch = ({ batch }) => {
    console.log(batch)
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to={'/students'} state={batch.batch}>  <button className="btn btn-primary">Batch {batch}</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Batch;