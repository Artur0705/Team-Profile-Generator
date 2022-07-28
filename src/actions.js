// Packages needed for this application
const inquirer = require("inquirer");

// Arrays of questions for actions
const { managerQuestions, employeeQuestions } = require("./questions");

//Constructors
const { Manager, Engineer, Intern } = require("./../lib/constructors");

function addManager() {
  return inquirer
    .prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
      return [new Manager(name, id, email, officeNumber)];
    });
}

function addEmployee(teamProfileData) {
  return inquirer.prompt(employeeQuestions).then((data) => {
    let { name, id, email, role, github, school, addNewEmployee } = data;

    switch (role) {
      case "Engineer":
        teamProfileData.push(new Engineer(name, id, email, github));
        break;
      case "Intern":
        teamProfileData.push(new Intern(name, id, email, school));
        break;
    }

    if (addNewEmployee) return addEmployee(teamProfileData);
    else return teamProfileData;
  });
}

module.exports = {
  addManager,
  addEmployee,
};
