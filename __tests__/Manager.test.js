const { Manager } = require("./../lib/constructors.js");

describe("Manager", () => {
  describe("add Manager", () => {
    it("should add manager card", () => {
      const manager = new Manager(
        "ManagerName",
        2,
        "manager.name@gmail.com",
        1
      );

      expect(manager.officeNumber).toEqual(expect.any(Number));
    });
  });
});

test("get role", () => {
  const manager = new Manager("ManagerName", 90, "manager.name@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});
