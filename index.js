const fs = require('fs');
const newHtml = require('./newHtml.js');
const inquirer = require('inquirer');

// global array
const employeesArray = [];

// classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const main = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'employeeType',
      message: "What type of employee do you want to add?",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "None. I'm done adding employees"
      ]
    }
  ])
    .then((response) => {
      if (response.employeeType == 'Manager') {
        createManager()
      }
      else if (response.employeeType == 'Engineer') {
        createEngineer()
      }
      else if (response.employeeType == 'Intern') {
        createIntern()
      }
      else {
        generateHTMLTeam()
      }
    })
}


const createManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the manager's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's id?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email?"
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?"
    }
  ])
  .then((response) => {
    const newManager = new Manager(response.name, response.id, response.email, response.officeNumber);
    employeesArray.push(newManager);
    main()
  })
}

const createEngineer = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the engineer's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the engineer's id?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the engineer's email?"
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's Github?"
    }
  ])
  .then((response) => {
    const newEngineer = new Engineer(response.name, response.id, response.email, response.github);
    employeesArray.push(newEngineer);
    main();
  })
}


const createIntern = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: "What is the intern's name?"
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the intern's id?"
    },
    {
      type: 'input',
      name: 'email',
      message: "What is the intern's email?"
    },
    {
      type: 'input',
      name: 'school',
      message: "What school does/did the intern attend?"
    }
  ])
  .then((response) => {
      const newIntern = new Intern(response.name, response.id, response.email, response.school)
      // console.log(newManager.getOfficeNumber());
      // console.log(newManager.getRole())
      employeesArray.push(newIntern);

      main();

    })
}

const generateHTMLTeam = () => {
  let myHtml = newHtml(employeesArray)

  console.log(myHtml)

  fs.writeFile('./dist/index.html', myHtml, function (err) {
    if (err) console.log(err)
  })
};


main();
