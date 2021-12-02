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

        type: 'list',
        message: 'Choose your license.',
        choices: ['GNU LGPLv3', 'APACHE 2.0', 'MPL 2.0', 'unlicensed'],
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

    {
        input: 'input',
        message: 'Enter contribution requirements if applicable.',
        name: 'contribution',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`${fileName}`, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {

            writeToFile('README.md', generateMarkdown(data))
        })

}

// Function call to initialize app
init();
