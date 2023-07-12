import axios from 'axios';
import {useEffect, useState} from "react";
import AppContext from "./context";
import App from "./App";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";

const AxiosClient = () => {

    const baseUrl = import.meta.env.VITE_BASE_URL

    const [students, setStudents] = useState([])
    const [user, setUser] = useState(undefined)
    const [errors, setErrors] = useState([])
    const [messages, setMessages] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            apiCalls.getStudents(user._id);
            navigate('/view-students')
        } else {
            const userId = Cookies.get('userId')
            if (userId) {
                apiCalls.getUser(userId)
            } else {
                navigate('/')
            }
        }
    }, [user])

    useEffect(() => {
        apiCalls.getStudents(Cookies.get('userId'))
    }, [messages])

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
        let errorMessage
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage = error.response.data.message
        } else {
            errorMessage = error.message
        }
        setErrors((prevState) => [...prevState, errorMessage])
    }


    const setCookies = (userIdValue) => {
        Cookies.set('userId', userIdValue, { expires: 1 })
    }

    const login = (loginInfo) => apiCall({
        method: "post",
        url: `/gateway/login`,
        data: loginInfo
    }).then(({data}) => {
        setCookies(data._id)
        setUser(data)
    }).catch(handleError)

    const signUp = (newUser) => apiCall({
        method: "post",
        url: `/gateway/signup`,
        data: newUser
    }).then(({data}) => {
        setUser(data)
        setCookies(data.token, data._id)
    }).catch(handleError)

    const getUser = (userId) => apiCall({
        method: "get",
        url: `/users/${userId}`,
    }).then(({data}) => {
        setUser(data)
    }).catch(handleError)

    const getStudents = (userId) => apiCall({
        method: "get",
        url: `/students/${userId}`,
    }).then(({data}) => {
        console.log(data)
        setStudents(data)
    }).catch(handleError)

    const createStudent = (newStudent, userId) => apiCall({
        method: "post",
        url: `/students/${userId}`,
        data: newStudent
    }).then(({ data }) => {
        setMessages((prevState) => [...prevState, data.message]);
        return getStudents(userId);
    }).then(() => {
        navigate('/view-students');
    }).catch(handleError);


    const deleteStudent = (studentId, userId) => apiCall({
        method: "delete",
        url: `/students/${userId}/${studentId}`
    }).then(( { data } ) => {
        setMessages((prevState) => [...prevState, data.message])
        getStudents(userId)
    }).catch(handleError)

    const editStudent = (studentId, userId, updatedStudent) => apiCall({
        method: "patch",
        url: `/students/${userId}/${studentId}`,
        data: updatedStudent,
    }).then(( {data} ) => {
        setMessages((prevState) => [...prevState, data.message])
        getStudents(userId)
    }).catch(handleError)


    const editUser = (userId, updateUser) => apiCall({
        method: "patch",
        url: `/users/${userId}`,
        data: updateUser
    }).then(() => {
        getUser(userId)
    }).catch(handleError)

    const deleteUser = (userId) => apiCall({
        method: "delete",
        url: `/users/${userId}`
    }).then(() => {
        Cookies.remove('userId')
        Cookies.remove('token')
        setUser(undefined)
        navigate('/')
        // To do : handle deleting all the students associated with user
    }).catch(handleError)

    const generateReport = (student) => apiCall({
        method: "post",
        url: `/generate`,
        data: student
    }).then(({data}) => {
        editStudent(student._id, Cookies.get('userId'), {generalReport: data.message})
    }).catch(handleError)


    const apiCalls = {
        getStudents,
        deleteStudent,
        createStudent,
        editStudent,
        login,
        getUser,
        signUp,
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
                setUser,
                errors,
                setErrors,
                messages,
                setMessages
            }}>
            <App/>
        </AppContext.Provider>
    )
}

export default AxiosClient