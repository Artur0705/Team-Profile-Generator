const { Engineer } = require("./../lib/constructors.js");

test("add Engineer", () => {
  const engineer = new Engineer(
    "EngineerName",
    3,
    "engineer.name@gmail.com",
    "engineer_name"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

test("get Engineer github", () => {
  const engineer = new Engineer(
    "EngineerName",
    3,
    "engineer.name@gmail.com",
    "engineer_name"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("get role", () => {
  const engineer = new Engineer(
    "EngineerName",
    90,
    "engineer.name@gmail.com",
    "engineer_name"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
