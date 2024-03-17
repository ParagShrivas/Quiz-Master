//demo questions
let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "A. Cascading Style Sheet",
        options: [
            "A. Cascading Style Sheet",
            "B. Cute Style Sheet",
            "C. Computer Style Sheet",
            "D. Code Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "A. Hypertext Preprocessor",
        options: [
            "A. Hypertext Preprocessor",
            "B. Hometext Programming",
            "C. Hypertext Preprogramming",
            "D. Programming Hypertext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "D. Structured Query Language",
        options: [
            "A. Strength Query Language",
            "B. Stylesheet Query Language",
            "C. Science Question Language",
            "D. Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "D. Extensible Markup Language",
        options: [
            "A. Excellent Multiple Language",
            "B. Explore Multiple Language",
            "C. Extra Markup Language",
            "D. Extensible Markup Language"
        ]
    }
];

//html questions
let html_questions = [
    {
        numb: 1,
        question: "What is the correct HTML tag for inserting a line break?",
        answer: "B. br",
        options: [
            "A. break",
            "B. br",
            "C. lb",
            "D. newline"
        ]
    },
    {
        numb: 2,
        question: "Which attribute is used to specify an alternate text for an image, if the image cannot be displayed?",
        answer: "A. alt",
        options: [
            "A. alt",
            "B. title",
            "C. src",
            "D. image-alt"
        ]
    },
    {
        numb: 3,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },
    {
        numb: 4,
        question: "Which tag is used to define an unordered list in HTML?",
        answer: "C. ul",
        options: [
            "A. ol",
            "B. list",
            "C. ul",
            "D. li"
        ]
    },
    {
        numb: 5,
        question: "Which HTML element is used to define important text?",
        answer: "B. strong",
        options: [
            "A. bold",
            "B. strong",
            "C. important",
            "D. em"
        ]
    }
];

//css questions
let css_questions = [
    {
        numb: 1,
        question: "What is the correct CSS syntax to change the text color of an element with the class 'highlight' to red?",
        answer: "B..highlight { color: red; }",
        options: [
            "A..highlight { text-color: red; }",
            "B..highlight { color: red; }",
            "C.#highlight { text-color: red; }",
            "D.#highlight { color: red; }"
        ]
    },
    {
        numb: 2,
        question: "Which CSS property is used to control the spacing between lines of text within an element?",
        answer: "A. line-height",
        options: [
            "A. line-height",
            "B. text-spacing",
            "C. letter-spacing",
            "D. word-spacing"
        ]
    },
    {
        numb: 3,
        question: "What is the correct CSS syntax to select all <p> elements with the class 'intro'?",
        answer: "A. p.intro { }",
        options: [
            "A. p.intro { }",
            "B. .intro p { }",
            "C. .intro { }",
            "D. #intro p { }"
        ]
    },
    {
        numb: 4,
        question: "Which CSS property is used to control the size of an element's font?",
        answer: "B. font-size",
        options: [
            "A. font-style",
            "B. font-size",
            "C. text-size",
            "D. size"
        ]
    },
    {
        numb: 5,
        question: "What is the correct CSS syntax to make a background image cover the entire element without repeating?",
        answer: "C. background-size: cover;",
        options: [
            "A. background: cover;",
            "B. background-repeat: none;",
            "C. background-size: cover",
            "D. background-type: cover"
        ]
    }
];

//js questions
let js_questions = [
    {
        numb: 1,
        question: "Which of the following statements about JavaScript variables is true?",
        answer: "B. Variables declared with `let` keyword have function scope.",
        options: [
            "A. Variables declared with `var` keyword have block scope.",
            "B. Variables declared with `let` keyword have function scope.",
            "C. Variables declared with `const` keyword can be reassigned.",
            "D. Variables declared with `var` keyword are block-scoped."
        ]
    },
    {
        numb: 2,
        question: "What does the `===` operator do in JavaScript?",
        answer: "A. Compares two values for equality without type conversion.",
        options: [
            "A. Compares two values for equality without type conversion.",
            "B. Assigns a value to a variable.",
            "C. Compares two values for equality with type conversion.",
            "D. Checks if a value is greater than or equal to another value."
        ]
    },
    {
        numb: 3,
        question: "Which of the following is NOT a valid way to declare a function in JavaScript?",
        answer: "D. myFunction: function() {}",
        options: [
            "A. function myFunction() {}",
            "B. let myFunction = function() {}",
            "C. const myFunction = () => {}",
            "D. myFunction: function() {}"
        ]
    },
    {
        numb: 4,
        question: "What will be the output of the following code snippet?"
            `const a = [1, 2, 3];
           const b = [...a];
           a.push(4);
           console.log(b);`,
        answer: "A. [1, 2, 3]",
        options: [
            "A. [1, 2, 3]",
            "B. [1, 2, 3, 4]",
            "C. [1, 2, 3, 4, 4]",
            "D. Error"
        ]
    },
    {
        numb: 5,
        question: "Which of the following is used to handle asynchronous operations in JavaScript?",
        answer: "D. then",
        options: [
            "A. await",
            "B. sync",
            "C. defer",
            "D. then"
        ]
    }
];

//java questions
let java_questions = [
    {
        numb: 1,
        question: "What is the output of the following code snippet?"
            `int x = 5;
         System.out.println(x++ + ++x);`,
        answer: "C. 12",
        options: [
            "A. 10",
            "B. 11",
            "C. 12",
            "D. 13"
        ]
    },
    {
        numb: 2,
        question: "Which keyword is used to prevent a method from being overridden in Java?",
        answer: "A. final",
        options: [
            "A. final",
            "B. static",
            "C. private",
            "D. abstract"
        ]
    },
    {
        numb: 3,
        question: "What is the default value of a boolean variable in Java?",
        answer: "B. false",
        options: [
            "A. true",
            "B. false",
            "C. null",
            "D. 0"
        ]
    },
    {
        numb: 4,
        question: "Which data structure uses LIFO (Last-In-First-Out) order?",
        answer: "C. Stack",
        options: [
            "A. Queue",
            "B. LinkedList",
            "C. Stack",
            "D. HashSet"
        ]
    },
    {
        numb: 5,
        question: "Which of the following statements is true about the `static` keyword in Java?",
        answer: "B. It can be used to declare methods that can't be overridden.",
        options: [
            "A. It can be used to access instance variables.",
            "B. It can be used to declare methods that can't be overridden.",
            "C. It can be used to initialize non-static variables.",
            "D. It can be used to create multiple instances of a class."
        ]
    }
];

//python questions
let python_questions = [
    {
        numb: 1,
        question: "What is the output of the following code snippet?"
            `python
        print(2 ** 3 ** 2)`,
        answer: "A. 512",
        options: [
            "A. 512",
            "B. 64",
            "C. 72",
            "D. 12"
        ]
    },
    {
        numb: 2,
        question: "What is the correct way to open a file named 'example.txt' for reading in Python?",
        answer: "B. file = open('example.txt', 'r')",
        options: [
            "A. file = open('example.txt', 'w')",
            "B. file = open('example.txt', 'r')",
            "C. file = open('example.txt', 'a')",
            "D. file = open('example.txt', 'b')"
        ]
    },
    {
        numb: 3,
        question: "What does the `pass` statement do in Python?",
        answer: "A. Executes nothing and acts as a placeholder.",
        options: [
            "A. Executes nothing and acts as a placeholder.",
            "B. Terminates the program execution.",
            "C. Raises an exception.",
            "D. Skips the current iteration of a loop."
        ]
    },
    {
        numb: 4,
        question: "Which of the following data types is immutable in Python?",
        answer: "D. Tuple",
        options: [
            "A. List",
            "B. Dictionary",
            "C. Set",
            "D. Tuple"
        ]
    },
    {
        numb: 5,
        question: "What is the output of the following code snippet?"
            `numbers = [1, 2, 3, 4, 5]
        print(numbers[::-1])`,
        answer: "A. [5, 4, 3, 2, 1]",
        options: [
            "A. [5, 4, 3, 2, 1]",
            "B. [1, 2, 3, 4, 5]",
            "C. [1, 2, 3, 4]",
            "D. [5, 4, 3, 2]"
        ]
    }
];

//c/c++ questions
let c_cpp_questions = [
    {
        numb: 1,
        question: "Which keyword is used in C and C++ to declare a pointer?",
        answer: "C. *",
        options: [
            "A. ptr",
            "B. ref",
            "C. *",
            "D. ->"
        ]
    },
    {
        numb: 2,
        question: "In C and C++, what is the purpose of the 'break' statement within a loop?",
        answer: "C. To exit the loop immediately",
        options: [
            "A. To continue to the next iteration of the loop",
            "B. To exit the program",
            "C. To exit the loop immediately",
            "D. To print a message"
        ]
    },
    {
        numb: 3,
        question: "Which of the following is NOT a valid data type in C and C++",
        answer: "B. unsigned float",
        options: [
            "A. long double",
            "B. unsigned float",
            "C. float",
            "D. double"
        ]
    },
    {
        numb: 4,
        question: "What does the 'sizeof' operator return in C and C++?",
        answer: "C. Size of the data type",
        options: [
            "A. Size of the pointer",
            "B. Size of the variable",
            "C. Size of the data type",
            "D. Size of the memory allocated"
        ]
    },
    {
        numb: 5,
        question: "In C and C++, what is the purpose of the 'const' qualifier when declaring a variable?",
        answer: "A. It specifies that the variable cannot be modified",
        options: [
            "A. It specifies that the variable cannot be modified",
            "B. It specifies that the variable is constant",
            "C. It specifies that the variable is dynamic",
            "D. It specifies that the variable is local"
        ]
    }
];

//SQL questions
let SQL_questions = [
    {
        numb: 1,
        question: "What does SQL stand for?",
        answer: "D. Structured Query Language",
        options: [
            "A. Strength Query Language",
            "B. Stylesheet Query Language",
            "C. Science Question Language",
            "D. Structured Query Language"
        ]
    },
    {
        numb: 2,
        question: "Which SQL keyword is used to retrieve data from a database?",
        answer: "B. SELECT",
        options: [
            "A. FETCH",
            "B. SELECT",
            "C. RETRIEVE",
            "D. GET"
        ]
    },
    {
        numb: 3,
        question: "What is the purpose of the SQL WHERE clause?",
        answer: "C. To filter rows based on a specified condition",
        options: [
            "A. To specify which columns to retrieve from a table",
            "B. To join multiple tables",
            "C. To filter rows based on a specified condition",
            "D. To order the result set"
        ]
    },
    {
        numb: 4,
        question: "What is the purpose of the SQL GROUP BY clause?",
        answer: "D. To perform aggregate functions on grouped data",
        options: [
            "A. To order the result set in ascending order",
            "B. To filter rows based on a specified condition",
            "C. To join multiple tables",
            "D. To perform aggregate functions on grouped data"
        ]
    },
    {
        numb: 5,
        question: "Which SQL statement is used to modify data in a database?",
        answer: "C. UPDATE",
        options: [
            "A. ALTER",
            "B. MODIFY",
            "C. UPDATE",
            "D. CHANGE"
        ]
    }
];