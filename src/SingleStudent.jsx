import Dashboard from "./Dashboard.jsx";
import StudentNotes from "./StudentNotes.jsx";
import {useContext} from "react";
import AppContext from "./context.js";

const SingleStudent = () => {
    const { currentStudent} = useContext(AppContext)

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
            </div>
        </div>
    )
}

export default SingleStudent