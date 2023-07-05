import axios from 'axios';
import {useState, useEffect} from "react";
import AppContext from "./context";
import App from "./App";

const AxiosClient = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL

    const [students, setStudents] = useState([])
    const [student, setStudent] = useState(null)
    const [user, setUser] = useState(undefined)
    const [report, setReport] = useState(undefined)
    const [errors, setErrors] = useState([])

    const apiCall = ({method, url, data}) => {
        return axios({
            method,
            url: `${baseUrl}${url}`,
            data
        }).catch((error) => {
            throw error
        })
    }

    const handleError = (error) => {
        setErrors((prevState) => [...prevState, error.message])
    }

    const getStudents = (userId) => apiCall({
        method: "get",
        url: `/students/${userId}`,
    }).then(({data}) => {
        setStudents(data)
    }).catch(handleError)

    const getStudent = (studentId) => apiCall({
        method: "get",
        url: `/students/${studentId}`
    }).then(({data}) => {
        setStudent(data)
    }).catch(handleError)

    const deleteStudent = (studentId, userId) => apiCall({
        method: "delete",
        url: `/students/${studentId}`
    }).then(() => {
        getStudents(userId)
    }).catch(handleError)

    const editStudent = (studentId, userId, updatedStudent) => apiCall({
        method: "patch",
        url: `/students/${studentId}`,
        data: updatedStudent,
    }).then(() => {
        getStudents(userId)
    }).catch(handleError)

    const getUser = (username) => apiCall({
        method: "get",
        url: `/users/${username}`
    }).then(({data}) => {
        setUser(data)
    }).catch(handleError)

    useEffect(() => {
        getUser("Kieren")
    }, [])

    const createUser = (newUser) => apiCall({
        method: "post",
        url: `/users`,
        data: { newUser }
    }).then(({data}) => {
        setUser(data)
    }).catch(handleError)

    const editUser = (userId, updateUser, username) => apiCall({
        method: "patch",
        url: `/users/${userId}`,
        data: { updateUser }
    }).then(() => {
        getUser(username)
    })

    const deleteUser = (userId) => apiCall({
        method: "delete",
        url: `/users/${userId}`
    }).then(({data}) => {
        console.log(data.status)
    }).catch(handleError)

    const generateReport = (student) => apiCall({
        method: "get",
        url: `/generate`,
        data: { student }
    }).then(({data}) => {
        setReport(data)
    }).catch(handleError)

    const apiCalls = {
        getStudents,
        getStudent,
        deleteStudent,
        editStudent,
        getUser,
        createUser,
        editUser,
        deleteUser,
        generateReport
    }

    return (
        <AppContext.Provider
            value={{
                apiCalls,
                students,
                user,
                report,
                errors
            }}>
            <App/>
        </AppContext.Provider>
    )
}

export default AxiosClient