import quizCompleteImg from "../../assets/quiz-complete.png"
import QUESTIONS from '../Questions/questions.jsx'
const Summary = ({ userAnswers }) => {

    const skippedAnswer = userAnswers.filter(answer => answer === null)
    const correctAnswer = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0])

    const skippedAnswerShares = Math.round((skippedAnswer.length / userAnswers.length) * 100);
    const correctAnswerShares = Math.round((correctAnswer.length / userAnswers.length) * 100);
    const wrongAnswerShares = 100 - skippedAnswerShares - correctAnswerShares

    return (
        <div id="summary">
            <img src={quizCompleteImg} alt="Trophy Icon" />
            <h2>Quiz Completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswerShares}%</span>
                    <span className="text">Skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswerShares}%</span>
                    <span className="text">Answered correctly</span>
                </p>
                <p>
                    <span className="number">{wrongAnswerShares}%</span>
                    <span className="text">Answered incorrectly</span>
                </p>
            </div>

            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer'
                    if (answer === '') {
                        cssClass += ' skipped'
                    }
                    else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += ' correct'
                    }
                    else {
                        cssClass += ' wrong'
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">
                                {QUESTIONS[index].text}
                            </p>
                            <p className={cssClass}>
                                {answer ?? 'Skipped'}
                            </p>
                        </li>
                    )
                })}
            </ol>
        </div >
    );
}

export default Summary;