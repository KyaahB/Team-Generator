# Team profile Genrator/ Html Generator

## Description

I've created a Node.js app that allows you to input information and returns it to generate an HTML page. I've also written a series of tests to check my code and return passing test reports to make sure everything is correct and working the way it needs to.


## User Story

AS a Developer
WHEN I approach the command line for my app and input Node 'index.js'
THEN I am prompted with a series of questions that will create my team
WHEN prompted to choose 'employee' type, you will either choose (Manager, Intern or Engineer) which will direct you to a specific set of questions related to the employee you chose.
THEN you will be presented with more questions about your employees to build your team.
WHEN the questions are all answered you will be prompted again which will allow you to add more employees or none. If an employee type is selected then the question process will start over again to create your new employee. If none are chosen, the HTML will generate.


## App Walkthrough

Each employee is generated using a total of 4 questions. All being the same except for one which will be specific to the job title. Each share 3 simple questions regarding the employees (Name, ID #, and Email). The info needed for the additional job role specific question is listed below:

- Engineer(Github Account (a link is best))

- Intern(School(whether attended in the past or present, most recent is best))

- Manager(Office Number)

 


# Resources


[Jest](https://www.npmjs.com/package/jest) : Sourced to run tests on the code.
[Inquirer](https://www.npmjs.com/package/inquirer) : Sourced to download modules and code used to run inquirer.

## Video Link

I've included a link to a quick video tutorial that goes through the steps(((((()))))) to make this app work.((((((()))))))