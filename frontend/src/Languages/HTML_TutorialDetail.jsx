import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";

const sections = [
  {
    id: 1,
    title: "HTML Introduction",
    content1: [
      "",
      <hr />,
      "HTML is the standard markup language for creating Web pages. ",
      <b>What is HTML?</b>,
      "1. HTML stands for Hyper Text Markup Language",
      "2. HTML is the standard markup language for creating Web pages",
      "3. HTML describes the structure of a Web page",
      "4. HTML consists of a series of elements",
      "5. HTML elements tell the browser how to display the content",
      '6. HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.'
    ],
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Page Title</title>
</head>
<body>

  <h1>My First Heading</h1>
  <p>My first paragraph.</p>

</body>
</html>`,
    heading1: "Example Explained",
    content2: [
      " ",
      <hr />,
      "1. The <!DOCTYPE html> declaration defines that this document is an HTML5 document",
      "2. The <html> element is the root element of an HTML page",
      "3. The <head> element contains meta information about the HTML page",
      "4. The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)",
      "5. The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.",
      "6. The <h1> element defines a large heading",
      "7. The <p> element defines a paragraph",
      <>
        <img src="./images/Html_element.png" alt="" />
      </>,
      <b>Web Browsers</b>,
      "The purpose of a web browser (Chrome, Edge, Firefox, Safari) is to read HTML documents and display them correctly.",
      "A browser does not display the HTML tags, but uses them to determine how to display the document:",
      <>
        <img src="./images/img_chrome.png" alt="" />
      </>,
      <b>HTML Page Structure</b>,
      "Below is a visualization of an HTML page structure:",
      <>
        <img src="./images/Html_structure.png" alt="" />
      </>,

    ],

  },

  {
    id: 2,
    title: "HTML Editors",
    content1: [
      "",
      <hr />,
      "A simple text editor is all you need to learn HTML.",
      <b>Learn HTML Using Notepad or TextEdit</b>,
      "Web pages can be created and modified by using professional HTML editors.",
      "However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).",
      "We believe that using a simple text editor is a good way to learn HTML.",
      "Follow the steps below to create your first web page with Notepad or TextEdit.",
    ],
    heading1: "Step 1: Open Notepad (PC)",
    content2: [
      <b>Windows 8 or later:</b>,
      "Open the Start Screen (the window symbol at the bottom left on your screen). Type Notepad.",
      <b>Windows 7 or earlier:</b>,
      <b>Open Start {">"} Programs {">"}  Accessories {">"}  Notepad</b>,
      <hr />,
      <b>Step 2: Write Some HTML</b>,
      "Write or copy the following HTML code into Notepad:",
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>`
        },
        <>
          <img src="./images/img_notepad.png" alt="" />
        </>
      </pre>,

      <b>Step 3: Save the HTML Page</b>,

      "Save the file on your computer. Select File > Save as in the Notepad menu.",
      'Name the file "index.htm" and set the encoding to UTF-8 (which is the preferred encoding for HTML files).',
      <>
        <img src="./images/img_saveas.png" alt="" />
      </>,
      <b>Step 4: View the HTML Page in Your Browser</b>,
      'Open the saved HTML file in your favorite browser (double click on the file, or right-click - and choose "Open with").',
      "The result will look much like this:",
      <>
        <img src="./images/img_chrome (1).png" alt="" />
      </>,

    ],


  },

  {
    id: 3,
    title: "HTML Basic",
    content1: [
      "",
      <hr />,
      "In this chapter we will show some basic HTML examples.",
      "Don't worry if we use tags you have not learned about yet.",
      <b>HTML Documents</b>,
      "- All HTML documents must start with a document type declaration: <!DOCTYPE html>.",
      "- The HTML document itself begins with <html> and ends with </html>.",
      "- The visible part of the HTML document is between <body> and </body>.",
    ],
    heading1: "The <!DOCTYPE> Declaration",
    content2: [
      " ",
      "The <!DOCTYPE> declaration represents the document type, and helps browsers to display web pages correctly.",
      "It must only appear once, at the top of the page (before any HTML tags).",
      "The <!DOCTYPE> declaration is not case sensitive.",
      "The <!DOCTYPE> declaration for HTML5 is:",
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {
          '<!DOCTYPE html>'
        }
      </pre>,
      <hr />,
      <b>HTML Headings</b>,
      "HTML headings are defined with the <h1> to <h6> tags.",
      "<h1> defines the most important heading. <h6> defines the least important heading: ",
      <b>Example</b>,
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`
        }
      </pre>,
      <hr />,
      <b>HTML Paragraphs</b>,
      "HTML paragraphs are defined with the <p> tag:",
      <b>Example</b>,
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`
        }
      </pre>,
      <hr />,
      <b>HTML Links</b>,
      "HTML links are defined with the <a> tag:",

      <b>Example</b>,
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<a href="https://www.w3schools.com">This is a link</a>`
        }
      </pre>,
      "The link's destination is specified in the href attribute. ",
      "Attributes are used to provide additional information about HTML elements.",
      "You will learn more about attributes in a later chapter.",
      <hr />,
      <b>HTML Images</b>,
      "HTML images are defined with the <img> tag.",
      "The source file (src), alternative text (alt), width, and height are provided as attributes:",
      <b>Example</b>,
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<img src="img.jpg" alt="img.com" width="104" height="142">`
        }
      </pre>,

    ],

    code: `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>

<p>My first paragraph.</p>

</body>
</html>
`
  },


  {
    id: 4,
    title: "HTML Elements",
    content1: [
      "",
      <hr />,
      "An HTML element is defined by a start tag, some content, and an end tag.",
      <b>HTML Elements</b>,
      "- The HTML element is everything from the start tag to the end tag:",
      "- <tagname>Content goes here...</tagname>",
      "- Examples of some HTML elements:",
      "- <h1>My First Heading</h1>",
      "- <p>My first paragraph.</p>",
    ],
    code: `
<!DOCTYPE html>
<html>

  <head>
    <title>HTML Elements</title>
  </head>

    <body>
      <p>Welcome to EduLearn!</p>
    </body>

</html>`,
    content2: [
      <>
        <img src="./images/element_HTML.png" alt="" />
      </>,
      <b>Nested HTML Elements</b>,
      "HTML elements can be nested (this means that elements can contain other elements).",
      "All HTML documents consist of nested HTML elements.",
      "All HTML documents consist of nested HTML elements.",
      "The following example contains four HTML elements (<html>, <body>, <h1> and <p>):",
      <b>Example</b>,
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
`
        }
      </pre>,
      <b>Example Explained</b>,
      "The <html> element is the root element and it defines the whole HTML document.",
      "It has a start tag <html> and an end tag </html>.",
      "Then, inside the <html> element there is a <body> element:",
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
`
        }
      </pre>,
      "The <body> element defines the document's body.",
      "It has a start tag <body> and an end tag </body>.",
      "Then, inside the <body> element there are two other elements: <h1> and <p>:",
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<h1>My First Heading</h1>
<p>My first paragraph.</p>`
        }
      </pre>,
      "The <h1> element defines a heading.",
      "It has a start tag <h1> and an end tag </h1>:",
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<h1>My First Heading</h1>`
        }
      </pre>,
      "The <p> element defines a paragraph.",
      "It has a start tag <p> and an end tag </p>:",

      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<p>My first paragraph.</p>`
        }
      </pre>,
      <b>Never Skip the End Tag</b>,
      "Some HTML elements will display correctly, even if you forget the end tag:",
      <b>Example</b>,
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<html>
<body>

<p>This is a paragraph
<p>This is a paragraph

</body>
</html>`
        }
      </pre>,
      <b>Empty HTML Elements</b>,
      "HTML elements with no content are called empty elements.",
      "The <br> tag defines a line break, and is an empty element without a closing tag:",
      <b>Example</b>,
      <pre style={{ background: "rgb(245, 245, 245)", color: "#000", padding: "8px" }}>
        {`<p>This is a <br> paragraph with a line break.</p>`
        }
      </pre>,
      <b>HTML is Not Case Sensitive</b>,
      "HTML tags are not case sensitive: <P> means the same as <p>.",
      "The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.",
    ]
  },

  {
    id: 5,
    title: "HTML Attributes",
    content1: [
      "",
      <hr />,
      "HTML attributes provide additional information about HTML elements.",
      <hr />,
      <b>HTML Attributes</b>,
      "1. All HTML elements can have attributes",
      "2. Attributes provide additional information about elements",
      "3. Attributes are always specified in the start tag",
      '4. Attributes usually come in name/value pairs like: name="value"',
      "==> The href Attribute : The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed",
      "==> The src Attribute : The <img> tag is used to embed an image in an HTML page. The src attribute specifies the path to the image to be displayed",
      "==> The width and height Attributes : The <img> tag should also contain the width and height attributes, which specify the width and height of the image (in pixels)",
      "==> The alt Attribute : The required alt attribute for the <img> tag specifies an alternate text for an image, if the image for some reason cannot be displayed. This can be due to a slow connection, or an error in the src attribute, or if the user uses a screen reader.",

    ],
    content2: [
    ],

    code: `<!DOCTYPE html>
<html>
<body>

<img src="img.jpg" alt="Girl dancing">

<p>If we try to display an image that does not exist, the value of the alt attribute will be displayed instead. </p>

</body>
</html>`,
  },

  {
    id: 6,
    title: "HTML Headings",
    content1: [
      "",
      <hr />,
      "HTML headings are titles or subtitles that you want to display on a webpage.",
      <hr />,
      <b>HTML Headings</b>,
      "HTML headings are defined with the <h1> to <h6> tags.",
      "<h1> defines the most important heading. <h6> defines the least important heading.",
    ],
    code: `<!DOCTYPE html>
<html>
<body>

<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>

</body>
</html>`,

  },

  {
    id: 7,
    title: "HTML Paragraphs",
    content1: [
      "",
      <hr />,
      "A paragraph always starts on a new line, and is usually a block of text.",
      <hr />,
      <b>HTML Paragraphs</b>,
      "The HTML <p> element defines a paragraph.",
      "A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.",
    ],
    code: `<!DOCTYPE html>
<html>
<body>

<p>
This paragraph
contains a lot of lines
in the source code,
but the browser 
ignores it.
</p>

<p>
This paragraph
contains      a lot of spaces
in the source     code,
but the    browser 
ignores it.
</p>

<p>
The number of lines in a paragraph depends on the size of the browser window. If you resize the browser window, the number of lines in this paragraph will change.
</p>

<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
</body>
</html>`,
    content2: [
      "=> HTML Horizontal Rules : ",
      "The <hr> tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.",
      "The <hr> element is used to separate content (or define a change) in an HTML page:",
      "=> HTML Line Breaks : ",
      "The HTML <br> element defines a line break.",
      "Use <br> if you want a line break (a new line) without starting a new paragraph",
    ],

  },

  {
    id: 8,
    title: "HTML Styles",
    content1: [
      "",
      <hr />,
      "The HTML style attribute is used to add styles to an element, such as color, font, size, and more.",
      "=> The HTML Style Attribute",
      "Setting the style of an HTML element, can be done with the style attribute.",
      "The HTML style attribute has the following syntax:",
      '<tagname style="property:value;">',
      "The property is a CSS property. The value is a CSS value.",
      "=> Background Color:",
      "The CSS background-color property defines the background color for an HTML element.",
    ],
    content2: [
      "- Text Color : The CSS color property defines the text color for an HTML element",
      "- Fonts : The CSS font-family property defines the font to be used for an HTML element:",
      "- Text Size : The CSS font-size property defines the text size for an HTML element:",
      "- Text Alignment : The CSS text-align property defines the horizontal text alignment for an HTML element:",
      <br />,
      "= > Chapter Summary",
      "1. Use the style attribute for styling HTML elements",
      "2. Use background-color for background color",
      "3. Use color for text colors",
      "4. Use font-family for text fonts",
      "5. Use font-size for text sizes",
      "6. Use text-align for text alignment",
    ],
    code: `<!DOCTYPE html>
<html>
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`,

  },
];


const HTML_CourseContent = () => {
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
    <div style={{ display: 'flex', padding: '24px' }} >
      {/* Sidebar */}
      <div style={{ width: '25%', padding: '16px', borderRight: '1px solid #ddd' }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: '16px' }}>HTML Tutorial</h2>
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
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>HTML Tutorial</h1>
        <p style={{ color: '#555' }}>Learn the basics of HTML programming language.</p>
        <p style={{ fontSize: '12px', color: '#777' }}>By Prof. Komal Maurya • Last updated: 15/2/2025</p>

      <button><Link to="/HTML_Instructions"  
      style={{
        marginTop: '16px',
        padding: '8px 15px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'block',}}>Start Quiz</Link></button>


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

export default HTML_CourseContent;
