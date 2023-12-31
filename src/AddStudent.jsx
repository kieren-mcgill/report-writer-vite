import {useFormik} from 'formik';
import {useContext} from "react";
import AppContext from "./context.js";
import {faCheck, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AddStudent = ({setAddingStudent}) => {
    const {user, apiCalls} = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            yearGroup: user.yearGroup,
            generalNotes: "",
            generalReport: ""
        },
        onSubmit: values => {
            apiCalls.createStudent(values, user._id)
            setAddingStudent(false)
        },
    })
    return (
        <div className="flex flex-row justify-between p-2 m-2 items-center bg-zinc-50 border-4 border-s-slate-300 border-dashed">
            <form
                className="flex grow justify-between"
                onSubmit={formik.handleSubmit}>

                <div className="flex items-center">
                    <label htmlFor="firstName">First name</label>
                    <input
                        className="m-1 p-1 border-2 border-s-slate-300"
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}/>
                </div>
                <div className="flex items-center">
                    <label htmlFor="lastName">Last name</label>
                    <input
                        className="m-1 p-1 border-2 border-s-slate-300"
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}/>
                </div>
                <div className="flex items-center">
                    <label htmlFor="gender">Gender</label>
                    <select
                        className="m-1 p-1 border-2 border-s-slate-300"
                        id="gender"
                        name="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}>
                        <option value="">Select a gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                    </select>
                </div>
                <button
                    className=" m-2 rounded-full border-none bg-green-500 hover:bg-green-600 text-white px-4"
                    type="submit">
                    <FontAwesomeIcon icon={faCheck} />
                </button>
            </form>
            <button
                className="m-2 rounded-full border-none bg-red-500 hover:bg-red-600 text-white px-4"
                onClick={() => setAddingStudent(false)}>
                <FontAwesomeIcon className="" icon={faTrashCan} />
            </button>
        </div>
    )
}

export default AddStudent