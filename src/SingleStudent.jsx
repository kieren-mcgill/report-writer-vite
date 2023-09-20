import StudentNotes from "./StudentNotes.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext, useState} from "react";
import AppContext from "./context.js";
import ReportGenerator from "./ReportGenerator.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const SingleStudent = () => {
    const navigate = useNavigate()
    const {students} = useContext(AppContext)
    const {studentId} = useParams()
    const [notesSaved, setNotesSaved] = useState(true)
    const currentStudent = students.find((student) => student._id === studentId)

    return (
        <div className="relative">
                        <button
                            className="m-4 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full px-3"
                            onClick={() => navigate('/view-students')}>
                            <FontAwesomeIcon size="xl" icon={faArrowLeft} />
                        </button>
                    <h2 className="text-2xl m-2 absolute top-4 left-1/2 -translate-x-1/2">
                        {currentStudent ? `${currentStudent.firstName} ${currentStudent.lastName}` : ""}
                    </h2>
                <div className="grid grid-cols-2 gap-4">
                    <StudentNotes
                        currentStudent={currentStudent}
                        notesSaved={notesSaved}
                        setNotesSaved={setNotesSaved}
                    />
                    <ReportGenerator currentStudent={currentStudent} notesSaved={notesSaved}/>
                </div>
        </div>
    )
}

export default SingleStudent