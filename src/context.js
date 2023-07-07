import {createContext} from "react";

const AppContext = createContext({
    apiCalls: {},
    students: [],
    currentStudent: {},
    user: undefined,
    report: undefined,
    errors: []
})

export default AppContext