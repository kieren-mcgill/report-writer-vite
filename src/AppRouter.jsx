import {Route, Routes} from "react-router-dom";
import LandingPage from "./LandingPage";
import StudentList from "./StudentList";
import SingleStudent from "./SingleStudent";
import AddStudent from "./AddStudent";

const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={(<LandingPage/>)}/>
                <Route path='/student-list' element={(<StudentList/>)}/>
                <Route path={`/single-student/:studentId`} element={(<SingleStudent/>)}/>
                <Route path='/add-student' element={(<AddStudent/>)}/>
            </Routes>
        </div>
    )
}

export default AppRouter