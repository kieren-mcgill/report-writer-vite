import {useFormik} from "formik";
import {useContext, useEffect, useState} from "react";
import AppContext from "./context.js";
import Cookies from "js-cookie";
import animatedSnake from "./assets/images/3D-snake.gif";
import {faCheck, faRobot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ReportGenerator = ( {currentStudent, notesSaved} ) => {
    const { apiCalls, messages, errors, setErrors } = useContext(AppContext)
    const [reportSaved, setReportSaved] = useState(true)
    const [generating, setGenerating] = useState(false)

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

    useEffect(() => {
        if(messages[messages.length - 1] === "The student's report has been updated") {
            setReportSaved(true)
            setGenerating(false)
        }
        if(errors.length > 0) {
            setGenerating(false)
        }
    }, [messages, errors])

    const handleGenerate = () => {
        if(!notesSaved) {
            setErrors((prevState) => [...prevState, "Please save your notes before generating a report"])
        } else if (!currentStudent.generalNotes) {
            setErrors((prevState) => [...prevState, `You need to write notes about ${currentStudent.firstName} to generate an accurate report`])
        } else {
        apiCalls.generateReport(currentStudent)
        setGenerating(true)
        }
    }

    const handleInputChange = (event) => {
        formik.handleChange(event)
        setReportSaved(false)
    }

    return (
        <div className="m-4 relative">
        <form onSubmit={formik.handleSubmit}>
            <label
                className="font-bold m-2"
                htmlFor="generalReport">{currentStudent && `${currentStudent.firstName}'s report`}</label>
            {
                generating ?
                <div className="flex justify-center items-center p-2 border-2 border-s-slate-300 rounded w-full h-96">
                    <img src={animatedSnake} alt="A loading animation" />
                </div>
                :
                <textarea
                    className="p-2 bg-zinc-50 border-2 border-s-slate-300 rounded w-full"
                    id="generalReport"
                    name="generalReport"
                    onChange={handleInputChange}
                    value={formik.values.generalReport}
                    rows="15"
                />
            }
            <div className="flex justify-between">
            <button
                className=" mt-2 rounded-full border-none bg-green-500 hover:bg-green-600 disabled:opacity-25 text-white px-4"
                disabled={reportSaved}
                type="submit">
                <FontAwesomeIcon icon={faCheck}/>
            </button>
            </div>
        </form>
            <button
                className="m-2 rounded-full border-none bg-zinc-200 hover:bg-zinc-300 absolute bottom-0 right-0"
                onClick={handleGenerate}>
                <span><FontAwesomeIcon className="me-4" icon={faRobot}/></span>
                {currentStudent && currentStudent.generalReport !== "" ? 'Regenerate' : 'Generate'}
            </button>
        </div>
    )
}

export default ReportGenerator