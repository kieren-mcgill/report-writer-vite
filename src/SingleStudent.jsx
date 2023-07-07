import Dashboard from "./Dashboard.jsx";
import StudentNotes from "./StudentNotes.jsx";
import {useNavigate, useParams} from "react-router-dom";
import {useContext} from "react";
import AppContext from "./context.js";
import ReportGenerator from "./ReportGenerator.jsx";

const SingleStudent = () => {
    const navigate = useNavigate()
    const {students} = useContext(AppContext)
    const {studentId} = useParams()
    const currentStudent = students.find((student) => student._id === studentId)

    return (
        <div className="flex h-full">
            <Dashboard/>
            <div className="flex grow flex-col align-middle">
                <h2 className="text-2xl m-2 text-center">
                    {currentStudent ? `${currentStudent.firstName} ${currentStudent.lastName}` : ""}
                </h2>
                <div className="flex">
                    <StudentNotes currentStudent={currentStudent}/>
                </div>
                <div className="flex">
                    <ReportGenerator currentStudent={currentStudent}/>
                </div>
                <button onClick={() => navigate('/student-list')}>
                    Back to students
                </button>
            </div>
        </div>
    )
}

export default SingleStudent