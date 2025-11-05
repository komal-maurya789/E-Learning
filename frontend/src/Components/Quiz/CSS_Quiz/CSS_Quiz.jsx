import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import processSubmit_CSS from "./handleSubmit";
import './CSS_Quiz.css';

const questions = [
    {
        id: 1,
        question: "What does CSS stand for?",
        options: [" Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style Sheets"],
        correct: "Cascading Style Sheets",
    },
    {
        id: 2,
        question: "What is the correct HTML for referring to an external style sheet?",
        options: ['<stylesheet>mystyle.css</stylesheet>', '<link rel="stylesheet" type="text/css" href="mystyle.css">', '<style src="mystyle.css">'],
        correct: '<link rel="stylesheet" type="text/css" href="mystyle.css">',
    },
    {
        id: 3,
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        options: ["At the end of the document", "In the <head> section", "In the <body> section"],
        correct: "In the <head> section",
    },
    {
        id: 4,
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<script>", "<style>", "<css>",],
        correct: "<style>",
    },
    {
        id: 5,
        question: "Which HTML attribute is used to define inline styles?",
        options: ['class', 'font', 'style', 'styles'],
        correct: 'style',
    },

    {
        id: 6,
        question: "Which is the correct CSS syntax?",
        options: ['body:color=black;', '{body;color:black;}', '{body:color=black;}', 'body {color: black;}'],
        correct: 'body {color: black;}',
    },
    {
        id: 7,
        question: "Which property is used to change the background color?",
        options: ['bgcolor', 'background-color', 'color'],
        correct: "background-color",
    },
    {
        id: 8,
        question: "How do you add a background color for all <h1> elements?",
        options: ['h1 {background-color:#FFFFFF;}', 'h1.all {background-color:#FFFFFF;}', ' all.h1 {background-color:#FFFFFF;}'],
        correct: "h1 {background-color: #FFFFFF;}",
    },
    {
        id: 9,
        question: "Which CSS property is used to change the text color of an element?",
        options: ['fgcolor', 'color', 'text-color'],
        correct: "color",
    },
    {
        id: 10,
        question: "Which CSS property controls the text size?",
        options: ['text-size', ' font-size', ' font-style', ' text-style'],
        correct: 'font-size',
    }
];

const CSS_QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes timer
    const navigate = useNavigate();  // 

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleAnswerSelection = (option) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [currentQuestion]: option,
        }));
    };

    const handleSubmit = () => {
        processSubmit_CSS(answers, questions, timeLeft, navigate);
    };

    return (
        <section className="html_body mt-5 mb-5">
            <div className="quiz-container">
                <h2>CSS Quiz</h2>
                <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>

                <div className="question-section">
                    <h3>Question {currentQuestion + 1} of {questions.length}</h3>
                    <p>{questions[currentQuestion].question}</p>

                    <div className="options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <label key={index} className="option">
                                <input
                                    type="radio"
                                    name={`question-${currentQuestion}`}
                                    value={option}
                                    checked={answers[currentQuestion] === option}
                                    onChange={() => handleAnswerSelection(option)}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>

                <div className="navigation-buttons">
                    <button className="btn"
                        disabled={currentQuestion === 0}
                        onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    >
                        Previous
                    </button>

                    {currentQuestion < questions.length - 1 ? (
                        <button className="btn" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                            Next
                        </button>
                    ) : (
                        <button className="btn" onClick={handleSubmit}>Submit Quiz</button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CSS_QuizApp;
