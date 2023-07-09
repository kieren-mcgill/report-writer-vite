import {useFormik} from "formik";
import {useContext} from "react";
import AppContext from "./context.js";

const Login = () => {
    const {apiCalls, user} = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            apiCalls.getUser(values)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col mb-4">
                <label
                    className="m-1"
                    htmlFor="email">Username</label>
                <input
                    className="m-1 p-1 border-2 border-s-slate-300"
                    id="username"
                    name="username"
                    type="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
            </div>
            <div className="flex flex-col mb-4">
                <label
                    className="m-1"
                    htmlFor="email">Password</label>
                <input
                    className="m-1 p-1 border-2 border-s-slate-300"
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>
            <button
                className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full"
                type="submit">Login
            </button>
        </form>
    )
}

export default Login