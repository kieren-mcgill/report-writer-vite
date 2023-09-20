import Header from "./Header"
import AppRouter from "./AppRouter"
import Footer from "./Footer.jsx"

const App = () => {

    return (
        <div className="min-h-screen w-screen flex flex-col">
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}

export default App