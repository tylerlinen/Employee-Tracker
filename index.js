var mysql = require("mysql");
const DB = require("./db/db");
const { printTable } = require("console-table-printer");
const { prompt } =  require("inquirer");


function runSearch() {
        prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add employees",
                "Add departments",
                "Add roles",
                "Update employee roles"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View all employees":
                    viewEmployee();
                    break;

                case "View all departments":
                    viewDepartment();
                    break;

                case "View all roles":
                    viewRoles();
                    break;

                case "Add employees":
                    addEmployee();
                    break;

                case "Add departments":
                    addDepartment();
                    break;

                case "Add roles":
                    addRoles();
                    break;

                case "Update employee roles":
                    updateEmployee();
                    break;
            }

        });
}
runSearch();

async function viewEmployee() {
   const employees =  await DB.findAllEmployees();
   printTable(employees)
   runSearch();
}

async function viewDepartment() {
   const departments = await DB.findAllDepartments();
        printTable(departments)
        runSearch();
  
}
async function viewRoles() {
    const roles = await DB.findAllRoles();
         printTable(roles)
         runSearch();

async function addEmployee() {
   prompt([{
            name: "firstName",
            type: "Input",
            message: "Enter first name",
        },
    ])
        .then(function (answer) {
            var query = "INSERT INTO newTable (first_name)"
            answer.query(query, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log(res[i]);
                }
            })

        });
}

