import React from "react"
import ReactDOM from "react-dom"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import './index.css'
import App from "./App"
import Game from "./pages/Game"

const routing = (
    <Router>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route exact path="/game" element={<Game />} />
        </Routes>
    </Router>
)

ReactDOM.render(routing, document.getElementById("root"))