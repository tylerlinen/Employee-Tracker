const connection = require("./connection")

class DB {
    constructor(connection) {
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }

    findAllDepartments() {
        return this.connection.query("SELECT * FROM department")
    }
    findAllRoles() {
        return this.connection.query("SELECT * FROM Role")
    }
    addEmployee(first_name, last_name, role_id) {
        return this.connection.query("INSERT INTO employee SET ?", {
            first_name: first_name,
            last_name: last_name,
            role_id: role_id
        })
    }
    addRole(title, salary, department_id) {
        return this.connection.query("INSERT INTO role SET ?", {
          title: title,
          salary: salary,
          department_id: department_id
        })
      }
      addDepartment(department_name) {
        return this.connection.query("INSERT INTO department SET ?", {
          department_name: department_name
        })
      }
    
}

module.exports = new DB(connection);