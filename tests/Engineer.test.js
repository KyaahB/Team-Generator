// Engineer test
// const { expect } = require('@jest/globals')
// const Engineer = require('./lib/Engineer.js')

// describe('Engineer', () => {  
//     it('should return questions specifically for the engineer', () => {
//         const obj = new ()
//       expect('employeeType' in obj).toEqual(E)

// //     })})

//     const Engineer = require("./lib/Engineer");

// test("Can set GitHub account via constructor", () => {
//   const testValue = "github";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.github).toBe(testValue);
// });

// // test("getRole() should return \"Engineer\"", () => {
//   const testValue = "Engineer";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get GitHub username via getGithub()", () => {
//   const testValue = "GitHubUser";
//   const e = new Engineer("Foo", 1, "test@test.com", testValue);
//   expect(e.getGithub()).toBe(testValue);
// });

const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "github";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "github");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "github-user";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
 
// MY T.A Pat Corcoran provided me with help and some code to help run my tests.