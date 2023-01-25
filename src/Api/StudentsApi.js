

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


// register student
export const registrationRequest = async studentInformation => {

    const email = studentInformation.email;


    delete studentInformation.email;
    delete studentInformation._id;
    const studentInformations = { ...studentInformation, role: 'requested' }
    console.log(studentInformation);
    const url = `${process.env.REACT_APP_Base_url}/student/${email}`
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(studentInformations)
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