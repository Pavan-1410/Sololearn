import React, { useState, useEffect, useRef } from 'react';
import CoursePlayer from "./me"; // Adjust path as needed
import screenfull from 'screenfull';


type QuestionType = "mcq" | "fill";

interface QuizQuestion {
  type: QuestionType;
  question: string;
  options?: string[]; // Optional for fill-in-the-blank
  correctAnswer: string;
}

interface Lesson {
  id: number;
  title: string;
  type: "text";
  content: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  quiz: QuizQuestion[];
}

interface Chapter {
  id: number;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

interface CourseData {
  title: string;
  description: string;
  icon: React.ReactNode;
  chapters: Chapter[];
}

// Define icon as a separate component
const HtmlIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 128 128">
    <g>
      <path
        fill="#E44D26"
        d="M19.1 116.1L8.1 0h111.8l-11 116.1L63.9 128"
      />
      <path fill="#F16529" d="M64 119.2l36.6-10.1 9.4-105H64" />
      <path
        fill="#EBEBEB"
        d="M64 52.6H44.3l-1.3-14.7H64V23.7H28.6l.3 3.7 3.4 38.2H64zm0 37.4l-.1.1-16.3-4.4-1-11.1H32.8l2 22.2 29.1 8.1.1-.1z"
      />
      <path
        fill="#FFF"
        d="M64 52.6v14.2h16.6l-1.6 18.2L64 89.9v14.3l29.1-8.1.2-2.3 3.3-36.9.3-3.7H64zm0-28.9v14.2h32.4l.3-3.7.6-6.8.3-3.7z"
      />
    </g>
  </svg>
);

