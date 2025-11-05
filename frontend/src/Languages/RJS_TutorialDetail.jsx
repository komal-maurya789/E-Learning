import React, { useEffect, useState } from "react";

const sections = [
    {
        id: 1,
        title: "React Introduction",
        content1: [
            "",
            <b>What is React?</b>,
            "React, sometimes referred to as a frontend JavaScript framework, is a JavaScript library created by Facebook.",
            "React is a tool for building UI components.",
            <b>How does React Work?</b>,
            'React creates a VIRTUAL DOM in memory.',
            "Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.",
            "React only changes what needs to be changed!",
            "React finds out what changes have been made, and changes only what needs to be changed.",
            "You will learn the various aspects of how React does this in the rest of this tutorial.",
            <hr />,
            <b>React.JS History</b>,
            "Current version of React.JS is V18.0.0 (April 2022).",
            'Initial Release to the Public (V0.3.0) was in July 2013.',
            "React.JS was first used in 2011 for Facebook's Newsfeed feature.",
            "Facebook Software Engineer, Jordan Walke, created it.",
            "Current version of create-react-app is v5.0.1 (April 2022).",
            "create-react-app includes built tools such as webpack, Babel, and ESLint.",
        ],
    },

    {
        id: 2,
        title: "React Getting Started",
        content1: [
            "",
            "To use React in production, you need npm which is included with Node.js.",
            "To get an overview of what React is, you can write React code directly in HTML.",
            <hr />,
            <>
                But in order to use React in production, you need npm and{" "}
                <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>
                    Node.js
                </a>{" "}
                installed.
            </>,
            <hr />,
            <b>React Directly in HTML</b>,
            'The quickest way start learning React is to write React directly in your HTML files.',
            "For example, a function can be called when an event occurs, like when the user clicks a button.",
            <hr />,
            `Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.`,
            "You will learn more about JSX in the React JSX chapter.",
            <b>Example</b>,
            "Include three CDN's in your HTML file:",
        ],


        code: `<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  </head>
  <body>

    <div id="mydiv"></div>

    <script type="text/babel">
      function Hello() {
        return <h1>Hello World!</h1>;
      }

      const container = document.getElementById('mydiv');
      const root = ReactDOM.createRoot(container);
      root.render(<Hello />)
    </script>

  </body>
</html>`,
        content2: [
            "This way of using React can be OK for testing purposes, but for production you will need to set up a React environment.",
            <b>Setting up a React Environment</b>,
            "If you have npx and Node.js installed, you can create a React application by using create-react-app.",
            "If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx always uses the latest version of create-react-app.",
            "To uninstall, run this command: npm uninstall -g create-react-app.",
            <hr />,
            "Run this command to create a React application named my-react-app:",
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>npx create-react-app my-react-app</p>
            </>,

            "The create-react-app will set up everything you need to run a React application.",

            <b>Run the React Application</b>,
            "Now you are ready to run your first real React application!",
            "Run this command to move to the my-react-app directory:",
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>cd my-react-app</p>
            </>,
            "Run this command to run the React application my-react-app:",
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>npm start</p>
            </>,
            "A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.",
            <b>The result:</b>,
            <>
                <img src="./images/image.png" alt="" />
            </>,
            <b>Modify the React Application</b>,
            "So far so good, but how do I change the content?",
            "Look in the my-react-app directory, and you will find a src folder. Inside the src folder there is a file called App.js, open it and it will look like this:",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
                {`import logo from './logo.svg';
        import './App.css';
        
        function App() {
          return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          );
        }
        
export default App;`}
            </pre>,

            "Try changing the HTML content and save the file.",
            "Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!",
            <b>Example</b>,
            'Replace all the content inside the <div className="App"> with a <h1> element.',
            "See the changes in the browser when you click Save.",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
                {`function App() {
    return (
        <div className="App">
            <h1>Hello World!</h1>
        </div>
    );
}
export default App;`
                }
            </pre>,
            "Notice that we have removed the imports we do not need (logo.svg and App.css).",

            <b>The result:</b>,
            <>
                <img src="./images/screenshot_helloworld.png" alt="" />
            </>,

            <b>What's Next?</b>,
            "Now you have a React Environment on your computer, and you are ready to learn more about React.",
            'In the rest of this tutorial we will use our "Show React" tool to explain the various aspects of React, and how they are displayed in the browser.',
            'If you want to follow the same steps on your computer, start by stripping down the src folder to only contain one file: index.js. You should also remove any unnecessary lines of code inside the index.js file to make them look like the example in the "Show React" tool below:',
            <b>Example</b>,
            'Click the "Run Example" button to see the result.',
            <b>index.js:</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
                {`import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);`

                }
            </pre>,
        ],
    },


    {
        id: 3,
        title: "Upgrade React",
        content1: [
            "",
            <b>Upgrade to React 18</b>,
            'Upgrading an existing React application to version 18 only requires two steps.',
            "If you are already using the latest version of create-react-app which uses React version 18 you can skip this section.",

            <hr />,
            <b>Step 1: Install React 18</b>,
            'To install the latest version, from your project folder run the following from the terminal:',
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>npm i react@latest react-dom@latest</p>
            </>,
            <b>Step 2: Use the new root API</b>,
        ],
        code: `// Before
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// After
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`,
    },

    {
        id: 4,
        title: "React ES6",
        content1: [
            "",
            <b>What is ES6?</b>,
            'ES6 stands for ECMAScript 6.',
            "ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of",
            "ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.",
            "Why Should I Learn ES6?",
            "React uses ES6, and you should be familiar with some of the new features like:",
            '- Classes',
            "- Arrow Functions",
            "- Variables (let, const, var)",
            "- Array Methods like .map()",
            "- Destructuring",
            "- Modules",
            "- Ternary Operator",
            "- Spread Operator",
        ],
    }
];


