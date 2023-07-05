import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import AxiosClient from "./AxiosClient.jsx";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <AxiosClient/>
        </BrowserRouter>
    </React.StrictMode>,
)
