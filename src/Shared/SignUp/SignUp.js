import React, { useContext, useState } from 'react';
import { imageUpload } from '../../Api/ImageUpload';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';
import { AuthContext } from '../../Context/AuthProvider';


const SignUp = () => {

    const { createUserbyEmail, updateUser, loading, setLoading } = useContext(AuthContext)

    console.log(loading);

    // onchange image state
    const [imageUrl, setImage] = useState([])

    const handleImage = image => {

        console.log(image);
        imageUpload(image)
            .then(url => {
                console.log(url);
                setImage(url)
            })
    }


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const batch = form.batch.value;
        const password = form.password.value;

        // const formData = new FormData()
        // formData.append("image", image)
        // const url = `https://api.imgbb.com/1/upload?key=${imageBBHostKey}`
        // fetch(url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgData => {
        //         if (imgData.success) {


        //user post to mongodb
        const student = {
            name,
            email,
            batch,
            imageUrl: imageUrl,
            password,
            'role': 'user'
        }
        console.log(student)

        // // imageBB form data and image append and post to imagebb
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


                    // create user by email
                    createUserbyEmail(email, password)
                        .then(result => {
                            const user = result.user;
                            console.log(user)


                            const profile = {
                                displayName: name,
                                photoURL: imageUrl,
                            }



                            // update user name and photoUrl
                            updateUser(profile)
                                .then(() => {
                                    setLoading(false)
                                })
                                .catch(error => { console.log(error); })

                        })
                        .catch(error => {
                            console.log(error)
                        })
                    form.reset()

                }
            })


    }






    return (
        <div>
            <div className="hero min-h-screen bg-stone-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp Now</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}


                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} >
                            <div className="card-body bg-slate-300 gap-0">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Official Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="Enter Your Name" required className='px-4' />
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
                                    <input

                                        onChange={(event) => handleImage(event.target.files[0])}
                                        name='file'
                                        type="file"
                                        required
                                        className=' bg-white w-full' />
                                </div>

                                <div>
                                    <label className="label">
                                        <span className="label-text"> select your Batch</span>
                                    </label>
                                    <select name='batch' className=" w-full max-w-xs" required placeholder='Select Your Batch'>
                                        <option disabled >Select Your Batch</option>

                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
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
                                    <input name='password' type="password" placeholder="password" required className='px-4' ed />
                                    <label className="label">
                                        {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                                    </label>
                                </div>


                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary"> {loading ? <SmallSpinner></SmallSpinner> : `SingUp`}</button>
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