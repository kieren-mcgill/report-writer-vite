import {createContext} from "react";

const AppContext = createContext({
    apiCalls: {},
    students: [],
    user: undefined,
    errors: [],
    messages: [],
    setErrors: () => {},
    setMessages: () => {}
})

export default AppContext