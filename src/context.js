import {createContext} from "react";

const AppContext = createContext({
    apiCalls: {},
    students: [],
    user: undefined,
    errors: [],
    messages: [],
})

export default AppContext