import { useContext } from "react";
import AppContext from "./context";

const Header = () => {
    const { user } = useContext(AppContext)

    return (
        <div className="flex h-36 w-full bg-emerald-300">
            <div className="grow">
            <p>Robo Report</p>
            </div>
            <div>
                <h3>
                    {`Welcome ${user === undefined ? "User" : user.username}`}
                </h3>
            </div>
        </div>
    )
}
export default Header