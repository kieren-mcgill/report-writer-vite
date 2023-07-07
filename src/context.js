import {createContext} from "react";

const AppContext = createContext({
    apiCalls: {},
    students: [],
    user: undefined,
    report: undefined,
    errors: []
})

export default AppContext