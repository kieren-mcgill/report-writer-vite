import Header from "./Header";
import AppRouter from "./AppRouter";
import {useContext, useEffect} from "react";
import AppContext from "./context.js";
import Footer from "./Footer.jsx";
import {useNavigate} from "react-router-dom";

const App = () => {
    const {user, apiCalls} = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            apiCalls.getStudents(user._id)
            navigate('/student-list')
        }
    }, [user]);

    console.log(user)

    return (
        <div className="min-h-screen w-full flex flex-col">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}

export default App