import QuestionTimer from "../QuestionTimer/QuestionTimer";
import QUESTIONS from "./questions.jsx"
import Answer from "../Answer/Answer";
import { useState } from "react";
const Question = ({
    questionText,
    answers,
    onSelectAnswer,
    selectedAnswer,
    answerState,
    onSkipAnswer
}) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })

    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        setTimeout(
            () => {
                setAnswer({
                    selectedAnswer: answer,
                    isCorrect: true
                })
            }, 1000
        )
    }

    return (
        <div id="question">
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer} />
            <h2>{questionText}</h2>
            <Answer
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer} />
        </div>
    );
}

export default Question;