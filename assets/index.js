const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'what is your github name:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email:',
  },
  {
    type: 'input',
    name: 'title',
    message: "what is your project:",
  },
  {
    type: 'input',
    name: 'description',
    message: 'write a description of your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'which license do you want to use:',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'what command should be run to install dependencies:',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'what command should be used to run tests:',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'what does user need to know about using the repo:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'what does the user need to know about contributing to repo:',
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();
