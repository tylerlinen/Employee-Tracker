const connection = require("./connection")

class DB {
    constructor(connection){
        this.connection = connection
    }

    findAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }

    findAllDepartments(){
        return this.connection.query("SELECT * FROM department")
    }
    findAllRoles(){
        return this.connection.query("SELECT * FROM Role")
    }
    addEmployee(){
        return this.connection.query("INSERT INTO employee (first_name, last_name, role_id) VALUES (?,?,?)")
        
    }
}

module.exports = new DB(connection);