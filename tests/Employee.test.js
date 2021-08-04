const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");


test("Can get name via constructor", () => {
  const testValue = "name";
  const e = new Employee(testValue, 1, "test@test.com");
  expect(e.getName()).toBe(testValue);
    });

test("Can get Id number via getId()", () => {
      const testValue = "id";
      const e = new Employee("Foo", testValue, "test@test.com");
      expect(e.getId()).toBe(testValue);
    });
    
test("Can get email via getEmail()", () => {
        const testValue = "email";
        const e = new Employee("Foo", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });

test("getRole() should return \"Employee\"", () => {
        const testValue = "Employee";
        const e = new Employee("Foo", 1, "test@test.com", "role");
        expect(e.getRole()).toBe(testValue);
    });