import { useCallback, useState } from "react";
import QUESTIONS from "../Questions/questions";
import Question from "../Questions/QUestion";
import Summary from "../Summary/Summary";


const Quiz = () => {
    const [userAnswers, setUsersAnswers] = useState([])
    const activeQuetionIndex = userAnswers.length;
    const quizIsCompleted = activeQuetionIndex === QUESTIONS.length

    const handelSelectAnswer = useCallback((selectedAnswer) => {
        setUsersAnswers(
            (prevUserAnswers) => {
                return [...prevUserAnswers, selectedAnswer]
            }
        );
    }, [])

    const handleSkipAnswer = useCallback(() => handelSelectAnswer(null), [handelSelectAnswer])

    if (quizIsCompleted) {
        return <Summary userAnswers ={userAnswers} />
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuetionIndex}
                index={activeQuetionIndex}
                onSelectAnswer={handelSelectAnswer}
                onSkipAnswer={handleSkipAnswer} />
        </div>
    );
}

export default Quiz