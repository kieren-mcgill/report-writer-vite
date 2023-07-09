import { useContext } from "react";
import AppContext from "./context";

const Header = () => {
    const { user } = useContext(AppContext)

    return (
        <div className="flex h-16 w-full bg-cyan-700 items-center z-50">
            <div className="grow m-3">
            <p className="text-white">Robo Report</p>
            </div>
            <div className="m-3">
                {user &&
                (<h3 className="text-white">{`Welcome ${user.username}`}</h3>)}
            </div>
        </div>
    )
}
export default Header