CREATE DATABASE tracker_db;
USE tracker_db;

CREATE TABlE department (
    id INT AUTO_INCREMENT,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABLE Role (
id INT NOT NULL AUTO_INCREMENT ,
title VARCHAR (30),
salary DECIMAL(10,4),
department_id INT,
PRIMARY KEY (id)
);

CREATE TABlE employee (
id INT NOT NULL auto_increment,
first_name VARCHAR (30),
last_name VARCHAR(30),
role_id INT(30) NOT NULL,
manager_id INT(30),
PRIMARY KEY (id)
);

ALTER TABLE employee
ADD FOREIGN KEY (manager_id) REFERENCES role(department_id);