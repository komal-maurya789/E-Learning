import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const sections = [
    {
        id: 1,
        title: "CSS Introduction",
        content1: [
            "",
            "CSS is the language we use to style a Web page. ",
            <b>= What is CSS?</b>,
            "1. CSS stands for Cascading Style Sheets",
            "2. CSS describes how HTML elements are to be displayed on screen, paper, or in other media",
            "3. CSS saves a lot of work. It can control the layout of multiple web pages all at once",
            "4. External stylesheets are stored in CSS files",
            <b>CSS Demo - One HTML Page - Multiple Styles!</b>,
            'Here we will show one HTML page displayed with four different stylesheets. Click on the "Stylesheet 1", "Stylesheet 2", "Stylesheet 3", "Stylesheet 4" links below to see the different styles:',
            <>
                <img src="./images/CSS_pages.png" alt="" />
            </>,
            <hr />,
            <b>Why Use CSS?</b>,
            "CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.",
            <b>CSS Example</b>,
        ],
        code: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>My First CSS Example</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
        content2: [
            " ",
            <b>= CSS Solved a Big Problem"</b>,
            "1. HTML was NEVER intended to contain tags for formatting a web page!",
            "2. HTML was created to describe the content of a web page, like:",
            "<h1>This is a heading</h1>",
            "<p>This is a paragraph.</p>",
            "3. When tags like <font>, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.",
            "4. To solve this problem, the World Wide Web Consortium (W3C) created CSS.",
            "5. CSS removed the style formatting from the HTML page!", <br />,


            <b>Ways to Apply CSS</b>,
            "1. Inline CSS: Directly within the HTML element using the style attribute.",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
                {`<html>
<head>
</head>
<body>
    <p style="color: red;">This is inline CSS.</p>
</body>
</html>`
                }
            </pre>,

            <br />,
            "2. Internal CSS: Within a <style> tag in the <head> section.",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
                {`<html>
<head>
    <style>
        p {
            color: red;
        }
    </style>
</head>
<body>
    <p>Welcome to the world of GFG</p>
</body>
</html>`
                }
            </pre>,
            <br />,
            "3. External CSS: The external CSS is the CSS linked to an HTML file using the <link> tag.",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
                {`<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <p>Hello GFG</p>
</body>
</html>`
                }
            </pre>,
            <br />,

            <b>CSS Features and Use Cases</b>,
            "1. Changing Text Color",
            "Changes the text color of all <p> elements to green.",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
            {`<html>
<head>
    <style>
        p {
            color: green;
        }
    </style>
</head>
<body>
    <p>This text is green.</p>
</body>
</html>`
            }
        </pre>,

            <br />,
            "2. Cascading in CSS",
            "CSS resolves conflicts by prioritizing rules based on specificity and order. Shows how CSS applies rules based on specificity.",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
            {`<html>
<head>
    <style>
        * {
            color: black;
        }
        p {
            color: blue;
        }
        #special {
            color: orange;
        }
    </style>
</head>
<body>
    <p>This text is blue.</p>
    <p id="special">This text is orange.</p>
</body>
</html>`
            }
        </pre>,
        ],
    },

    {
        id: 2,
        title: "CSS Syntax",
        content1: [
            "",
            <hr/>,
            <>
            <img src="./images/CSS_Syntax.png" alt="" />
            </>,
            <hr/>,
            "1. The selector points to the HTML element you want to style.",
            "2. The declaration block contains one or more declarations separated by semicolons.",
            "3. Each declaration includes a CSS property name and a value, separated by a colon.",
            "4. Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.",
        ],
        heading1: "Example Explained",
        content2: [
            " ",
            "1. p is a selector in CSS (it points to the HTML element you want to style: <p>).",
            "2. color is a property, and red is the property value",
            "3. text-align is a property, and center is the property value",
        ],

        code: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red;
  text-align: center;
} 
</style>
</head>
<body>

<p>Hello World!</p>
<p>These paragraphs are styled with CSS.</p>

</body>
</html>`
    },


    {
        id: 3,
        title: "CSS Selectors",
        content1: [
            "",
            <hr/>,
            "A CSS selector selects the HTML element(s) you want to style.",
            <hr/>,
            <b>CSS Selectors</b>,
            "CSS selectors are used to 'find' (or select) the HTML elements you want to style.", <br />,
            "We can divide CSS selectors into five categories:", <br />,
            "- Simple selectors (select elements based on name, id, class)",
            "- Combinator selectors (select elements based on a specific relationship between them)",
            "- Pseudo-class selectors (select elements based on a certain state)",
            "- Pseudo-elements selectors (select and style a part of an element)",
            "- Attribute selectors (select elements based on an attribute or attribute value)",
            "This page will explain the most basic CSS selectors.",
            <b>The CSS element Selector</b>,
            "The element selector selects HTML elements based on the element name.",
            <b>Example</b>,
            "Here, all <p> elements on the page will be center-aligned, with a red text color: ",
        ],
        code: `
<!DOCTYPE html>
<html>
<head>
<style>
p {
  text-align: center;
  color: red;
} 
</style>
</head>
<body>

<p>Every paragraph will be affected by the style.</p>
<p id="para1">Me too!</p>
<p>And me!</p>

</body>
</html>`,
content2:[
    <b>The CSS id Selector</b>,
    "The id selector uses the id attribute of an HTML element to select a specific element.",
    "The id of an element is unique within a page, so the id selector is used to select one unique element!",
    "To select an element with a specific id, write a hash (#) character, followed by the id of the element.",
    <b>Example</b>,
    'The CSS rule below will be applied to the HTML element with id="para1": ',
    <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`#para1 {
  text-align: center;
  color: red;
}`
    }
</pre>,
]
    },

    {
        id: 4,
        title: "How To Add CSS",
        content1: [
            "",
            "When a browser reads a style sheet, it will format the HTML document according to the information in the style sheet.",
            <b>Three Ways to Insert CSS</b>,
            "There are three ways of inserting a style sheet:",
            "1. External CSS",
            "2. Internal CSS",
            "3. Inline CSS",
            <hr />,
            <b>External CSS</b>,
            "With an external style sheet, you can change the look of an entire website by changing just one file!",
            "Each HTML page must include a reference to the external style sheet file inside the <link> element, inside the head section.",
            <b>Example</b>,
            "External styles are defined within the <link> element, inside the <head> section of an HTML page:",
        ],
        content2: [
            "An external style sheet can be written in any text editor, and must be saved with a .css extension.",
            "The external .css file should not contain any HTML tags.",
            'Here is how the "mystyle.css" file looks:',
            <b>"mystyle.css"</b>,
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`body {
  background-color: lightblue;
}

