DROP DATABASE MMS;
CREATE DATABASE MMS;
USE MMS;

CREATE TABLE Multiplex(
multiplex_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
multiplex_name VARCHAR(255) NOT NULL, 
password VARCHAR(255) NOT NULL,
no_screens INT,
tax_rate FLOAT);

CREATE TABLE MultiplexContacts(
multiplex_id INT NOT NULL,
contact_no BIGINT NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES Multiplex(multiplex_id));

CREATE TABLE MultiplexAddresses(
multiplex_id INT NOT NULL,
address_line1 VARCHAR(255) NOT NULL,
address_line2 VARCHAR(255) NOT NULL,
city VARCHAR(127) NOT NULL,
State VARCHAR(127) NOT NULL,
Country VARCHAR(127) NOT NULL,
PIN INT NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES Multiplex(multiplex_id));

CREATE TABLE MultiplexEmails(
multiplex_id INT NOT NULL,
email VARCHAR(255) NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES Multiplex(multiplex_id));

CREATE TABLE Employees(
emp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- password VARCHAR(255) NOT NULL,
-- multiplex_id VARCHAR(255) NOT NULL,
emp_name VARCHAR(255),
gender VARCHAR(31),
designation VARCHAR(255),
contact_id INT NOT NULL UNIQUE,
salary INT NOT NULL,
address VARCHAR(255) NOT NULL);
-- email VARCHAR(255) NOT NULL UNIQUE);

CREATE TABLE EmployeeContacts(
emp_id INT NOT NULL,
contact_no BIGINT NOT NULL,
FOREIGN KEY (emp_id) REFERENCES Employees(emp_id));

CREATE TABLE EmployeeAddresses(
emp_id INT NOT NULL,
address_line1 VARCHAR(255) NOT NULL,
address_line2 VARCHAR(255) NOT NULL,
city VARCHAR(127) NOT NULL,
State VARCHAR(127) NOT NULL,
Country VARCHAR(127) NOT NULL,
PIN VARCHAR(16) NOT NULL,
FOREIGN KEY (emp_id) REFERENCES Employees(emp_id));

CREATE TABLE Administrator(
admin_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
password VARCHAR(255) NOT NULL,
multiplex_id INT NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE,
FOREIGN KEY (multiplex_id) REFERENCES Multiplex(multiplex_id));

CREATE TABLE AdminContacts(
admin_id INT NOT NULL,
contact_no BIGINT NOT NULL,
FOREIGN KEY (admin_id) REFERENCES Administrator(admin_id));

CREATE TABLE movie(
movie_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
movie_name VARCHAR(255) NOT NULL,
director VARCHAR(127) NOT NULL,
duration INT NOT NULL,
release_date DATE NOT NULL,
genre VARCHAR(127) NOT NULL,
language VARCHAR(63) NOT NULL,
subtitle VARCHAR(63) NOT NULL,
actors VARCHAR(255) NOT NULL,
synopsis TEXT(255) NOT NULL,
poster MEDIUMBLOB NOT NULL,
distributor VARCHAR(255) NOT NULL);

CREATE TABLE screen(
screen_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
screen_no INT NOT NULL,
multiplex_id INT NOT NULL,
total_seats INT NOT NULL,
no_of_rows INT NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES Multiplex(multiplex_id));

CREATE TABLE class(
class_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
class_name VARCHAR(63) NOT NULL,
ticket_price INT NOT NULL);

CREATE TABLE screen_shape(
screenShape_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
screen_id INT NOT NULL,
class_id INT NOT NULL,
no_of_seats_left INT NOT NULL,
no_of_seats_middle INT NOT NULL,
no_of_seats_right INT NOT NULL,
FOREIGN KEY (screen_id) REFERENCES screen(screen_id),
FOREIGN KEY (class_id) REFERENCES class(class_id));



CREATE TABLE shows(
show_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
screen_id INT NOT NULL,
movie_id INT NOT NULL,
start_time TIME NOT NULL,
FOREIGN KEY (screen_id) REFERENCES screen(screen_id),
FOREIGN KEY (movie_id) REFERENCES movie(movie_id));

CREATE TABLE Ticket(
ticket_no BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
show_id INT NOT NULL,
no_seats INT NOT NULL,
total_price INT NOT NULL,
ticket_day DATE NOT NULL,
booking_day DATE NOT NULL,
paid BOOL,
cancelled BOOL,
FOREIGN KEY (show_id) REFERENCES shows(show_id));

CREATE TABLE seatNums(
ticket_no BIGINT NOT NULL,
screenShape_id INT NOT NULL,
seat_no BIT NOT NULL,
FOREIGN KEY (ticket_no) REFERENCES Ticket(ticket_no),
FOREIGN KEY (screenShape_id) REFERENCES screen_shape(screenShape_id));

