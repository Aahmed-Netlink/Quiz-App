import { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(
        () => {
            console.log("Setting Timeout")
            const timer = setTimeout(onTimeout, timeout);
            return () => {clearTimeout(timer)}
        }, [onTimeout, timeout]);

    useEffect(
        () => {
            console.log("Setting Interval")
            const interval = setInterval(() => {
                setRemainingTime(prevRemainigTime => prevRemainigTime - 100);
            }, 100);
            return ()=>{clearInterval(interval)};
        }, []);

    return <progress id="question-time" max={timeout} value={remainingTime} />
}

export default QuestionTimer;