h1 {
  color: navy;
  margin-left: 20px;
}`
    }
</pre>,
        ],

        code: `<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="mystyle.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,
    },

    {
        id: 5,
        title: "CSS Comments",
        content1: [
            "",
            <hr />,
            "CSS comments are not displayed in the browser, but they can help document your source code.",
            <b>CSS Comments</b>,
            "1. Comments are used to explain the code, and may help when you edit the source code at a later date.",
            "2. Comments are ignored by browsers.",
            "3. A CSS comment is placed inside the <style> element, and starts with /* and ends with */",
        ],
        code: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red; /* Set text color to red */
}
</style>
</head>
<body>

<h2>My Heading</h2>

<!-- These paragraphs will be red -->
<p>Hello World!</p>
<p>This paragraph is styled with CSS.</p>
<p>HTML and CSS comments are not shown in the output.</p>

</body>
</html>`,
content2:[
    <b>HTML and CSS Comments</b>,
    "From the HTML tutorial, you learned that you can add comments to your HTML source by using the <!--...--> syntax.",
    "In the following example, we use a combination of HTML and CSS comments:",
    <b>Example</b>,
    <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
    {`<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red; /* Set text color to red */
}
</style>
</head>
<body>

<h2>My Heading</h2>

<!-- These paragraphs will be red -->
<p>Hello World!</p>
<p>This paragraph is styled with CSS.</p>
<p>HTML and CSS comments are not shown in the output.</p>

</body>
</html>`
    }
</pre>,
]
    },
];


const CSS_CourseContent = () => {
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
                <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>CSS Tutorial</h2>
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
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>CSS Tutorial</h1>
                <p style={{ color: '#555' }}>Learn the basics of CSS programming language.</p>
                <p style={{ fontSize: '12px', color: '#777' }}>By Prof. Komal Maurya • Last updated: 15/2/2025</p>

                <button ><Link to="/CSS_Instructions"  
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
                    // onClick={() => alert('Start the Quiz!')}
                >
                    Start Quiz</Link>
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

export default CSS_CourseContent;
