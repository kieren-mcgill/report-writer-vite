import {useContext} from "react";
import AppContext from "./context";
import {useParams} from "react-router-dom";

const SingleStudent = () => {
    const { studentId } = useParams()
    const { students } = useContext(AppContext)
    const currentStudent = students.find((student) => student._id === studentId)

    return(
        <>
<p>{currentStudent.firstName}</p>
        </>
    )
}

export default SingleStudent