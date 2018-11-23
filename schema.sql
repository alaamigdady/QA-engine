CREATE DATABASE expenses_Tracker;

USE expenses_Tracker;

CREATE TABLE logs  (
  	type varchar(20) NOT NULL,
  	amount INT NOT NULL,
  	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);








/*  Execute this file from the command line by typing:
 *    source schema.sql
 *  to create the database and the tables.*/



