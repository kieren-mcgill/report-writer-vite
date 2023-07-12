import {Route, Routes} from "react-router-dom"
import LandingPage from "./LandingPage"
import SingleStudent from "./SingleStudent"
import ViewStudents from "./ViewStudents.jsx";

const AppRouter = () => {
    return (
        <div className="flex flex-col grow">
            <Routes>
                <Route path='/' element={(<LandingPage/>)}/>
                <Route path='/view-students' element={(<ViewStudents/>)}/>
                <Route path={`/single-student/:studentId`} element={(<SingleStudent/>)}/>
            </Routes>
        </div>
    )
}

export default AppRouter