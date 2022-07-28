const { Employee } = require("./../lib/constructors.js");

test("add employee", () => {
  const employee = new Employee("EmployeeName", 1, "employee.name@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("get employee name", () => {
  const employee = new Employee("EmployeeName", 1, "employee.name@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("get employee id", () => {
  const employee = new Employee("EmployeeName", 1, "employee.name@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("get employee email", () => {
  const employee = new Employee("EmployeeName", 1, "employee.name@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});
