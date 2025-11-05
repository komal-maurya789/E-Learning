import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import processSubmit from "./handleSubmit"; 
import './html_Quiz.css';

const questions = [
    {
        id: 1,
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: "Hyper Text Markup Language",
    },
    {
        id: 2,
        question: "Who is making the Web standards?",
        options: [" Mozilla", "Google", "Microsoft", " The World Wide Web Consortium(W3C)"],
        correct: " The World Wide Web Consortium(W3C)",
    },
    {
        id: 3,
        question: "Choose the correct HTML element for the largest heading:",
        options: ["<heading>", "<head>", "<h1>", "<h6>"],
        correct: "<h1>",
    },
    {
        id:4,
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<br>", " <lb>", "<break>",],
        correct: "<br>",
    },
    {
        id:5,
        question: "What is the correct HTML for adding a background color?",
        options: ['body bg="yellow">', ' <background>yellow</background>', '<body style="background-color:yellow;">',],
        correct: '<body style="background-color:yellow;">',
    },

    {
        id:6,
        question: "What is the correct HTML for creating a hyperlink?",
        options: [' <a name="http://www.Education.com">EduLearn.com</a>', '  <a url="http://www.Education.com">EduLearn.com</a>', ' <a href="http://www.Education.com">EduLearn</a>',' <a>http://www.EduLearn.com</a>'],
        correct: '<a href="http://www.Education.com">EduLearn</a>',
    },
    {
        id:7,
        question: "Which of these elements are all <table> elements?",
        options: [' <table><head><tfoot>', ' <table><tr><tt>', ' <thead><body><tr>',' <table><tr><td>'],
        correct: "<table><tr><td>",
    },
    {
        id:8,
        question: "Inline elements are normally displayed without starting a new line.",
        options: [' False', 'True'],
        correct: "True",
    },
    {
        id:9,
        question: "How can you make a numbered list?",
        options: [' <li>', '<dl>','<ul>','<ol>'],
        correct: "<ol>",
    },
    {
        id:10,
        question: "What is the correct HTML for making a text input field?",
        options: ['  <textfield>>', ' <input type="textfield">',' <input type="text">',' <textinput type="text">'],
        correct: '<input type="text">',
    }
];

const QuizApp = () => {
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
        processSubmit(answers, questions, timeLeft, navigate); 
    };

    return (
        <section className="html_body mt-5 mb-5">
        <div className="quiz-container">
            <h2>HTML Quiz</h2>
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

export default QuizApp;
