import Login from "./Login.jsx";
import {useState} from "react";
import SignUp from "./SignUp.jsx";
import teacherWorkingImage from './assets/images/teacher-working.svg'

const LandingPage = () => {
    const [signUp, setSignup] = useState(false)
    return (
        <div className="grid grid-cols-2 gap-8 grow flex-row px-10">
            <div className="flex flex-col justify-around">
                <h1 className="text-5xl">Great reports, lightning fast.</h1>
                <h2 className="text-lg">Spend less time writing primary student reports, with this powerful AI-powered report writing tool</h2>
                <img src={teacherWorkingImage} alt="A person working at a desk"/>
            </div>
            <div className="flex flex-col justify-around  p-4 m-auto border-2 rounded-md">
                {signUp ?
                    <SignUp setSignUp={setSignup}/>
                    :
                    <Login setSignUp={setSignup}/>
                }
                <button
                    className="mt-4 rounded-full border-none bg-zinc-200 hover:bg-zinc-300"
                    onClick={()=> setSignup(!signUp)}>{signUp ? "Back to login" : "Sign up"}</button>
            </div>
        </div>
    )
}

export default LandingPage