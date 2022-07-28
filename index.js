// Packages needed for this application
const fs = require("fs");

// Html template generator
const generateHtmlTemplate = require("./src/generateHTML");

// Actions
const { addManager, addEmployee } = require("./src/actions");

// Function to create html file
function createToFile(data) {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Youer team profile has bean generated");
    }
  });
}

// Initialize app
function init() {
  addManager()
    .then(addEmployee)
    .then((teamProfileData) => {
      createToFile(generateHtmlTemplate(teamProfileData));
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
