import React, { useEffect, useState } from "react";

const sections = [
    {
        id: 1,
        title: "JAVA Introduction",
        content1: [
            "",
            <b>What is Java?</b>,
            "Java is a popular programming language, created in 1995.",
            <b>What is PHP?</b>,
            'It is owned by Oracle, and more than 3 billion devices run Java.',
            "It is used for:",
            "- Mobile applications (specially Android apps)",
            "- Desktop applications",
            "- Web applications",
            "- Web servers and application servers",
            "- Games",
            "- Database connection",
            "- And much, much more!",
            <hr />,
            <b>Why Use Java?</b>,
            "1. Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)",
            "2. It is one of the most popular programming languages in the world",
            '3. It has a large demand in the current job market',
            "4. It is open-source and free",
            "5. It is secure, fast and powerful",
            "6. It has huge community support (tens of millions of developers)",
            "7. Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs",
            "8. As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa",
            <hr />,
            <b>Get Started</b>,
            "When you are finished with this tutorial, you will be able to write basic Java programs and create real-life examples.",
            "It is not necessary to have any prior programming experience.",
            "- PHP can collect form data",
            <>
                <button style={{ padding: '8px 8px', color: 'white', background: "rgb(0, 123, 255)", borderRadius: '4px' }}>Get Started</button>
            </>
        ],

    },

    {
        id: 2,
        title: "Java Getting Started",
        content1: [
            "",
            <b>Java Install</b>,
            "Some PCs might have Java already installed.",
            "To check if you have Java installed on a Windows PC, search in the start bar for Java or type the following in Command Prompt (cmd.exe):",
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>C:\Users\Your Name{">"}java -version</p>
            </>,
            "2. Install a web server on your own PC, and then install PHP and MySQL",
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>
                    java version "22.0.0" 2024-08-21 LTS<br />
                    Java(TM) SE Runtime Environment 22.9 (build 22.0.0+13-LTS)<br />
                    Java HotSpot(TM) 64-Bit Server VM 22.9 (build 22.0.0+13-LTS, mixed mode)</p>
            </>,
            <hr />,
            <b>Use a Web Host With PHP Support</b>,
            "If you do not have Java installed on your computer, you can download it for free at oracle.com.",
            <><b>Note: </b>In this tutorial, we will write Java code in a text editor. However, it is possible to write Java in an Integrated Development Environment, such as IntelliJ IDEA, Netbeans or Eclipse, which are particularly useful when managing larger collections of Java files.</>,
            <b>Java Quickstart</b>,
            "In Java, every application begins with a class name, and that class must match the filename.",
            "Let's create our first Java file, called Main.java, which can be done in any text editor (like Notepad).",
            'The file should contain a "Hello World" message, which is written with the following code:',
            <b>Main.java</b>,
        ],
        code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`,

        content2: [
            "Don't worry if you don't understand the code above - we will discuss it in detail in later chapters. For now, focus on how to run the code above.",
            'Save the code in Notepad as "Main.java". Open Command Prompt (cmd.exe), navigate to the directory where you saved your file, and type "javac Main.java":',
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>C:\Users\Your Name{">"}javac Main.java</p>
            </>,
            'This will compile your code. If there are no errors in the code, the command prompt will take you to the next line. Now, type "java Main" to run the file:',
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>C:\Users\Your Name{">"}java Main</p>
            </>,
            "The output should read:",
            <>
                <p style={{ padding: '8px', background: '#000', color: '#fff' }}>Hello World</p>
            </>,
            "Congratulations! You have written and executed your first Java program.",
        ],
    },

    {
        id: 3,
        title: "JAVA Syntax",
        content1: [
            "",
            <b>Java Syntax</b>,
            'In the previous chapter, we created a Java file called Main.java, and we used the following code to print "Hello World" to the screen:',
            "Main.java",
        ],
        code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }}`,
        content2: [
            <b>The main Method</b>,
            "The main() method is required and you will see it in every Java program:",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
            {`public static void main(String[] args)`
            }
            </pre>,
            "Any code inside the main() method will be executed. Don't worry about the keywords before and after it. You will get to know them bit by bit while reading this tutorial.",
            "For now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.",
            <b>System.out.println()</b>,
            "Inside the main() method, we can use the println() method to print a line of text to the screen:",
            <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
            {`public static void main(String[] args) {
  System.out.println("Hello World");
}`
            }
            </pre>,

        ],
    }
]


const JAVA_CourseContent = () => {
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
                <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>JAVA Tutorial</h2>
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
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>JAVA Tutorial</h1>
                <p style={{ color: '#555' }}>Learn the basics of JAVA programming language.</p>
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

export default JAVA_CourseContent;
