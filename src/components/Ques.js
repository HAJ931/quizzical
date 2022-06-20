import React, { useState } from "react"

import "./Ques.css"

export default function Ques(props) {

    const [ selectedOption, setSelectedOption ] = useState(-1)

    function setOptionClass(index, b){
        let str = 'trivia--option'
        let extra = ''
        if(props.isSubmitted){
            if(index === selectedOption && !b)
                extra = 'trivia--wrong inactive'
            else if(b)
                extra = 'trivia--right'
            else
                extra = 'inactive'
        }
        else {
            extra = selectedOption === index ? 'active': ""
        }
        //console.log(`${str} ${extra}`)
        return `${str} ${extra}`
    }

    //console.log(props.answers)

    const optionElements = props.answers.map(
        (ans, index) => 
        <li 
            key={index} 
            id={index} 
            className={setOptionClass(index, ans.is_correct)} 
            onClick={() => {!props.isSubmitted && setSelectedOption(selectedOption === index ? -1: index)}}>{ans.value}</li>
    )
    
    return (
        <div className="trivia">
            <div className="trivia--ques">
                {props.question}
            </div>
            <ul className="trivia--answers">
                {
                    optionElements
                }
            </ul>
            <hr className="trivia--divider"></hr>
        </div>
    )
}