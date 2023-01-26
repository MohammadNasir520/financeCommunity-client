import { async } from "@firebase/util"


// get all students
export const getAllStudents = async () => {
    const response = await fetch(`http://localhost:5000/students`)
    const data = await response.json()
    return data
}

// get single student by email
export const getSingleStudentByEmail = async (email) => {
    console.log(email);
    const response = await fetch(`http://localhost:5000/student/${email}`)
    const data = await response.json();
    return data;
}


// update and register student
export const updateUserByEmail = async studentInformation => {

    const email = studentInformation.email;


    delete studentInformation.email;
    delete studentInformation._id;

    console.log(studentInformation);
    const url = `${process.env.REACT_APP_Base_url}/student/${email}`
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(studentInformation)
    })
    const data = await response.json()
    return data;
}



// get role
export const getStudentRole = async (email) => {
    console.log(email);
    const response = await fetch(`http://localhost:5000/student/${email}`)
    const data = await response.json();
    return data.role;
}


// delete user by id 
export const deleteUserById = async id => {
    const url = `${process.env.REACT_APP_Base_url}/student/${id}`
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },

    })
    const data = await response.json()
    return data;
}