
import StudentListItem from "./StudentListItem.jsx";
import {useContext, useState} from "react";
import AppContext from "./context.js";
import AddStudent from "./AddStudent.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";


const ViewStudents = () => {
    const {students} = useContext(AppContext)
    const [addingStudent, setAddingStudent] = useState(false)


    return (
        <div className="flex grow">
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
                            className="m-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-full px-3"
                            onClick={() => setAddingStudent(true)}>
                            <FontAwesomeIcon size="xl" icon={faPlus} />
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ViewStudents