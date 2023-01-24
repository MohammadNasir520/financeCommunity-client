

export const getAllStudents = async () => {
    const response = await fetch(`http://localhost:5000/students`)
    const data = await response.json()
    return data
}