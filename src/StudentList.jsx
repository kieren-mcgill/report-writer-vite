import Dashboard from "./Dashboard";
import {useContext, useEffect, useState} from "react";
import AppContext from "./context";
import StudentListItem from "./StudentListItem";
import AddStudent from "./AddStudent.jsx";

const StudentList = () => {
    const [addingStudent, setAddingStudent] = useState(false)
    const {students} = useContext(AppContext)

    return (
        <div className="flex h-full">
            <Dashboard/>
            <div className="flex grow flex-col align-middle">
                <h2 className="text-2xl m-2 text-center">My students</h2>
                <div>
                    {students && students.map((student, i) => (
                        <StudentListItem key={i} student={student}/>
                    ))}
                </div>
                {addingStudent && <AddStudent addingStudent={addingStudent} setAddingStudent={setAddingStudent}/>}
                <button
                    className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full"
                    onClick={() => setAddingStudent(!addingStudent)}
                >
                    Add student
                </button>
            </div>
        </div>
    )
}

export default StudentList