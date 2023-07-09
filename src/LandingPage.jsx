import Login from "./Login.jsx";

const LandingPage = () => {
    return (
        <div className="flex grow flex-row">
            <div className="w-1/2 flex flex-col items-center justify-center">
                <h1>Great reports, lightning fast.</h1>
                <img src="src/assets/images/teacher-working.svg" alt="A person working at a desk"/>
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center">
                <Login/>
            </div>
        </div>
    )
}

export default LandingPage