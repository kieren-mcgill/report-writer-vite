import {useFormik} from "formik";
import {useContext, useEffect} from "react";
import AppContext from "./context.js";


const StudentNotes = ( {currentStudent} ) => {
    const { apiCalls } = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            generalNotes: "",
        },
        onSubmit: values => {
            apiCalls.editStudent(currentStudent._id, currentStudent.userId, values)
        },
    });

    useEffect(() => {
        if(currentStudent) {
            formik.setValues({
                ...formik.values,
                generalNotes: currentStudent.generalNotes,
            })
        }
    }, [currentStudent])

    return (
        <div className="w-1/2 p-5">
        <form onSubmit={formik.handleSubmit}>
            <label
                className="font-bold m-2"
                htmlFor="generalReport">{currentStudent && `${currentStudent.firstName}'s notes`}</label>
            <textarea
                className="p-2 bg-zinc-50 border-2 border-s-slate-300 rounded w-full"
                id="generalNotes"
                name="generalNotes"
                onChange={formik.handleChange}
                value={formik.values.generalNotes}
                rows="15"
            />
            <button
                className=" m-2 rounded-full border-none bg-green-500 hover:bg-green-600 text-white"
                type="submit"
            >
                Save
            </button>
        </form>
        </div>
    )
}

export default StudentNotes