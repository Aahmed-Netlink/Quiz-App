import { useCallback, useState } from "react";
import QUESTIONS from "../Questions/questions";
import Question from "../Questions/QUestion";
import quizCompleteImg from "../../assets/quiz-complete.png"

const Quiz = () => {
    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUsersAnswers] = useState([])
    const activeQuetionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
    const quizIsCompleted = activeQuetionIndex === QUESTIONS.length

    const handelSelectAnswer = useCallback((selectedAnswer) => {
        setAnswerState('answered')
        setUsersAnswers(
            (prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer]
            }
        );
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuetionIndex].answers[0]) {
                setAnswerState('correct')
            }
            else {
                setAnswerState('wrong')
            }
            setTimeout(() => {
                setAnswerState('')
            }, 2000);
        }, 1000);
    }, [activeQuetionIndex])

    const handleSkipAnswer = useCallback(() => handelSelectAnswer(null), [handelSelectAnswer])

    if (quizIsCompleted) {
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
        </div>
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuetionIndex}
                questionText={QUESTIONS[activeQuetionIndex].text}
                answers={QUESTIONS[activeQuetionIndex].answers}
                onSelectAnswer={handelSelectAnswer}
                answerState={answerState}
                selectedAnswer={userAnswers[userAnswers.length - 1]}
                onSkipAnswer={handleSkipAnswer} />
        </div>
    );
}

export default Quiz