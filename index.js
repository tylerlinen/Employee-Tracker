var mysql = require("mysql");
const DB = require("./db/db");
const { printTable } = require("console-table-printer");
const { prompt } = require("inquirer");


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
            "Update employee roles",
            "Delete employee"
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
                    addRole();
                    break;

                case "Update employee roles":
                    updateEmployeeRole();
                    break;

                case "Delete employee":
                    deleteEmployee();
                    break;
            }

        });
}
runSearch();

async function viewEmployee() {
    const employees = await DB.findAllEmployees();
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
}

async function addEmployee() {
    const roles = await DB.findAllRoles();

    const rolesChoices = roles.map(({ id, title }) => ({
        name: title,
        value: id
    }));
    prompt([{
        name: "firstName",
        type: "Input",
        message: "Enter first name",
    }, {
        name: "lastName",
        type: "Input",
        message: "Enter last name",
    }, {
        name: "roleID",
        type: "list",
        message: "Choose the employees role",
        choices: rolesChoices
    }
    ])
        .then((answers) => {
            DB.addEmployee(answers.firstName, answers.lastName, answers.roleID).then(
                function (response) {
                    console.log(response);
                    runSearch()
                }
            );
        });
};

async function addRole() {
    const departments = await DB.findAllDepartments();

    const departmentChoices = departments.map(({ id, department_name }) => ({
        name: department_name,
        value: id
    }));
    prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the title for this role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this position?',
            validate: (answer) => {
                const pass = answer.match(/^[1-9]\d*$/);
                if (pass) {
                    return true;
                }
                return 'Please enter a positive number greater than zero.';
            },
        },
        {
            type: 'list',
            name: 'departmentID',
            message: 'Which department is assigned this position',
            choices: departmentChoices
        },
    ])
        .then((answers) => {
            DB.addRole(answers.title, answers.salary, answers.departmentID).then(
                function (response) {
                    console.log(response);
                    runSearch()
                }
            );
        });
};
async function addDepartment() {
    prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is the department you would like to add',
        }
    ])
        .then((answers) => {
            DB.addDepartment(answers.title).then(
                function (response) {
                    console.log(response);
                    runSearch()
                }
            );
        });
};
async function updateEmployeeRole() {
    const employees = await DB.findAllEmployees();
    const employeeArray = employees.map(({ id, first_name, last_name }) => (
        {
            name: `${first_name} ${last_name}`,
            value: id

        }))

    const { employee_id } = await prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Which employee would you like to promote',
            choices: employeeArray
        }
    ])

    const roles = await DB.findAllRoles();
    const rolesArray = roles.map(({id, title}) => ({
        name: title,
        value: id
    }));
    const { role_id } = await prompt([
        {
            type: 'list',
            name: 'role_id',
            message: 'Which role would you like to assign to this employee',
            choices: rolesArray
        }
    ])


    await DB.updateEmployeeRole(employee_id, role_id);
    runSearch()
};

async function deleteEmployee() {
    const employees = await DB.findAllEmployees();
    const employeeArray = employees.map(({ id, first_name, last_name }) => (
        {
            name: `${first_name} ${last_name}`,
            value: id

        }))

    const { employee_id } = await prompt([
        {
            type: 'list',
            name: 'employee_id',
            message: 'Which employee would you like to delete',
            choices: employeeArray
        }
    ])

    await DB.deleteEmployee(employee_id);
    viewEmployee();
}

