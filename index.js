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
function viewEmployee(answer){
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { artist: answer.artist }, function (err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
            }
            runSearch();
    });
}