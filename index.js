// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project?",
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install dependencies from the package.JSON?",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this REPO?",
    },
    {
        type: "input",
        name: "contribution",
        message: "How do people contribute to this REPO?",
    },
    {
        type: "list",
        name: "license",
        message: "Which license do you want to use?",
        choices: ["MIT", "GPLv2", "Apache", "None"],
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github user name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "test",
        message: "How do you run tests?",
        default: "npm test"
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
