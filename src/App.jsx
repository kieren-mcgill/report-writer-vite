import Header from "./Header";
import AppRouter from "./AppRouter";
import {useContext, useEffect} from "react";
import AppContext from "./context.js";

const App = () => {
    const { user, apiCalls } = useContext(AppContext)

    useEffect(() => {
        if (user) {
            apiCalls.getStudents(user._id).then()
        }
    }, [user]);


    return (
        <div className="h-full w-full">
            <Header/>
            <AppRouter/>
        </div>
    )
}

export default App