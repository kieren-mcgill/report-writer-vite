import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import AppContext from "./context.js";

const StudentListItem = ( { student } ) => {
    const navigate = useNavigate()
    const { apiCalls } = useContext(AppContext)

    const handleDelete = () => {
        if (confirm(`Are you sure you want to delete ${student.firstName} from your class?`)) {
            apiCalls.deleteStudent(student._id, student.userId)
        }
    }

    const handleSingleStudent = () => {
        navigate(`/single-student/${student._id}`)
    }

    return(
        <div className="flex flex-row justify-between p-2 m-2 items-center bg-zinc-50 border-2 border-s-slate-300">
            <p className="grow">{`${student.firstName} ${student.lastName}`}</p>
            <button
                className="m-2 rounded-full border-none bg-zinc-200 hover:bg-zinc-300"
                onClick={handleSingleStudent}
            >
                View notes
            </button>
            <button
                className="m-2 rounded-full border-none bg-red-500 hover:bg-red-600 text-white"
                onClick={handleDelete}
            >
                Delete
            </button>
        </div>
    )
}

export default StudentListItem