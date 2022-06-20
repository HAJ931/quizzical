import React, { useState, useEffect } from "react"

import "./Game.css"
import Ques from "../components/Ques"
import Footer from "../components/Footer"

export default function Game() {

    const [ quizQues, setQuizQues ] = useState([])
    const [ score, setScore ] = useState(0)
    const [ isSubmitted, setIsSubmitted ] = useState(false)

    function shuffleArr(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    // eslint-disable-next-line
    useEffect( 
        () => {
            fetch("https://opentdb.com/api.php?amount=5&type=multiple&decode=url3986")
                .then(res => res.json())
                    .then(data => setQuizQues(data.results.map(
                        quiz => ({question: quiz.question, 
                            answers: shuffleArr([
                                {value: quiz.correct_answer, is_correct: true}, 
                                ...quiz.incorrect_answers.map
                                    (inc => ({value: inc, is_correct: false}))
                                ]),
                            })
                    )))
        }, [])
    
    function decodeHtml(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    const entities = { "&amp;": "&", '&#039;': "'", '&quot;': '"', '&lt;': "<", '&gt;': ">" } 
    const questionElements = quizQues.map( (ques, index) =>
        <Ques 
            key={index} 
            id={index}
            question={decodeHtml(ques.question).replace(/&#?\w+;/, match => entities[match])} 
            answers={ques.answers.map(ans=>({value: decodeHtml(ans.value), is_correct: ans.is_correct}))}
            isSubmitted={isSubmitted}
        />
    )

    function submitAns(){
        const elems = document.getElementsByClassName('active');
        let count = 0
        if(elems.length < 5){
            alert("Please select the answers to all the questions!")
            return
        }
        for (let i = 0; i < 5; ++i){
            if(quizQues[i].answers[elems[i].id].is_correct)
                ++count;
        }
        setIsSubmitted(prevVal => !prevVal)
        setScore(count)
        //alert(`You got ${count} / 5 correct!`)
    }

    return(
        <>
            <div className="game">
                { questionElements }
            <div className="game--results">
                {
                    isSubmitted ?
                    <>
                        <p className="game--score">You scored {score} / 5 correct answers</p>
                            <button 
                                className="game--reset" 
                                onClick={() => window.location.reload()}
                                >
                                    Play Again
                            </button>
                    </>: 
                    <button 
                        className="game--button" 
                        onClick={submitAns}
                    >
                            Check Answers
                    </button>
                    }
            </div>
            </div>
            <Footer />    
        </>
    )
}