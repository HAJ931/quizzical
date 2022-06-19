import React from "react"

import "./Ques.css"

export default function Ques(props) {
    
    return (
        <div className="trivia">
            <div className="trivia--ques">
                {props.question}
            </div>
            <ul className="trivia--answers">
                {
                    props.answers.map(
                        ans => <li className="trivia--option">{ans.value}</li>
                    )
                }
            </ul>
            <hr className="trivia--divider"></hr>
        </div>
    )
}