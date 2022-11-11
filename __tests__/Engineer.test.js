const Engineer = require("../lib/EngineerClass");

test("Can create a github.", () => {
    const testGithub = "mncole98";
    const employeeInstance = new Engineer("Matt", 2, "mncole98@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "mncole98";
    const employeeInstance = new Engineer("Matt", 2, "mncole98@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Matt", 2, "mncole98@gmail.com", "mncole98");
    expect(employeeInstance.getRole()).toBe(returnValue);
});