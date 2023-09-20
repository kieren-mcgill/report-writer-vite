import {useContext, useState} from "react";
import AppContext from "./context";
import Cookies from 'js-cookie';
import {useNavigate} from "react-router-dom";
import Alerts from "./Alerts.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faRobot} from '@fortawesome/free-solid-svg-icons';
import Settings from "./Settings.jsx";

const Header = () => {
    const {user, setUser} = useContext(AppContext);
    const navigate = useNavigate();
    const [showSettings, setShowSettings] = useState(false);

    const handleLogout = () => {
        Cookies.remove('userId')
        Cookies.remove('token')
        setUser(undefined)
        navigate('/')
    }

    const handleShowSettings = () => {
        setShowSettings(!showSettings);
    }

    return (
        <div className="fixed flex h-20 w-full justify-between bg-cyan-700 z-50">
            <div className="m-4 flex items-center">
                <FontAwesomeIcon className="text-white" size="2xl"  icon={ faRobot } />
                <p className="text-white font-bold text-lg px-4">Robo Report </p>
            </div>
            <div className="flex flex-col justify-start absolute left-1/2 top-20 -translate-x-1/2">
                <Alerts/>
            </div>
            <div className="flex items-center m-3">
                {user &&
                    <>
                        <h3 className="text-white font-bold me-4">{`Welcome ${user.username}`}</h3>
                        <button className="border-0 p-0 bg-inherit me-4"  onClick={handleShowSettings}>
                        <FontAwesomeIcon
                            className="text-neutral-300 hover:text-white"
                            size="2xl"
                            icon={ faGear }
                        />
                        </button>
                        <button
                            className="m-2 rounded-full border-none bg-cyan-500 hover:bg-cyan-600 text-white"
                            onClick={handleLogout}>Logout
                        </button>
                    </>}
            </div>
            {user &&
                <Settings showSettings={showSettings}/>
            }
        </div>
    )
}
export default Header