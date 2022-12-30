import React from 'react';

const Batches = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Batch</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl image-full mx-auto">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Batch</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100  image-full mx-auto">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Batch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Batches;