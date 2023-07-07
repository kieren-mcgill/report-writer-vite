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
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="generalReport">Notes</label>
            <textarea
                id="generalNotes"
                name="generalNotes"
                onChange={formik.handleChange}
                value={formik.values.generalNotes}
            />
            <button type="submit">Save</button>
        </form>
    );
}

export default StudentNotes