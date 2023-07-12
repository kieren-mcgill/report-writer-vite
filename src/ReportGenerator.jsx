import {useFormik} from "formik";
import {useContext, useEffect} from "react";
import AppContext from "./context.js";
import Cookies from "js-cookie";


const ReportGenerator = ( {currentStudent} ) => {
    const { apiCalls } = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            generalReport: "",
        },
        onSubmit: values => {
            apiCalls.editStudent(currentStudent._id, Cookies.get('userId'), values)
        },
    })

    useEffect(() => {
        if(currentStudent) {
            formik.setValues({
                ...formik.values,
                generalReport: currentStudent.generalReport,
            })
        }
    }, [currentStudent])

    const handleGenerate = () => {
        apiCalls.generateReport(currentStudent)
    }

    return (
        <div className="w-1/2 p-5">
        <form onSubmit={formik.handleSubmit}>
            <label
                className="font-bold m-2"
                htmlFor="generalRReport">{currentStudent && `${currentStudent.firstName}'s report`}</label>
            <textarea
                className="p-2 bg-zinc-50 border-2 border-s-slate-300 rounded w-full"
                id="generalReport"
                name="generalReport"
                onChange={formik.handleChange}
                value={formik.values.generalReport}
                rows="15"
            />
            <div className="flex justify-between">
            <button
                className=" m-2 rounded-full border-none bg-green-500 hover:bg-green-600 text-white"
                type="submit">Save
            </button>
            <button
                className="m-2 rounded-full border-none bg-zinc-200 hover:bg-zinc-300"
                onClick={handleGenerate}>Generate report
            </button>
            </div>
        </form>
        </div>
    )
}

export default ReportGenerator