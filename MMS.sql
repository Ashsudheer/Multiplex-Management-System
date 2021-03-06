DROP DATABASE MMS;
CREATE DATABASE MMS;
USE MMS;

CREATE TABLE multiplex(
multiplex_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
multiplex_name VARCHAR(255) NOT NULL, 
password VARCHAR(255) NOT NULL,
no_screens INT,
tax_rate FLOAT);

CREATE TABLE multiplex_contacts(
multiplex_id INT NOT NULL,
contact_no BIGINT NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES multiplex(multiplex_id));

CREATE TABLE multiplex_addresses(
multiplex_id INT NOT NULL,
address_line1 VARCHAR(255) NOT NULL,
address_line2 VARCHAR(255) NOT NULL,
city VARCHAR(127) NOT NULL,
State VARCHAR(127) NOT NULL,
Country VARCHAR(127) NOT NULL,
PIN INT NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES multiplex(multiplex_id));

CREATE TABLE multiplex_emails(
multiplex_id INT NOT NULL,
email VARCHAR(255) NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES multiplex(multiplex_id));

-- -- CREATE TABLE Employees(
-- -- emp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- -- password VARCHAR(255) NOT NULL,
-- -- multiplex_id VARCHAR(255) NOT NULL,
-- -- emp_name VARCHAR(255),
-- -- gender VARCHAR(31),
-- -- designation VARCHAR(255),
-- -- contact_id INT NOT NULL UNIQUE,
-- -- address VARCHAR(255) NOT NULL,
-- -- salary INT NOT NULL,
-- -- email VARCHAR(255) NOT NULL UNIQUE);

-- -- CREATE TABLE EmployeeContacts(
-- -- emp_id INT NOT NULL,
-- -- contact_no BIGINT NOT NULL,
-- -- FOREIGN KEY (emp_id) REFERENCES Employees(emp_id));

-- -- CREATE TABLE EmployeeAddresses(
-- -- emp_id INT NOT NULL,
-- -- address_line1 VARCHAR(255) NOT NULL,
-- -- address_line2 VARCHAR(255) NOT NULL,
-- -- city VARCHAR(127) NOT NULL,
-- -- State VARCHAR(127) NOT NULL,
-- -- Country VARCHAR(127) NOT NULL,
-- -- PIN VARCHAR(16) NOT NULL,
-- -- FOREIGN KEY (emp_id) REFERENCES Employees(emp_id));

CREATE TABLE administrator(
admin_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
password VARCHAR(255) NOT NULL,
multiplex_id INT NOT NULL UNIQUE,
email VARCHAR(255) NOT NULL UNIQUE,
FOREIGN KEY (multiplex_id) REFERENCES multiplex(multiplex_id));

CREATE TABLE admin_contacts(
admin_id INT NOT NULL,
contact_no BIGINT NOT NULL,
FOREIGN KEY (admin_id) REFERENCES administrator(admin_id));

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
poster VARCHAR(255) NOT NULL,
distributor VARCHAR(255) NOT NULL);

CREATE TABLE screen(
screen_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
screen_no INT NOT NULL,
multiplex_id INT NOT NULL,
total_seats INT NOT NULL,
no_of_rows INT NOT NULL,
FOREIGN KEY (multiplex_id) REFERENCES multiplex(multiplex_id));

CREATE TABLE class(
class_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
class_name VARCHAR(63) NOT NULL,
ticket_price INT NOT NULL);

CREATE TABLE shapes(
row_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
screen_id INT NOT NULL,
class_id INT NOT NULL,
no_of_seats_left INT NOT NULL,
no_of_seats_middle INT NOT NULL,
no_of_seats_right INT NOT NULL,
row_alph VARCHAR(7) NOT NULL,
FOREIGN KEY (screen_id) REFERENCES screen(screen_id),
FOREIGN KEY (class_id) REFERENCES class(class_id));

-- -- SELECT JSON_ARRAYAGG(JSON_OBJECT('rowId', row_id, 'screenId', screen_id, 'classId', class_id, 'noLeft', no_of_seats_left, 'noMiddle', no_of_seats_middle, 'noRight', no_of_seats_right)) from Shapes;

CREATE TABLE shows(
show_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
screen_id INT NOT NULL,
movie_id INT NOT NULL,
start_time TIME NOT NULL,
show_day DATE NOT NULL,
FOREIGN KEY (screen_id) REFERENCES screen(screen_id),
FOREIGN KEY (movie_id) REFERENCES movie(movie_id));

