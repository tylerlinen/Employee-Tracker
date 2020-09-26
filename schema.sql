CREATE DATABASE tracker_db;

USE tracker_db;

CREATE TABlE department (
    id INT NOT NULL,
    name VARCHAR (30),
    PRIMARY KEY (id)
);

CREATE TABlE role (
id INT NOT NULL,
title VARCHAR (30),
salary DECIMAL(10,4),
department_id INT(100)
PRIMARY KEY(id)
);

CREATE TABlE employee (
id INT NOT NULL,
first_name VARCHAR (30),
last_name VARCHAR(30),
role_id INT(30) NOT NULL,
manager_id INT(30)
PRIMARY KEY (id)
);


