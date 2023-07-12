import {useContext} from "react";
import AppContext from "./context.js";
import {useFormik} from "formik";

const SignUp = () => {
    const {apiCalls} = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            organisation: "",
            yearGroup: 0,
        },
        onSubmit: values => {
            apiCalls.signUp(values)
        },
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col mb-4">
                    <label
                        className="m-1"
                        htmlFor="username">Username</label>
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
                        htmlFor="password">Password</label>
                    <input
                        className="m-1 p-1 border-2 border-s-slate-300"
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label
                        className="m-1"
                        htmlFor="organisation">Organisation</label>
                    <input
                        className="m-1 p-1 border-2 border-s-slate-300"
                        id="organisation"
                        name="organisation"
                        type="organisation"
                        onChange={formik.handleChange}
                        value={formik.values.organisation}
                    />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="yearGroup">Year group</label>
                    <select
                        className="m-1 p-1 border-2 border-s-slate-300"
                        id="yearGroup"
                        name="yearGroup"
                        onChange={formik.handleChange}
                        value={formik.values.yearGroup}
                    >
                        <option value="">Select a year group</option>
                        <option value="1">Year 1</option>
                        <option value="2">Year 2</option>
                        <option value="3">Year 3</option>
                        <option value="4">Year 4</option>
                        <option value="5">Year 5</option>
                        <option value="6">Year 6</option>
                    </select>
                </div>
                <button
                    className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full"
                    type="submit">Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUp