const Manager = require("../lib/Manager");


test("Can get office number via constructor", () => {
  const testValue = "OfficeNumber";
  const m = new Manager("Foo", 1, "test@test.com", testValue);
  expect(m.officeNumber).toBe(testValue);
    });

  
test("Can get office number via getOfficeNumber()", () => {
      const testValue = "getOfficeNumber";
      const m = new Manager("Foo", 1, "test@test.com", testValue);
      expect(m.getOfficeNumber()).toBe(testValue);
    });
    
test("getRole() should return \"Manager\"", () => {
        const testValue = "Manager";
        const m = new Manager("Foo", 1, "test@test.com", "role");
        expect(m.getRole()).toBe(testValue);
    });