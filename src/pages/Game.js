import React, { useState, useEffect } from "react"

import "./Game.css"

export default function Game() {

    const [ quizQues, setQuizQues ] = useState([])

    // eslint-disable-next-line
    useEffect( 
        () => {
            fetch("https://opentdb.com/api.php?amount=5&type=multiple&decode=url3986")
                .then(res => res.json())
                    .then(data => setQuizQues(data.results.map(
                        quiz => ({question: quiz.question, 
                            answers: [
                                {value: quiz.correct_answer, is_correct: true}, 
                                ...quiz.incorrect_answers.map
                                    (inc => ({value: inc, is_correct: false}))
                                ]
                            })
                    )))
        }, [])
    
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    const entities = { "&amp;": "&", '&#039;': "'", '&quot;': '"', '&lt;': "<", '&gt;': ">" } 
    const questionElements = quizQues.map( ques =>
        <div>
            <div>
                {decodeHtml(ques.question).replace(/&#?\w+;/, match => entities[match])}
            </div>
            <ul>
                {ques.answers.map(ans => <li>{decodeHtml(ans.value)}</li>)}
            </ul>
        </div>
    )

    return(
        <div className="game">
            { questionElements }
        </div>
    )
}