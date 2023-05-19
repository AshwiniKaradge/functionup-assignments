import React, { useState } from "react";

function Quizapp() {
  const [result, setResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  const Questions = [{
    text: "What is the capital of America?",
    options: [
      { id: 0, text: "New York City", isCorrect: false },
      { id: 1, text: "Boston", isCorrect: false },
      { id: 2, text: "Santa Fe", isCorrect: false },
      { id: 3, text: "Washington DC", isCorrect: true },
    ],
  },
  {
    text: "What year was the Constitution of America written?",
    options: [
      { id: 0, text: "1787", isCorrect: true },
      { id: 1, text: "1776", isCorrect: false },
      { id: 2, text: "1774", isCorrect: false },
      { id: 3, text: "1826", isCorrect: false },
    ],
  },
  {
    text: "Who was the second president of the US?",
    options: [
      { id: 0, text: "John Adams", isCorrect: true },
      { id: 1, text: "Paul Revere", isCorrect: false },
      { id: 2, text: "Thomas Jefferson", isCorrect: false },
      { id: 3, text: "Benjamin Franklin", isCorrect: false },
    ],
  },
  {
    text: "What is the largest state in the US?",
    options: [
      { id: 0, text: "California", isCorrect: false },
      { id: 1, text: "Alaska", isCorrect: true },
      { id: 2, text: "Texas", isCorrect: false },
      { id: 3, text: "Montana", isCorrect: false },
    ],
  },
  {
    text: "What is part of a database that holds only one type of information?",
    options: [
      { id: 0, text: "Report", isCorrect: false },
      { id: 1, text: "Field", isCorrect: true },
      { id: 2, text: "Record", isCorrect: false },
      { id: 3, text: "File", isCorrect: false },
    ],
  },
  {
    text: "OS' computer abbreviation usually means?",
    options: [
      { id: 0, text: "Order of Significance", isCorrect: false },
      { id: 1, text: " Open Software", isCorrect: true },
      { id: 2, text: "Operating System", isCorrect: false },
      { id: 3, text: "Optical Sensor", isCorrect: false },
    ],
  },
  {
    text: "What is the largest state in the US?",
    options: [
      { id: 0, text: "California", isCorrect: false },
      { id: 1, text: "Alaska", isCorrect: true },
      { id: 2, text: "Texas", isCorrect: false },
      { id: 3, text: "Montana", isCorrect: false },
    ],
  },
  {
    text: "What is the largest state in the US?",
    options: [
      { id: 0, text: "California", isCorrect: false },
      { id: 1, text: "Alaska", isCorrect: true },
      { id: 2, text: "Texas", isCorrect: false },
      { id: 3, text: "Montana", isCorrect: false },
    ],
  },
  {
    text: "What is the largest state in the US?",
    options: [
      { id: 0, text: "California", isCorrect: false },
      { id: 1, text: "Alaska", isCorrect: true },
      { id: 2, text: "Texas", isCorrect: false },
      { id: 3, text: "Montana", isCorrect: false },
    ],
  },
  {
    text: "What is the largest state in the US?",
    options: [
      { id: 0, text: "California", isCorrect: false },
      { id: 1, text: "Alaska", isCorrect: true },
      { id: 2, text: "Texas", isCorrect: false },
      { id: 3, text: "Montana", isCorrect: false },
    ],
  },]

  const optionClicked = (isCorrect) =>{
    if(isCorrect){
        setScore(score+1);
    }

    if(currentQuestion + 1 < Questions.length){
        setCurrentQuestion(currentQuestion+1);
    }else{
        setResult(true);
    }
  }

  const reset = () =>{
    setScore(0);
    setCurrentQuestion(0);
    setResult(false);
  }

  return (
    <div>
      <h2>Current Score:{score}</h2>

      {result ? (
        <div className="final-result">
          <h1>Result</h1>
          <h2>{score} out of {Questions.length} correct : ({(score/Questions.length)*100}%)</h2>

          <button onClick={()=>reset()}>Reset</button>
        </div>
      ) : (
        <div clasName="question-card">
          <h2>Question {currentQuestion + 1} out of 10</h2>
          <h3 className='question-text'>{Questions[currentQuestion].text}</h3>

          <ul>
            {Questions[currentQuestion].options.map((option)=>{
                return(
                    <li 
                    key={option.id}
                    onClick={()=>optionClicked(option.isCorrect)}   >{option.text}</li>
                );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quizapp;