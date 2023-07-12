import {useContext} from "react";
import AppContext from "./context";
import StudentListItem from "./StudentListItem";

const StudentList = () => {
    const {students} = useContext(AppContext)

    return (
        <div className="flex flex-col align-middle">
            <h2 className="text-2xl m-2 text-center">My students</h2>
            <div>
                {students && students.map((student, i) => (
                    <StudentListItem key={i} student={student}/>
                ))}
            </div>
        </div>
    )
}

export default StudentList