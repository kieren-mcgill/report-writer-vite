import {useFormik} from "formik";
import {useContext, useEffect} from "react";
import AppContext from "./context.js";
import Cookies from "js-cookie";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const StudentNotes = ({currentStudent, notesSaved, setNotesSaved}) => {
    const {apiCalls, messages} = useContext(AppContext)

    const formik = useFormik({
        initialValues: {
            generalNotes: "",
        },
        onSubmit: values => {
            apiCalls.editStudent(currentStudent._id, Cookies.get('userId'), values)
        },
    })

    useEffect(() => {
        if (currentStudent) {
            formik.setValues({
                ...formik.values,
                generalNotes: currentStudent.generalNotes,
            })
        }
    }, [currentStudent])

    useEffect(() =>{
        if(messages[messages.length - 1] === "The student's notes have been updated") {
            setNotesSaved(true)
        }
    }, [messages])

    const handleInputChange = (event) => {
        formik.handleChange(event)
        setNotesSaved(false)
    }

    return (
        <div className="m-4">
            <form onSubmit={formik.handleSubmit}>
                <label
                    className="font-bold m-2"
                    htmlFor="generalReport">{currentStudent && `${currentStudent.firstName}'s notes`}</label>
                <textarea
                    className="p-2 bg-zinc-50 border-2 border-s-slate-300 rounded w-full"
                    id="generalNotes"
                    name="generalNotes"
                    onChange={handleInputChange}
                    value={formik.values.generalNotes}
                    rows="15"
                />
                <button
                    className=" mt-2 rounded-full border-none bg-green-500 hover:bg-green-600 disabled:opacity-25 text-white px-4"
                    disabled={notesSaved}
                    type="submit">
                    <FontAwesomeIcon icon={faCheck}/>
                </button>
            </form>
        </div>
    )
}

export default StudentNotes