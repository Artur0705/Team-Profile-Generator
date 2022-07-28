class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  getRole() {
    return this.role;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
    this.role = "Engineer";
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return this.role;
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);

    this.school = school;
    this.role = "Intern";
  }

  getSchool() {
    return this.school;
  }
  getRole() {
    return this.role;
  }
}

module.exports = {
  Employee,
  Manager,
  Engineer,
  Intern,
};
