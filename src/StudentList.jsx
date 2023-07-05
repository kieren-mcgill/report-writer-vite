import Dashboard from "./Dashboard";
import {useContext, useEffect} from "react";
import AppContext from "./context";
import StudentListItem from "./StudentListItem";

const StudentList = () => {
    const {user, students, apiCalls} = useContext(AppContext)

    useEffect(() => {
        if (user && user._id) {
            apiCalls.getStudents(user._id);
        }
    }, [user]);

    return (
        <div>
            <Dashboard/>
            <div>
                <h6>My students</h6>
                <div>
                    {students && students.map((student, i) => (
                        <StudentListItem key={i} student={student}/>
                    ))}
                    <button>
                        Add student
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StudentList