import React, { useEffect, useState } from "react";

const sections = [
    {
        id: 1,
        title: "PHP Introduction",
        content1: [
            "",
            "PHP code is executed on the server.",
            <b>= What You Should Already Know</b>,
            <>
              Before you continue you should have a basic understanding of the following:{" "}
              <a href="http://localhost:3000/TutorialDetail" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>
              1. HTML{" "}
              </a>
              <a href="http://localhost:3000/CSS_TutorialDetail" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>
              2. CSS
              </a>{" "} 
              <a href="http://localhost:3000/JS_TutorialDetail" target="_blank" rel="noopener noreferrer" style={{color: 'blue'}}>
              3. JAVASCRIPT
              </a>{" "}
            </>,
            "If you want to study these subjects first, find the tutorials on our Home page.",
            <b>What is PHP?</b>,
            '1. PHP is an acronym for "PHP: Hypertext Preprocessor"',
            "2. PHP is a widely-used, open source scripting language",
            "3. PHP scripts are executed on the server",
            "4. PHP scripts are executed on the server",
            <hr/>,
            <b>What is a PHP File?</b>,
            "1. PHP files can contain text, HTML, CSS, JavaScript, and PHP code",
            "2. PHP code is executed on the server, and the result is returned to the browser as plain HTML",
            '3. PHP files have extension ".php"',
            <hr/>,
            <b>What Can PHP Do?</b>,
            "- PHP can generate dynamic page content",
            "- PHP can create, open, read, write, delete, and close files on the server",
            "- PHP can collect form data",
            "- PHP can send and receive cookies",
            "- PHP can add, delete, modify data in your database",
            "- PHP can be used to control user-access",
            "- PHP can encrypt data",
            "With PHP you are not limited to output HTML. You can output images or PDF files. You can also output any text, such as XHTML and XML.",
            <hr/>,
            <b>Why PHP?</b>,
            "- PHP runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)",
            "- PHP is compatible with almost all servers used today (Apache, IIS, etc.)",
            "- PHP supports a wide range of databases",
            "- PHP is free. Download it from the official PHP resource: www.php.net ",
            "- PHP is easy to learn and runs efficiently on the server side",
            <hr/>,
            <b>What's new in PHP 7</b>,
            "PHP 7 is much faster than the previous popular stable release (PHP 5.6)",
            "PHP 7 has improved Error Handling",
            "PHP 7 supports stricter Type Declarations for function arguments",
            "PHP 7 supports new operators (like the spaceship operator: <=>)",
        ],
       
    },

    {
        id: 2,
        title: "PHP Installation",
        content1: [
            "",
            <b>What Do I Need?</b>,
            "To start using PHP, you can:",
            "1. Find a web host with PHP and MySQL support",
            "2. Install a web server on your own PC, and then install PHP and MySQL",
            <hr/>,
            <b>Use a Web Host With PHP Support</b>,
            "If your server has activated support for PHP you do not need to do anything.",
            "Just create some .php files, place them in your web directory, and the server will automatically parse them for you.",
            "You do not need to compile anything or install any extra tools.",
            "Because PHP is free, most web hosts offer PHP support.", 
            <hr/>,
            <b>Set Up PHP on Your Own PC</b>,
            "However, if your server does not support PHP, you must:",
            "install a web server",
            "install PHP",
            "install a database, such as MySQL",           
        ],
        

        code: `<?php
$txt = "PHP";
echo "I love $txt!";
?>`,
content2:[
      <b>PHP Version</b>  ,
      "To check your php version you can use the phpversion() function:",
      <b>Example</b>,
      "Display the PHP version:",
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
      {`echo phpversion();`
      }
      </pre>,
]
    },

   


    {
        id: 3,
        title: "PHP Syntax",
        content1: [
            "",
            "A PHP script is executed on the server, and the plain HTML result is sent back to the browser.",
            <hr/>,
            "A PHP script can be placed anywhere in the document.",
            "A PHP script starts with <?php and ends with ?>:",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
      {`<?php
// PHP code goes here
?>`
      }
      </pre>,
            
            <hr/>,
            'The default file extension for PHP files is ".php".',
            "A PHP file normally contains HTML tags, and some PHP scripting code.",
            <hr/>,
            'Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function "echo" to output the text "Hello World!" on a web page:',
            <b>Example</b>,
            "A simple .php file with both HTML code and PHP code:",
        ],
        code: `<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>`,
content2:[
    <b>PHP Case Sensitivity</b>,
    "In PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are not case-sensitive.",
    "In the example below, all three echo statements below are equal and legal:",
    <b>Example</b>,
    "ECHO is the same as echo:",
    <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
      {`<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html> `
      }
      </pre>,
]
    },
];


const PHP_CourseContent = () => {
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
    }                                                               

    return (
        <div style={{ display: 'flex', padding: '24px' }}>
            {/* Sidebar */}
            <div style={{ width: '25%', padding: '16px', borderRight: '1px solid #ddd' }}>
                <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>PHP Tutorial</h2>
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
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>PHP Tutorial</h1>
                <p style={{ color: '#555' }}>Learn the basics of PHP programming language.</p>
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

export default PHP_CourseContent;
