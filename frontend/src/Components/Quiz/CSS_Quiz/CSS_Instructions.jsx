import React from "react";
import "./Css_Instructions.css";
import { Link } from "react-router-dom";

const CSS_QuizInstructions = () => {
    return (
        <div className="quiz-container mt-5">
            <div className="quiz-header">
                <h2>CSS Fundamentals Quiz</h2>
                <div className="quiz-meta">
                    <span>⏱ 20 minutes</span>
                    <span className="difficulty">Beginner</span>
                </div>
            </div>
            <div className="quiz-body">
                <h3>Quiz Instructions</h3>
                <p>
                    Test your knowledge of
                    techniques.
                </p>
                <ul>
                    <li>This quiz contains 10 questions.</li>
                    <li>You have 20 minutes to complete the quiz.</li>
                    <li>
                        You can navigate between questions using the previous and next
                        buttons.
                    </li>
                    <li>Once you submit the quiz, you cannot change your answers.</li>
                </ul>
                <button><Link to="/CSS_Quiz" className="start-quiz">Start Quiz</Link></button>
            </div>
        </div>
    );
};

export default CSS_QuizInstructions;