CREATE TABLE customer(
username VARCHAR(127) NOT NULL PRIMARY KEY,
password VARCHAR(255) NOT NULL,
c_name VARCHAR(255) NOT NULL,
email VARCHAR(255),
contact_no BIGINT NOT NULL UNIQUE);

CREATE TABLE CustomerTicketRef(
username VARCHAR(127),
ticket_no BIGINT NOT NULL UNIQUE,
FOREIGN KEY (ticket_no) REFERENCES Ticket(ticket_no),
FOREIGN KEY (username) REFERENCES customer(username));

CREATE TABLE EmpTicketRef(
emp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
ticket_no BIGINT NOT NULL UNIQUE,
FOREIGN KEY (ticket_no) REFERENCES Ticket(ticket_no),
FOREIGN KEY (emp_id) REFERENCES Employees(emp_id));

CREATE TABLE BookedSeats(
show_id INT NOT NULL,
booking_date DATE NOT NULL,
seat_no BIT NOT NULL,
screenShape_id INT NOT NULL,
PRIMARY KEY (show_id, booking_date, seat_no, screenShape_id));

-- SHOW TABLES; 

INSERT INTO Multiplex
VALUES (1, 'Ilox', 'qwer1234', 5, 20),
(2, 'BVR', 'qwer1234', 2, 20),
(3, 'WorldX Cinema', 'qwer1234', 7, 20);

INSERT INTO MultiplexContacts
VALUES (1, 9999999991),
(1, 9999999992),
(1, 9999999990),
(2, 9999999993),
(2, 9999999994),
(2, 9999999995),
(3, 9999999996),
(3, 9999999997),
(3, 9999999998);

INSERT INTO MultiplexAddresses
VALUES (1, '2nd Floor, Sobha City Mall', 'Puzhakal', 'Thrissur', 'Kerala', 'India', 680553),
(2, 'Lulu Mall', 'Edapally', 'Kochi', 'Kerala', 'India', 682024),
(3, 'S-16 V3S Mall, Vikas Marg', 'Laxmi Nagar', 'New Delhi', 'Delhi', 'India', 110092);

INSERT INTO MultiplexEmails
VALUES (1, 'aaaaaa@gmail.com'),
(1, 'aaaab@gmail.com'),
(1, 'aaaac@gmail.com'),
(2, 'aaaba@gmail.com'),
(2, 'aaabb@gmail.com'),
(2, 'aaabc@gmail.com'),
(3, 'aaaca@gmail.com'),
(3, 'aaacb@gmail.com'),
(3, 'aaacc@gmail.com');

INSERT INTO Employees (emp_name, designation, salary, contact_id, address)
VALUES ('Raj Varkey', 'Manager', 30000, 1, 'Shanti Vihar, Ashok Nagar');

INSERT INTO EmployeeContacts
VALUES (1, 8888888880),
(1, 8888888881);

INSERT INTO customer
VALUES ('vava', 'qwerty123', 'Suresh', 'rajavemabala@gmail.com', '7777777770'),
('srkrox', 'qwerty123', 'Rahul', 'rilovesharukh@gmail.com', '7777777771'),
('danichechiuyir', 'qwerty123', 'Senthil', 'danifan@gmail.com', '7777777772');

INSERT INTO movie (movie_name, director, duration, release_date, genre, language, subtitle, actors, synopsis, poster, distributor)
VALUES ('Joker', 'Todd Phillips', 122, '2019-10-01',
'Crime, Drama, Thriller ', 'English', 'English',
'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
LOAD_FILE('/var/lib/mysql-files/images/1.jpg'),
'Warner Bros. Pictures');

-- #4+2*8+3*8+2*8
INSERT INTO screen(screen_no, multiplex_id, total_seats, no_of_rows)
VALUES (1, 1, 60, 8);


INSERT INTO class(class_name, ticket_price)
VALUES ('Lounge', 400),
('Platinum', 280),
('Gold', 240),
('Silver', 200);

INSERT INTO screen_shape(screen_id, class_id, no_of_seats_left, no_of_seats_middle, no_of_seats_right)
VALUES (1, 1, 2, 0, 2),
(1, 2, 4, 0, 4),
(1, 2, 4, 0, 4),
(1, 3, 4, 0, 4),
(1, 3, 4, 0, 4),
(1, 3, 4, 0, 4),
(1, 4, 4, 0, 4),
(1, 4, 4, 0, 4);

INSERT INTO shows(screen_id, movie_id, start_time)
VALUES (1, 1, 100000),
(1, 1, 130000),
(1, 1, 180000),
(1, 1, 210000);

Select * from movie;