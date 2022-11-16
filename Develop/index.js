// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "userName"
    },
    {
        type: "input", 
        message: "What is your Email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the name of this project?",
        name: "title"
    },
    {
        type: "input", 
        message: "Describe the project in a few sentances:",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps required to install this project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide examples as to how this project can be used",
        name: "usage"
    },
    {
        type: "list",
        name: "license",
        message: "Choose which license you want your project to have.",
        choices: [
            "MIT",
            "Apache",
            "ISC",
            "None"
        ]
    },
    {
        type: "input",
        message: "What does the user need to know about contributing with this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What tests need to be run for this project?",
        name: "tests"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (error) {
        if (error) {
            return console.log(error)
        }
        console.log('victory!')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'READme.md';
        writeToFile(fileName, data)
    });
}

// Function call to initialize app
init();
