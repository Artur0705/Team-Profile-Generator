const { Intern } = require("./../lib/constructors.js");

test("add Intern", () => {
  const intern = new Intern(
    "InternName",
    4,
    "intern.name@gmail.com",
    "School for Intern"
  );

  expect(intern.school).toEqual(expect.any(String));
});

test("get Intern scholl", () => {
  const intern = new Intern(
    "InternName",
    4,
    "intern.name@gmail.com",
    "School for Intern"
  );

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("get role", () => {
  const intern = new Intern(
    "InternName",
    4,
    "intern.name@gmail.com",
    "School for Intern"
  );

  expect(intern.getRole()).toEqual("Intern");
});
