import {useContext} from "react";
import AppContext from "./context.js";
import ErrorAlert from "./ErrorAlert.jsx";
import SuccessAlert from "./SuccessAlert.jsx";

const Alerts = () => {
    const { errors, messages } = useContext(AppContext)


    return(
        <>
            {errors.length > 0 && errors.map((error, i) => <ErrorAlert errorMessage={error} key={i} deleteIndex={i}/>)}
            {messages.length > 0 && messages.map((message, i) => <SuccessAlert successMessage={message} key={i} deleteIndex={i}/>)}
        </>
    )

}

export default Alerts