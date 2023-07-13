import Dashboard from "./Dashboard.jsx";
import StudentListItem from "./StudentListItem.jsx";
import {useContext, useEffect, useState} from "react";
import AppContext from "./context.js";
import AddStudent from "./AddStudent.jsx";
import Cookies from "js-cookie";


const ViewStudents = () => {
    const {students} = useContext(AppContext)
    const [addingStudent, setAddingStudent] = useState(false)


    return (
        <div className="flex grow">
            <Dashboard/>
            <div className="flex grow flex-col">
                <div className="flex flex-col align-middle">
                    <h2 className="text-2xl m-2 text-center">My students</h2>
                    <div>
                        {students && students.map((student, i) => (
                            <StudentListItem key={i} student={student}/>
                        ))}
                    </div>
                </div>
                <div>
                    {addingStudent ?
                        <AddStudent setAddingStudent={setAddingStudent}/>
                        :
                        <button
                            className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full"
                            onClick={() => setAddingStudent(true)}>
                            Add student
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewStudents