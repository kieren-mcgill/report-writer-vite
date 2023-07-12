import {useContext} from "react";
import AppContext from "./context";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";
import Alerts from "./Alerts.jsx";

const Header = () => {
    const {user, setUser} = useContext(AppContext)
    const navigate = useNavigate()
    const handleClick = () => {
        Cookies.remove('userId')
        Cookies.remove('token')
        setUser(undefined)
        navigate('/')
    }

    return (
        <div className="flex h-16 w-full justify-between bg-cyan-700">
            <div className="m-3">
                <p className="text-white">Robo Report</p>
            </div>
            <div className="flex flex-col justify-start -mb-36">
                <Alerts/>
            </div>
            <div className="flex items-center m-3">
                {user && (
                    <>
                        <h3 className="text-white">{`Welcome ${user.username}`}</h3>
                        <button
                            className="m-2 rounded-full border-none bg-cyan-500 hover:bg-cyan-600"
                            onClick={handleClick}>Logout
                        </button>
                    </>)}
            </div>
        </div>
    )
}
export default Header