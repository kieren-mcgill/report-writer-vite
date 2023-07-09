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
        <div className="flex grow flex-row">
            <Dashboard/>
            <div className="flex grow flex-col align-middle">
                <h2 className="text-2xl m-2 text-center">
                    {currentStudent ? `${currentStudent.firstName} ${currentStudent.lastName}` : ""}
                </h2>
                <div className="flex">
                    <StudentNotes currentStudent={currentStudent}/>
                    <ReportGenerator currentStudent={currentStudent}/>
                </div>
                <div>
                    <button
                        className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full"
                        onClick={() => navigate('/student-list')}>
                        Back to students
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleStudent