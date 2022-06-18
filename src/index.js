import React from "react"
import ReactDOM from "react-dom"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import './index.css'
import App from "./App"

const routing = (
    <Router>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/settings" element={<App />} />
        </Routes>
    </Router>
)

ReactDOM.render(routing, document.getElementById("root"))