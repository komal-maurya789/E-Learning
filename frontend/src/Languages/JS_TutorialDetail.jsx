import React, { useEffect, useState } from "react";

const sections = [
    {
        id: 1,
        title: "JavaScript Introduction",
        content1: [
            "",
            <b>What is JavaScript?</b>,
            "JavaScript is the programming language of the web.",
            "It can update and change both HTML and CSS.",
            "It can calculate, manipulate and validate data.",
            <b>Why Study JavaScript?</b>,
            'JavaScript is one of the 3 languages all web developers must learn:',
            "1. HTML to define the content of web pages",
            "2. CSS to specify the layout of web pages",
            "3. JavaScript to program the behavior of web pages",
            <hr />,
            <b>JavaScript Can Change HTML Content</b>,
            "One of many JavaScript HTML methods is getElementById().",
            'The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":',
            <b>EXAMPLE</b>,
            'document.getElementById("demo").innerHTML = "Hello JavaScript";',
            <hr />,
            <b>JavaScript accepts both double and single quotes:</b>,
            <b>Example</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`document.getElementById('demo').innerHTML = 'Hello JavaScript';`
    }
</pre>,

            "JavaScript Can Change HTML Attribute Values",
            "In this example JavaScript changes the value of the src (source) attribute of an <img> tag:",
            <hr />,
        ],
        code: `<!DOCTYPE html>
<html>
<body>

<h2>What Can JavaScript Do?</h2>

<p>JavaScript can change HTML attribute values.</p>

<p>In this case JavaScript changes the value of the src (source) attribute of an image.</p>

<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Turn on the light</button>

<img id="myImage" src="pic_bulboff.gif" style="width:100px">

<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Turn off the light</button>

</body>
</html>`,
        content2: [
            <b>JavaScript Can Change HTML Styles (CSS)</b>,
            "Changing the style of an HTML element, is a variant of changing an HTML attribute:",
            <b>Example</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`document.getElementById("demo").style.fontSize = "35px";`
    }
    </pre>,
            <b>JavaScript Can Hide HTML Elements</b>,
            "Hiding HTML elements can be done by changing the display style:",
            <b>Example</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`document.getElementById("demo").style.display = "none";`
    }
    </pre>,
            
            <b>JavaScript Can Show HTML Elements</b>,
            "Showing hidden HTML elements can also be done by changing the display style:",
            <b>Example</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`document.getElementById("demo").style.display = "block";`
    }
    </pre>,
        ],
    },

    {
        id: 2,
        title: "JavaScript Where To",
        content1: [
            "",
            <b>The script Tag</b>,
            "In HTML, JavaScript code is inserted between <script> and </script> tags.",
            <b>Example</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>`
    }
    </pre>,
            <hr />,
            <b>JavaScript Functions and Events</b>,
            'A JavaScript function is a block of JavaScript code, that can be executed when "called" for.',
            "For example, a function can be called when an event occurs, like when the user clicks a button.",
            <hr />,
            `JavaScript in <head> or <body>`,
            "You can place any number of scripts in an HTML document.",
            "Scripts can be placed in the <body>, or in the <head> section of an HTML page, or in both.",

            "JavaScript in <head>",
            "In this example, a JavaScript function is placed in the <head> section of an HTML page.",
            "The function is invoked (called) when a button is clicked:",
            <b>Example</b>,
        ],
        code: `<!DOCTYPE html>
<html>
<head>
<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>
<h2>Demo JavaScript in Head</h2>

<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>`,
content2:[
    <b>JavaScript in {"<"}body{">"}</b>,
    "In this example, a JavaScript function is placed in the <body> section of an HTML page.",
    "The function is invoked (called) when a button is clicked:",
    <b>Example</b>,
    <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`<!DOCTYPE html>
<html>
<body>

<h2>Demo JavaScript in Body</h2>

<p id="demo">A Paragraph</p>

<button type="button" onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>

</body>
</html>`
    }
    </pre>,
    <b>External JavaScript</b>,
    "Scripts can also be placed in external files:",
    <b>External file: myScript.js</b>,
    <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}`
    }
    </pre>,
],
    },


    {
        id: 3,
        title: "JavaScript Output",
        content1: [
            "",
            <b>JavaScript Display Possibilities</b>,
            'JavaScript can "display" data in different ways:',
            "1. Writing into an HTML element, using innerHTML or innerText.",
            "2. Writing into the HTML output using document.write().",
            "3. Writing into an alert box, using window.alert().",
            "4. Writing into the browser console, using console.log().",
            <hr />,
            <b>Using innerHTML</b>,
            'To access an HTML element, you can use the document.getElementById(id) method.',
            "Use the id attribute to identify the HTML element.",
            "Then use the innerHTML property to change the HTML content of the HTML element:",
            <b>Example</b>,
        ],
        code: `<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
</script>

</body>
</html>`,

content2:[
    <b>Using innerText</b>,
    "To access an HTML element, use the document.getElementById(id) method.",
    "Then use the innerText property to change the inner text of the HTML element:",
    <b>Example</b>,
<pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My First Paragraph</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerText = "Hello World";
</script>

</body>
</html>`
    }
    </pre>,

    <b>Using document.write()</b>,
    "For testing purposes, it is convenient to use document.write()",
    <b>Example</b>,
    <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
document.write(5 + 6);
</script>

</body>
</html>`
    }
    </pre>,
    <b>Using window.alert()</b>,
    "You can use an alert box to display data",
    <b>Example</b>,
    <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`<!DOCTYPE html>
<html>
<body>

<h1>My First Web Page</h1>
<p>My first paragraph.</p>

<script>
window.alert(5 + 6);
</script>

</body>
</html>`
    }
    </pre>,
]
    },

    {
        id: 4,
        title: "JavaScript Statements",
        content1: [
            "",
            <b>Statements</b>,
            <b>Example</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
            {`let x, y, z;    // Statement 1
x = 5;          // Statement 2
y = 6;          // Statement 3
z = x + y;      // Statement 4`
            }
            </pre>,
            
            <hr />,
            <b>JavaScript Programs</b>,
            'A computer program is a list of "instructions" to be "executed" by a computer.',
            "In a programming language, these programming instructions are called statements.",
            "A JavaScript program is a list of programming statements.",
            <b>Example</b>,
        ],
        code: `<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>

<p id="demo"></p>

<script>
let x, y, z;  // Statement 1
x = 5;        // Statement 2
y = 6;        // Statement 3
z = x + y;    // Statement 4

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";  
</script>

</body>
</html>`
    },
];


const JS_CourseContent = () => {
    const [currentSection, setCurrentSection] = useState(() => {
           const savedIndex = parseInt(localStorage.getItem("currentSection"));
           return isNaN(savedIndex) || savedIndex < 0 || savedIndex >= sections.length ? 0 : savedIndex;
       });
   
       const [completed, setCompleted] = useState(false);
   
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
   
       if (!sections[currentSection]) {
           return <p>Loading content...</p>; // Prevent undefined access
       };
   

    return (
        <div style={{ display: 'flex', padding: '24px' }}>
            {/* Sidebar */}
            <div style={{ width: '25%', padding: '16px', borderRight: '1px solid #ddd' }}>
                <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>JAVASCRIPT Tutorial</h2>
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
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>JAVASCRIPT Tutorial</h1>
                <p style={{ color: '#555' }}>Learn the basics of JAVASCRIPT programming language.</p>
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

export default JS_CourseContent;
