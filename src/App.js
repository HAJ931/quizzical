import React from "react"
import Footer from "./components/Footer"

export default function App() {
    return (
        <>
            <main>
                <h1 className="main--title">Quizzical</h1>
                <h5 className="main--subtitle">
                    A fun quiz app to test your trivia skills!
                </h5>
                <button className="main--button">
                    Start Game
                </button>
            </main>
            <Footer />
        </>
    )
}