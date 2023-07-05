import {useNavigate} from "react-router-dom";

const StudentListItem = ( { student } ) => {
    const navigate = useNavigate()
    return(
        <div>
            <p>
                {`${student.firstName} ${student.lastName}`}
            </p>
            <button onClick={() => navigate(`/single-student/${student._id}`)} >
                NOTES
            </button>
        </div>
    )
}

export default StudentListItem