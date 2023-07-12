import Login from "./Login.jsx";
import {useState} from "react";
import SignUp from "./SignUp.jsx";

const LandingPage = () => {
    const [signUp, setSignup] = useState(false)
    return (
        <div className="flex grow flex-row">
            <div className="w-1/2 flex flex-col items-center justify-center">
                <h1>Great reports, lightning fast.</h1>
                <img src="src/assets/images/teacher-working.svg" alt="A person working at a desk"/>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
                {signUp ?
                    <SignUp setSignUp={setSignup}/>
                    :
                    <Login setSignUp={setSignup}/>
                }
                <button
                    className=""
                    onClick={()=> setSignup(!signUp)}>{signUp ? "Back to login" : "Sign up"}</button>
            </div>
        </div>
    )
}

export default LandingPage