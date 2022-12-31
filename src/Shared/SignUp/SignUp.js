import React, { useState } from 'react';

const SignUp = () => {


    //imagebb key
    const imageBBHostKey = process.env.REACT_APP_ImageBBhost_key;
    console.log(imageBBHostKey)

    // onchange image state
    const [stateImage, setImage] = useState([])
    const handleImage = event => {
        setImage(event.target.files)
    }

    // Image url
    const [imageUrl, setImageUrl] = useState('')
    console.log(imageUrl)
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const batch = form.batch.value;
        const password = form.password.value;

        const image = stateImage[0]

        const formData = new FormData()
        formData.append("image", image)
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageBBHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    setImageUrl(imgData.data.url)
                    console.log(imgData.data.url)
                }
            })
        console.log(email, batch, password, image)


        const student = {
            name,
            email,
            batch,
            imageUrl,
            password,
        }
        fetch(`http://localhost:5000/students`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                }
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp Now</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp}>
                            <div className="card-body bg-slate-200 gap-0">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Official Name</span>
                                    </label>
                                    <input name='Name' type="text" placeholder="Enter Your Name" required className='px-4' />
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className='px-4' required />
                                </div>


                                <div >
                                    <label className="label">
                                        <span className="label-text">Your Photo</span>
                                    </label>
                                    <input name='file' type="file" required className=' bg-white w-full' onChange={handleImage} />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text"> select your Batch</span>
                                    </label>
                                    <select name='batch' className=" w-full max-w-xs" required placeholder='Select Your Batch'>
                                        <option disabled >Select Your Batch</option>

                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                        <option>2016</option>
                                        <option>2015</option>
                                        <option>2014</option>
                                        <option>2013</option>
                                        <option>2012</option>
                                        <option>2011</option>
                                        <option>2010</option>
                                        <option>2009</option>
                                        <option>2008</option>
                                        <option>2007</option>
                                        <option>2006</option>
                                        <option>2005</option>
                                        <option>2004</option>
                                        <option>2003</option>

                                    </select>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="text" placeholder="password" requi className='px-4' ed />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>


                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">SingUp</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SignUp;