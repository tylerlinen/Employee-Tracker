var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",


    port: 3306,


    user: "root",


    password: "Pepper202532",
    database: "tracker_db"
});

connection.connect(function (err, res) {
    if (err) throw err;
    console.log("running")
});

function runSearch() {
    inquirer
        .prompt({
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

function viewEmployee() {
    var query = "SELECT first_name, last_name, title, name, salary  FROM newTable";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
        runSearch();
    });
}

function viewDepartment() {
    var query = "SELECT name FROM newTable";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
        runSearch();
    });
}
function viewRoles() {
    var query = "SELECT title FROM newTable";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
        runSearch();
    });
}

function addEmployee() {
    inquirer
        .prompt({
            name: "action",
            type: "Input",
            message: "Enter first name",
        })
        .then(function (answer) {
            var query = "INSERT INTO newTable (first_name)"
            answer.query(query, function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log(res[i]);
                }
            })

        });
}

