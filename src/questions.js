const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Who is the manager of this team",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("please enter the manager name!");
                return false;
            }
        },
    },

    {
        type: "input",
        name: "id",
        message: "Please enter the manager's ID",
        validate: (nameInput) => {
            if (isNaN(nameInput)) {
                console.log("Please enter the manager's ID!");
                return false;
            } else {
                return true;
            }
        },

    },

    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email.",
        validate: (email) => {
            if (emailRegexp.test(email)) {
                return true;
            } else {
                console.log("Please enter an email");
                return false;
            }
        },
    },

    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (nameInput) => {
            if (isNaN(nameInput)) {
                console.log("Please enter an office number!");
                return false;
            } else {
                return true;
            }
        },
    },
  ];