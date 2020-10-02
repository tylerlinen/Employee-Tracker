INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES ("Joey","Maine","1",null);
INSERT INTO employee (first_name, last_name, role_id,manager_id) VALUES ("Steve","Washington","2","2");
INSERT INTO employee (first_name, last_name,role_id,manager_id) VALUES ("Dave","Jones","3",null); 
 
INSERT INTO role (title,salary,department_id) VALUES("Software Engineer", "100000","1");
INSERT INTO role (title,salary,department_id) VALUES ("Salesperson","50000","2");
INSERT INTO role (title,salary,department_id) VALUES ("Singer","90000","3");
 
INSERT INTO department (department_name) VALUES ("Engineer");
INSERT INTO department(department_name) VALUES ('Sales');
INSERT INTO department (department_name) VALUES ('Entertainment');
 

    Create Table newTable as (
SELECT
  department.id, employee.first_name, employee.last_name, role.title, department.department_name, role.salary, employee.manager_id
FROM role
  INNER JOIN department
    ON role.department_id = department.id
  INNER JOIN employee
    ON role.department_id = employee.role_id)