const Intern = require("../lib/Intern");

test("Can get school via constructor", () => {
  const testValue = "school";
  const i = new Intern("Foo", 1, "test@test.com", testValue);
  expect(i.school).toBe(testValue);
    });

  
test("Can get school via getSchool()", () => {
      const testValue = "getSchool";
      const i = new Intern("Foo", 1, "test@test.com", testValue);
      expect(i.getSchool()).toBe(testValue);
    });
    
test("getRole() should return \"Intern\"", () => {
        const testValue = "Intern";
        const i = new Intern("Foo", 1, "test@test.com", "role");
        expect(i.getRole()).toBe(testValue);
    });