CREATE TABLE ticket(
ticket_no BIGINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
show_id INT NOT NULL,
no_seats INT NOT NULL,
total_price INT NOT NULL,
ticket_day DATE NOT NULL,
booking_day DATE NOT NULL,
paid BOOL,
cancelled BOOL,
FOREIGN KEY (show_id) REFERENCES shows(show_id));

CREATE TABLE seatnums(
ticket_no BIGINT NOT NULL,
row_id INT NOT NULL,
seat_no INT NOT NULL,
FOREIGN KEY (ticket_no) REFERENCES ticket(ticket_no),
FOREIGN KEY (row_id) REFERENCES shapes(row_id),
PRIMARY KEY (ticket_no, row_id, seat_no));

CREATE TABLE customer(
username VARCHAR(127) NOT NULL PRIMARY KEY,
password VARCHAR(255) NOT NULL,
c_name VARCHAR(255) NOT NULL,
email VARCHAR(255),
contact_no BIGINT NOT NULL UNIQUE);

CREATE TABLE customer_ticket_ref(
username VARCHAR(127) NOT NULL,
ticket_no BIGINT NOT NULL UNIQUE,
FOREIGN KEY (ticket_no) REFERENCES ticket(ticket_no),
FOREIGN KEY (username) REFERENCES customer(username),
PRIMARY KEY (username, ticket_no));

-- -- CREATE TABLE EmpTicketRef(
-- -- emp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
-- -- ticket_no BIGINT NOT NULL UNIQUE,
-- -- FOREIGN KEY (ticket_no) REFERENCES Ticket(ticket_no),
-- -- FOREIGN KEY (emp_id) REFERENCES Employees(emp_id));

CREATE TABLE booked_seats(
show_id INT NOT NULL,
booking_date DATE NOT NULL,
seat_no BIT NOT NULL,
row_id INT NOT NULL,
PRIMARY KEY (show_id, booking_date, seat_no, row_id));




INSERT INTO multiplex
VALUES (1, 'Ilox', 'qwer1234', 5, 20),
(2, 'BVR', 'qwer1234', 2, 20),
(3, 'WorldX Cinema', 'qwer1234', 7, 20);
INSERT INTO multiplex_contacts
VALUES (1, 9999999991),
(1, 9999999992),
(1, 9999999990),
(2, 9999999993),
(2, 9999999994),
(2, 9999999995),
(3, 9999999996),
(3, 9999999997),
(3, 9999999998);
INSERT INTO multiplex_addresses
VALUES (1, '2nd Floor, Sobha City Mall', 'Puzhakal', 'Thrissur', 'Kerala', 'India', 680553),
(2, 'Lulu Mall', 'Edapally', 'Kochi', 'Kerala', 'India', 682024),
(3, 'S-16 V3S Mall, Vikas Marg', 'Laxmi Nagar', 'New Delhi', 'Delhi', 'India', 110092);
INSERT INTO multiplex_emails
VALUES (1, 'aaaaaa@gmail.com'),
(1, 'aaaab@gmail.com'),
(1, 'aaaac@gmail.com'),
(2, 'aaaba@gmail.com'),
(2, 'aaabb@gmail.com'),
(2, 'aaabc@gmail.com'),
(3, 'aaaca@gmail.com'),
(3, 'aaacb@gmail.com'),
(3, 'aaacc@gmail.com');
INSERT INTO customer
VALUES ('vava', 'qwerty123', 'Suresh', 'rajavemabala@gmail.com', '7777777770'),
('srkrox', 'qwerty123', 'Rahul', 'rilovesharukh@gmail.com', '7777777771'),
('danichechiuyir', 'qwerty123', 'Senthil', 'danifan@gmail.com', '7777777772');
INSERT INTO movie (movie_name, director, duration, release_date, genre, language, subtitle, actors, synopsis, poster, distributor)
VALUES ('Joker', 'Todd Phillips', 122, '2019-10-01',
'Crime, Drama, Thriller ', 'English', 'English',
 'Joaquin Phoenix, Robert De Niro, Zazie Beetz',
 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.',
 'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
 'Warner Bros. Pictures');
 
