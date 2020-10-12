DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABlE department (
    id INT AUTO_INCREMENT,
    department_name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT ,
title VARCHAR (30),
salary DECIMAL(10,4),
department_id INT,
PRIMARY KEY (id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABlE employee (
id INT NOT NULL auto_increment,
first_name VARCHAR (30),
last_name VARCHAR(30),
role_id INT(30) NOT NULL,
manager_id INT(30),
PRIMARY KEY (id)
FOREIGN KEY(role_id) REFERENCES role(id)
);