const htmlCourseData: CourseData = {
  title: "HTML Interactive Course",
  description:
    "HTML is at the core of every web page. It's beginner-friendly and knowing the basics is useful for everyone who works in digital design, marketing, content, and more. If you're interested in front-end web development, this course is a great place to start! You don't need any previous coding experience, and we have plenty of other courses for you to deepen your knowledge once you're finished, including CSS and JavaScript.",
  icon: <HtmlIcon />,
  chapters: [
    {
      id: 1,
      title: "HTML Fundamentals",
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: "What is HTML?",
          type: "text",
          content: `HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages. HTML uses 'tags' to mark up content so browsers know how to display it.

Key points:
- HTML structures content on the web
- Tags define elements like headings, paragraphs, and links
- It works alongside CSS and JavaScript

Example:
<p>This is a paragraph.</p>
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 2,
          title: "HTML Document Structure",
          type: "text",
          content: `A basic HTML document has a specific structure:

<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>

Key elements:
- <!DOCTYPE html>: Declares the document as HTML5
- <html>: Root element
- <head>: Contains metadata
- <body>: Contains visible content
          
`,

          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 3,
          title: "HTML Tags and Elements",
          type: "text",
          content: `HTML uses tags like <p>, <h1>, <a>, etc. Tags usually come in pairs: an opening tag <tag> and a closing tag </tag>.

Example:
<p>This is a paragraph.</p>

Some tags are self-closing, like <img /> and <br />.

Key points:
- Tags define the type of content
- Attributes provide additional information (e.g., src, href)
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 4,
          title: "Comments and Whitespace",
          type: "text",
          content: `You can add comments in HTML using <!-- Comment here -->. Comments are not displayed in the browser.

Whitespace (spaces, tabs, and line breaks) is ignored by browsers, but can make your code more readable.

Example:
<!-- This is a comment -->
<p>Paragraph with    extra   spaces.</p>

`,
         
          duration: "8 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 5,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              type: "mcq",
              question: "What does HTML stand for?",
              options: [
                "HyperText Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyper Tool Markup Language",
              ],
              correctAnswer: "HyperText Markup Language",
            },
            {
              type: "fill",
              question: "Fill in the blank: HTML uses ____ to structure content.",
              correctAnswer: "tags",
            },
            {
              type: "mcq",
              question: "What is the purpose of HTML?",
              options: [
                "To style web pages",
                "To structure content",
                "To add interactivity",
                "To manage databases",
              ],
              correctAnswer: "To structure content",
            },
            {
              type: "mcq",
              question: "Where does the visible content of a web page go?",
              options: ["<head>", "<body>", "<html>", "<title>"],
              correctAnswer: "<body>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ tag contains metadata.",
              correctAnswer: "head",
            },
            {
              type: "mcq",
              question: "What does <!DOCTYPE html> declare?",
              options: [
                "HTML4 document",
                "HTML5 document",
                "CSS document",
                "JavaScript document",
              ],
              correctAnswer: "HTML5 document",
            },
            {
              type: "mcq",
              question: "Which of these is a self-closing tag?",
              options: ["<p>", "<img />", "<h1>", "<div>"],
              correctAnswer: "<img />",
            },
            {
              type: "fill",
              question: "Fill in the blank: Tags usually come in ____ (opening and closing).",
              correctAnswer: "pairs",
            },
            {
              type: "mcq",
              question: "What do attributes provide in HTML tags?",
              options: [
                "Additional information",
                "Styling",
                "Interactivity",
                "Database connections",
              ],
              correctAnswer: "Additional information",
            },
            {
              type: "mcq",
              question: "How do you write a comment in HTML?",
              options: [
                "// comment",
                "# comment",
                "<!-- comment -->",
                "/* comment */",
              ],
              correctAnswer: "<!-- comment -->",
            },
            {
              type: "fill",
              question: "Fill in the blank: HTML comments start with ____.",
              correctAnswer: "<!--",
            },
            {
              type: "mcq",
              question: "What happens to extra whitespace in HTML?",
              options: [
                "It is ignored by browsers",
                "It creates errors",
                "It adds extra spacing",
                "It changes the layout",
              ],
              correctAnswer: "It is ignored by browsers",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Text and Headings",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "Headings",
          type: "text",
          content: `HTML provides six levels of headings: <h1> (largest) through <h6> (smallest).

Example:
<h1>Main Title</h1>
<h2>Subtitle</h2>

Use headings to organize your content hierarchically for better readability and SEO.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 7,
          title: "Paragraphs and Line Breaks",
          type: "text",
          content: `Use <p> for paragraphs. To add a line break within text, use <br />.

Example:
<p>This is a paragraph.<br />This is a new line.</p>

Paragraphs create block-level content, while <br /> adds a single line break.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 8,
          title: "Text Formatting",
          type: "text",
          content: `HTML offers tags for formatting text:
- <strong> for bold
- <em> for italics
- <u> for underline

Example:
<p>This is <strong>bold</strong> and <em>italic</em> text.</p>

Use semantic tags like <strong> and <em> for accessibility.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 9,
          title: "Lists",
          type: "text",
          content: `HTML supports:
- Ordered lists: <ol>
- Unordered lists: <ul>
- List items: <li>

Example:
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

Ordered lists use numbers; unordered lists use bullets.
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 10,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which tag gives the largest heading?",
              options: ["<h6>", "<h1>", "<h3>", "<h4>"],
              correctAnswer: "<h1>",
            },
            {
              type: "fill",
              question: "Fill in the blank: HTML has ____ levels of headings.",
              correctAnswer: "six",
            },
            {
              type: "mcq",
              question: "Why are headings important?",
              options: [
                "For SEO and readability",
                "To add colors",
                "To include images",
                "To run scripts",
              ],
              correctAnswer: "For SEO and readability",
            },
            {
              type: "mcq",
              question: "Which tag creates a new paragraph?",
              options: ["<p>", "<br />", "<h1>", "<div>"],
              correctAnswer: "<p>",
            },
            {
              type: "fill",
              question: "Fill in the blank: To add a line break, use ____.",
              correctAnswer: "<br />",
            },
            {
              type: "mcq",
              question: "What type of element is a <p> tag?",
              options: [
                "Block-level",
                "Inline",
                "Self-closing",
                "Scripting",
              ],
              correctAnswer: "Block-level",
            },
            {
              type: "mcq",
              question: "Which tag makes text italic?",
              options: ["<em>", "<strong>", "<b>", "<i>"],
              correctAnswer: "<em>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The <____> tag makes text bold.",
              correctAnswer: "strong",
            },
            {
              type: "mcq",
              question: "Why use <strong> instead of <b>?",
              options: [
                "Better accessibility",
                "It’s newer",
                "It’s required",
                "No difference",
              ],
              correctAnswer: "Better accessibility",
            },
            {
              type: "mcq",
              question: "Which tag is used for a list item?",
              options: ["<li>", "<ul>", "<ol>", "<item>"],
              correctAnswer: "<li>",
            },
            {
              type: "fill",
              question: "Fill in the blank: An ordered list uses the ____ tag.",
              correctAnswer: "<ol>",
            },
            {
              type: "mcq",
              question: "What does an unordered list use for items?",
              options: ["Bullets", "Numbers", "Letters", "Icons"],
              correctAnswer: "Bullets",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Links and Images",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "Links",
          type: "text",
          content: `Use the <a> tag to create hyperlinks.

Example:
<a href="https://example.com">Visit Example</a>

Key points:
- The href attribute specifies the link destination
- Use target="_blank" to open in a new tab
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 12,
          title: "Images",
          type: "text",
    content: `Use the <img> tag to display images.

Example:
<img src="image.jpg" alt="Description" />

Key points:
- src specifies the image file
- alt provides accessibility text
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 13,
          title: "Linking Images",
          type: "text",
          content: `You can make images clickable by wrapping them in <a> tags.

Example:
<a href="https://example.com"><img src="logo.png" alt="Logo" /></a>

This combines the functionality of links and images.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 14,
          title: "Image Attributes",
          type: "text",
          content: `Common <img> attributes:
- width and height: Set image size
- alt: Alternative text for accessibility
- title: Tooltip text

Example:
<img src="cat.jpg" alt="A cat" width="200" height="100" />
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 15,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which attribute defines the link destination in <a>?",
              options: ["src", "href", "link", "url"],
              correctAnswer: "href",
            },
            {
              type: "fill",
              question: "Fill in the blank: To open a link in a new tab, use target='____'.",
              correctAnswer: "_blank",
            },
            {
              type: "mcq",
              question: "What tag creates a hyperlink?",
              options: ["<link>", "<a>", "<href>", "<url>"],
              correctAnswer: "<a>",
            },
            {
              type: "mcq",
              question: "Which tag is used to display an image?",
              options: ["<img>", "<image>", "<src>", "<pic>"],
              correctAnswer: "<img>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ attribute provides accessibility text for images.",
              correctAnswer: "alt",
            },
            {
              type: "mcq",
              question: "What does the src attribute do in an <img> tag?",
              options: [
                "Sets image size",
                "Specifies the image file",
                "Adds a caption",
                "Links to another page",
              ],
              correctAnswer: "Specifies the image file",
            },
            {
              type: "mcq",
              question: "How do you make an image a link?",
              options: [
                "Wrap <img> in <a>",
                "Add href to <img>",
                "Use <link> tag",
                "Not possible",
              ],
              correctAnswer: "Wrap <img> in <a>",
            },
            {
              type: "fill",
              question: "Fill in the blank: To make an image clickable, wrap it in a ____ tag.",
              correctAnswer: "<a>",
            },
            {
              type: "mcq",
              question: "What attribute is needed in the <a> tag for a clickable image?",
              options: ["src", "alt", "href", "title"],
              correctAnswer: "href",
            },
            {
              type: "mcq",
              question: "Which attribute improves accessibility for images?",
              options: ["src", "alt", "width", "title"],
              correctAnswer: "alt",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ attribute sets the image width.",
              correctAnswer: "width",
            },
            {
              type: "mcq",
              question: "What does the title attribute do in an <img> tag?",
              options: [
                "Sets the image size",
                "Provides a tooltip",
                "Links to another page",
                "Adds a caption",
              ],
              correctAnswer: "Provides a tooltip",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Tables and Forms",
      isExpanded: false,
      lessons: [
        {
          id: 16,
          title: "Tables",
          type: "text",
          content: `Tables organize data in rows and columns.

Basic structure:
<table>
  <tr>
    <th>Header</th>
    <th>Header</th>
  </tr>
  <tr>
    <td>Data</td>
    <td>Data</td>
  </tr>
</table>

Key tags:
- <table>: Defines the table
- <tr>: Table row
- <th>: Header cell
- <td>: Data cell
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 17,
          title: "Table Elements",
          type: "text",
          content: `Key table elements:
- <table>: Table container
- <tr>: Table row
- <th>: Header cell
- <td>: Data cell

Example:
<tr>
  <th>Name</th>
  <th>Age</th>
</tr>
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 18,
          title: "Forms and Inputs",
          type: "text",
          content: `Forms collect user input.

Example:
<form>
  <input type="text" name="username" />
  <input type="submit" value="Send" />
</form>

Key points:
- <form>: Container for inputs
- <input>: Collects user data
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 19,
          title: "Input Types",
          type: "text",
          content: `Common input types:
- text
- password
- email
- checkbox
- radio

Example:
<input type="email" name="useremail" />

Each type serves a specific purpose for user input.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 20,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which tag defines a table row?",
              options: ["<tr>", "<td>", "<th>", "<row>"],
              correctAnswer: "<tr>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ tag defines a table.",
              correctAnswer: "<table>",
            },
            {
              type: "mcq",
              question: "Which tag is used for table header cells?",
              options: ["<td>", "<th>", "<tr>", "<table>"],
              correctAnswer: "<th>",
            },
            {
              type: "mcq",
              question: "Which tag is for a header cell?",
              options: ["<th>", "<td>", "<tr>", "<thead>"],
              correctAnswer: "<th>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ tag defines a data cell.",
              correctAnswer: "<td>",
            },
            {
              type: "mcq",
              question: "What does the <tr> tag represent?",
              options: [
                "Table row",
                "Table header",
                "Table data",
                "Table container",
              ],
              correctAnswer: "Table row",
            },
            {
              type: "mcq",
              question: "Which tag is used for user input?",
              options: ["<input>", "<form>", "<user>", "<textbox>"],
              correctAnswer: "<input>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ tag is the container for form inputs.",
              correctAnswer: "<form>",
            },
            {
              type: "mcq",
              question: "What does the name attribute do in an <input> tag?",
              options: [
                "Identifies the input for form submission",
                "Styles the input",
                "Sets the input type",
                "Displays a label",
              ],
              correctAnswer: "Identifies the input for form submission",
            },
            {
              type: "mcq",
              question: "Which input type is used for email addresses?",
              options: ["text", "email", "password", "number"],
              correctAnswer: "email",
            },
            {
              type: "fill",
              question: "Fill in the blank: For multiple-choice options, use input type ____.",
              correctAnswer: "radio",
            },
            {
              type: "mcq",
              question: "What does the password input type do?",
              options: [
                "Hides typed characters",
                "Sends email",
                "Allows multiple selections",
                "Formats numbers",
              ],
              correctAnswer: "Hides typed characters",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Semantic HTML & Multimedia",
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: "Semantic Elements",
          type: "text",
          content: `Semantic elements describe their meaning:
- <header>
- <nav>
- <main>
- <section>
- <article>
- <footer>

They help with accessibility and SEO.

Example:
<main>
  <article>Content</article>
</main>
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 22,
          title: "Audio and Video",
          type: "text",
          content: `HTML5 supports audio and video:

Example:
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
<video controls width="320">
  <source src="movie.mp4" type="video/mp4">
</video>

The controls attribute adds playback controls.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 23,
          title: "The <div> and <span> Elements",
          type: "text",
          content: `<div> is a block-level container for grouping content. <span> is an inline container.

Example:
<div class="container">
  <span>Text</span>
</div>

Use them for styling or scripting purposes.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 24,
          title: "HTML Best Practices",
          type: "text",
          content: `Best practices:
- Use semantic tags for clarity
- Add alt text to images
- Indent nested elements
- Close all tags properly
- Keep code readable and organized

Example:
<section>
  <h1>Title</h1>
  <p>Content</p>
</section>
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 25,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which tag represents the main content?",
              options: ["<main>", "<body>", "<section>", "<article>"],
              correctAnswer: "<main>",
            },
            {
              type: "fill",
              question: "Fill in the blank: Semantic elements improve ____ and SEO.",
              correctAnswer: "accessibility",
            },
            {
              type: "mcq",
              question: "Which tag is used for navigation links?",
              options: ["<nav>", "<header>", "<footer>", "<main>"],
              correctAnswer: "<nav>",
            },
            {
              type: "mcq",
              question: "Which tag is used for video?",
              options: ["<audio>", "<movie>", "<video>", "<media>"],
              correctAnswer: "<video>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ attribute adds playback controls.",
              correctAnswer: "controls",
            },
            {
              type: "mcq",
              question: "What tag is used inside <video> to specify the file?",
              options: ["<source>", "<file>", "<media>", "<track>"],
              correctAnswer: "<source>",
            },
            {
              type: "mcq",
              question: "Which element is block-level?",
              options: ["<span>", "<div>", "<em>", "<strong>"],
              correctAnswer: "<div>",
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ element is inline.",
              correctAnswer: "<span>",
            },
            {
              type: "mcq",
              question: "What is a common use for <div>?",
              options: [
                "Grouping content",
                "Creating links",
                "Playing audio",
                "Formatting text",
              ],
              correctAnswer: "Grouping content",
            },
            {
              type: "mcq",
              question: "Why should you use semantic tags?",
              options: [
                "For better SEO and accessibility",
                "To make code longer",
                "They look nicer",
                "Browsers require them",
              ],
              correctAnswer: "For better SEO and accessibility",
            },
            {
              type: "fill",
              question: "Fill in the blank: Always add ____ text to images for accessibility.",
              correctAnswer: "alt",
            },
            {
              type: "mcq",
              question: "Why indent nested elements?",
              options: [
                "Improves readability",
                "Required by browsers",
                "Adds styling",
                "Increases performance",
              ],
              correctAnswer: "Improves readability",
            },
          ],
        },
      ],
    },
  ],
};

export default function HtmlCoursePage() {

  return (
    <div>
    <CoursePlayer courseId="html" courseData={htmlCourseData}/> 
    {/* <HtmlCourseContent /> */}
    </div>
  );
}

// export default function HtmlCoursePage() {
//   return (
//     <div>
//       <HtmlCourseContent />
//     </div>
//   );
// }