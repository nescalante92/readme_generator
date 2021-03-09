const inquirer = require('inquirer');
const fs = require('fs');
//README template
function generateReadme(answers) {
    let badgeURL = "";
    let licenseURL = "";
    console.log(answers.license);
    if (answers.license === "Apache 2.0 Licence") {
        badgeURL =  "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
        licenseURL = "https://opensource.org/licenses/Apache-2.0" 

    } else if (answers.license === "Boost 1.0 Licence") {
        badgeURL = "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg"
        licenseURL = "https://www.boost.org/LICENSE_1_0.txt"

    } else if (answers.license === "BSD 3-Clause Licence") {
        badgeURL = "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg"
        licenseURL = "https://opensource.org/licenses/BSD-3-Clause"

    } else if (answers.license === "MIT Licence") {
        badgeURL = "https://img.shields.io/badge/License-MIT-yellow.svg"
        licenseURL ="https://opensource.org/licenses/MIT"
    }
    return `# ${answers.title}

--------------------
## Licence

[![License](${badgeURL})](${licenseURL})
----------------------

## Table of Content 

* [Description](#description)
* [Install](#install)
* [Instruction](#instruction)
* [Usage](#usage)
* [Licence](#licence)
* [Contribution](#contribution)
* [Questions](#questions)
* [Github](#github)
* [email](#email)
    
-----------------------------
    
## Description
${answers.description}

------------------------------
    
# Install
${answers.install}

------------------------------
    
### Instruction
${answers.instruction}

------------------------------
    
## Usage
${answers.usage}

---------------------------

## Contribution
${answers.contribution}

---------------------------
   
## Questions
${answers.questions}

-------------------------------
    
# Contact 
## Github : ${answers.github}
## Email : ${answers.email}`;
}


inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please describe your project.",
        name: "description",
    },
    {
        type: "input",
        message: "How do you install your application?",
        name: "install",
    },
    {
        type: "input",
        message: "What are the instructions to follow for installation?",
        name: "instruction",
    },
    {
        type: "input",
        message: "How to use your application?",
        name: "usage",
    },
    {
        type: "list",
        message: "What licences were used?",
        name: "license",
        choices: ["Apache 2.0 Licence", "Boost 1.0 Licence", "BSD 3-Clause Licence", "MIT Licence", "N/A"],
    },
    {
        type: "input",
        message: "Are there any contributions?",
        name: "contribution",
    },
    {
        type: "input",
        message: "Do you have any tests or questions to add?",
        name: "questions",
    },
    {
        type: "input",
        message: "What is your Github account?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
]) //README template function
    .then((answers) => {
        // console.log(answers)
        const response = generateReadme(answers);
        // console.log(response);
        fs.writeFile(`README.md`, generateReadme(answers), (err) => {
            err ? console.error(err) : console.log("Thank You! Your new README file is generated.")
        });
    })

