import {useFormik} from "formik";
import {useContext, useEffect} from "react";
import AppContext from "./context.js";


const ReportGenerator = ( {currentStudent} ) => {
    const { apiCalls } = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            generalReport: "",
        },
        onSubmit: values => {
            apiCalls.editStudent(currentStudent._id, currentStudent.userId, values)
        },
    });

    useEffect(() => {
        if(currentStudent) {
            formik.setValues({
                ...formik.values,
                generalReport: currentStudent.generalReport,
            })
        }
    }, [currentStudent])

    // useEffect(() => {
    //     if(report) {
    //         formik.setValues({
    //             ...formik.values,
    //             generalReport: report.message,
    //         })
    //         }
    // }, [report])

    const handleGenerate = () => {
        apiCalls.generateReport(currentStudent)
    }

    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="generalRReport">Report</label>
            <textarea
                id="generalReport"
                name="generalReport"
                onChange={formik.handleChange}
                value={formik.values.generalReport}
            />
            <button type="submit">Save</button>
        </form>
            <button onClick={handleGenerate}>Generate</button>
        </div>
    );
}

export default ReportGenerator