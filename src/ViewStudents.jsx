import StudentList from "./StudentList.jsx";
import {useNavigate} from "react-router-dom";
import Dashboard from "./Dashboard.jsx";


const ViewStudents = () => {
    const navigate = useNavigate()

    return (
        <div className="flex grow">
            <Dashboard/>
            <div className="flex grow flex-col">
                <StudentList/>
                <div>
                    <button
                        className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full"
                        onClick={() => navigate('/add-student')}>
                        Add student
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewStudents