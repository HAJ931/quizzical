import React, { useState, useEffect } from "react"

import "./Game.css"

export default function Game() {

    const [ quizQues, setQuizQues ] = useState({})

    useEffect( 
        () => {
            fetch("https://opentdb.com/api.php?amount=5")
                .then(res => res.json())
                    .then(data => setQuizQues(data.results))
        }, [])

    return(
        <div className="game">
            { JSON.stringify(quizQues) }
        </div>
    )
}