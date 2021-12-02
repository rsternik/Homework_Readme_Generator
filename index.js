// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        input: 'input',
        message: 'Enter project title',
        name: 'title',
    },

    {
        input: 'input',
        message: 'Enter project description',
        name: 'description',
    },

    {
        input: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
    },

    {
        input: 'input',
        message: 'Enter usage information',
        name: 'usage',
    },

    {

        type: "list",
        message: 'Choose your license.',
        choices: ["choice 1", "choice 2"],
        name: 'license'
    },

    {
        input: 'input',
        message: 'Enter github your username.',
        name: 'username',
    },

    {
        input: 'input',
        message: 'Enter your email address.',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