const RJS_CourseContent = () => {
    // Load the saved section index from localStorage (default to 0 if not found)
    const [currentSection, setCurrentSection] = useState(
        parseInt(localStorage.getItem("currentSection")) || 0
    );

    const [completed, setCompleted] = useState(false);

    // Save the current section index to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("currentSection", currentSection);
    }, [currentSection]);

    const handleNext = () => {
        if (currentSection < sections.length - 1) {
            setCurrentSection(currentSection + 1);
        }
    };

    const handlePrevious = () => {
        if (currentSection > 0) {
            setCurrentSection(currentSection - 1);
        }
    };

    return (
        <div style={{ display: 'flex', padding: '24px' }}>
            {/* Sidebar */}
            <div style={{ width: '25%', padding: '16px', borderRight: '1px solid #ddd' }}>
                <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>React JS Tutorial</h2>
                <ul>
                    {sections.map((section, index) => (
                        <li
                            key={index}
                            style={{
                                padding: '8px',
                                backgroundColor: index === currentSection ? '#ebf8ff' : 'transparent',
                                borderRadius: '4px',
                                cursor: 'pointer'
                            }}
                            onClick={() => setCurrentSection(index)}
                        >
                            {section.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Main Content */}
            <div style={{ width: '75%', padding: '15px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>React JS Tutorial</h1>
                <p style={{ color: '#555' }}>Learn the basics of React JS programming language.</p>
                <p style={{ fontSize: '12px', color: '#777' }}>By Prof. Komal Maurya • Last updated: 15/2/2025</p>

                <button
                    style={{
                        marginTop: '16px',
                        padding: '10px 20px',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#fff',
                        backgroundColor: '#007bff',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        display: 'flex',

                    }}
                    onClick={() => alert('Start the Quiz!')}
                >
                    Start Quiz
                </button>


                <div style={{ marginTop: '16px', padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>{sections[currentSection].title}</h2>

                    {/* Render content1 as a list if it's an array */}
                    {Array.isArray(sections[currentSection].content1) ? (
                        <ul>
                            {sections[currentSection].content1.map((item, idx) => (
                                <li key={idx} style={{ marginBottom: "5px" }}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{ marginTop: '8px', color: '#333' }}>{sections[currentSection].content1}</p>
                    )}

                    <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
                        <code>{sections[currentSection].code}</code>
                    </pre>

                    {/* Render content2 as a list if it's an array */}
                    {Array.isArray(sections[currentSection].content2) ? (
                        <>
                            <h3 style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold' }}>{sections[currentSection].heading1}</h3>
                            <h3 style={{ marginTop: '16px', fontSize: '18px', fontWeight: 'bold' }}>{sections[currentSection].heading2}</h3>
                            <ul>
                                {sections[currentSection].content2.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: "5px" }}>{item}</li>
                                ))}
                            </ul>
                            {/* <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
            <code>{sections[currentSection].code}</code>
          </pre> */}
                        </>

                    ) : (
                        <p style={{ marginTop: '8px', color: '#333' }}>{sections[currentSection].content2}</p>
                    )}

                </div>



                {/* <div style={{ marginTop: '16px', padding: '16px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>{sections[currentSection].title}</h2>
          <p style={{ marginTop: '8px', color: '#333' }}>{sections[currentSection].content}</p>
          <pre style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', marginTop: '16px' }}>
            <code>{sections[currentSection].code}</code>
          </pre>
        </div> */}

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                    <button onClick={handlePrevious} disabled={currentSection === 0} style={{ padding: '8px 16px', backgroundColor: currentSection === 0 ? '#ddd' : '#007bff', color: 'white', borderRadius: '4px', border: 'none', cursor: currentSection === 0 ? 'not-allowed' : 'pointer' }}>Previous</button>
                    <button onClick={() => setCompleted(!completed)} style={{ padding: '8px 16px', backgroundColor: completed ? '#4caf50' : '#007bff', color: 'white', borderRadius: '4px', border: 'none' }}>
                        {completed ? "Completed" : "Mark as Completed"}
                    </button>
                    <button onClick={handleNext} disabled={currentSection === sections.length - 1} style={{ padding: '8px 16px', backgroundColor: currentSection === sections.length - 1 ? '#ddd' : '#007bff', color: 'white', borderRadius: '4px', border: 'none', cursor: currentSection === sections.length - 1 ? 'not-allowed' : 'pointer' }}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default RJS_CourseContent;
