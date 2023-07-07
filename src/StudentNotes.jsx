import {useFormik} from "formik";
import AppContext from "./context.js";
import {useContext} from "react";

const StudentNotes = ( { currentStudent } ) => {
    const { apiCalls } = useContext(AppContext)
    const formik = useFormik({
        initialValues: {
            generalNotes: '',
        },
        onSubmit: values => {
            apiCalls.editStudent(currentStudent._id, currentStudent.userId, values)
        },
    });
    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="generalNotes">Notes</label>
            <input
                className="m-1 p-1 border-2 border-s-slate-300"
                id="generalNotes"
                name="generalNotes"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.generalNotes}
            />

            <button type="submit">Save</button>
        </form>
        </div>
    );
}

export default StudentNotes