INSERT INTO movie (movie_name, director, duration, release_date, genre, language, subtitle, actors, synopsis, poster, distributor)
VALUES ('Grave of the Fireflies', 'Isao Takahata', 94, '1988-04-16',
'Animation, Drama, War', 'Japanese', 'English',
'Tsutomu Tatsumi, Ayano Shiraishi, Akemi Yamaguchi',
'A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents.',
'https://m.media-amazon.com/images/M/MV5BZmY2NjUzNDQtNTgxNC00M2Q4LTljOWQtMjNjNDBjNWUxNmJlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
'Toho Co., Ltd.'),
('Kumbalangi Nights', 'Madhu C. Narayanan', 136, '2019-02-07',
'Comedy, Drama, Romance', 'Malayalam', 'English',
'Shane Nigam, Soubin Shahir, Fahadh Faasil',
'Saji, Bonny, Bobby and Franky are siblings who mostly do not get along. However, a series of events forces them to keep their animosity aside and support each other.',
'https://m.media-amazon.com/images/M/MV5BYjYyZTNkZGYtZGJjZC00NmM2LThjNjMtMjYxYTI0NTg1NzViXkEyXkFqcGdeQXVyMzQ5Njc3NzU@._V1_.jpg',
'Century Films');
#4+2*8+3*8+2*8 = 60
#12*7+4 = 88
INSERT INTO screen(screen_no, multiplex_id, total_seats, no_of_rows)
VALUES (2, 1, 88, 8),
(1, 1, 60, 8);
INSERT INTO class(class_name, ticket_price)
VALUES ('Lounge', 400),
('Platinum', 280),
('Gold', 240),
('Silver', 200);
INSERT INTO shapes(screen_id, class_id, no_of_seats_left, no_of_seats_middle, no_of_seats_right, row_alph)
VALUES (1, 1, 2, 0, 2, 'A'),
(1, 2, 4, 0, 4, 'B'),
(1, 2, 4, 0, 4, 'C'),
(1, 3, 4, 0, 4, 'D'),
(1, 3, 4, 0, 4, 'E'),
(1, 3, 4, 0, 4, 'F'),
(1, 4, 4, 0, 4, 'G'),
(1, 4, 4, 0, 4, 'H'),
(2, 1, 1, 2, 1, 'A'),
(2, 2, 4, 4, 4, 'B'),
(2, 2, 4, 4, 4, 'C'),
(2, 3, 4, 4, 4, 'D'),
(2, 3, 4, 4, 4, 'E'),
(2, 3, 4, 4, 4, 'F'),
(2, 4, 4, 4, 4, 'G'),
(2, 4, 4, 4, 4, 'H');

INSERT INTO shows(screen_id, movie_id, start_time, show_day)
VALUES (1, 1, 100000, 20201125),
(1, 1, 130000, 20201125),
(1, 1, 180000, 20201125),
(1, 1, 210000, 20201125),
(1, 1, 100000, 20201126),
(1, 1, 130000, 20201126),
(1, 1, 180000, 20201126),
(1, 1, 100000, 20201127),
(1, 1, 130000, 20201127),
(1, 1, 180000, 20201127),
(1, 1, 210000, 20201127),
(2, 2, 100000, 20201125),
(2, 2, 130000, 20201125),
(2, 2, 100000, 20201126),
(2, 2, 130000, 20201126),
(2, 2, 100000, 20201127),
(2, 2, 130000, 20201127);


INSERT INTO ticket(show_id, no_seats, total_price, ticket_day, booking_day, paid, cancelled)
VALUES (1, 4, 560, '2020-11-25', '2020-11-15', true, false),
(9, 4, 720, '2020-11-25', '2020-11-16', true, false);

-- select * from Ticket;
-- select * from Shapes;

INSERT INTO seatnums
VALUES (1, 4, 1),
(1, 4, 2),
(1, 4, 3),
(1, 4, 4),
(2, 10, 5),
(2, 10, 6),
(2, 10, 7),
(2, 10, 8);




#INSERT INTO Employees(emp_name, designation, salary, contact_id, address)
#VALUES ('Raj Varkey', 'Manager', 30000, 1, 'Shanti Vihar, Ashok Nagar');
#INSERT INTO Emp_Contact
#VALUES (1, 8888888880),
#(1, 8888888881);
SELECT JSON_ARRAYAGG(JSON_OBJECT('rowId', row_id, 'screenId', screen_id, 'classId', class_id, 'noLeft', no_of_seats_left, 'noMiddle', no_of_seats_middle, 'noRight', no_of_seats_right)) from shapes;
