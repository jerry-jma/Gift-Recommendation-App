DROP DATABASE IF EXISTS HappyGifts;

CREATE DATABASE HappyGifts;

USE HappyGifts;

DROP TABLE IF EXISTS vacations;
DROP TABLE IF EXISTS presents;
DROP TABLE IF EXISTS romanticMeals;

CREATE TABLE vacations (
  vacation_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  vacation_spot VARCHAR(255) NOT NULL,
  vacationSpotDiscussion TEXT NOT NULL,
  asker_name VARCHAR(50) NOT NULL,
  likes SMALLINT DEFAULT 0 NOT NULL,
  dislikes SMALLINT DEFAULT 0 NOT NULL,
  url VARCHAR(500)
);

-- CREATE TABLE Answers (
--   answer_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--   questionID INT,
--   body TEXT NOT NULL,
--   date DATETIME,
--   answerer_name VARCHAR(50) NOT NULL,
--   email VARCHAR(50) NOT NULL,
--   reported BOOLEAN DEFAULT 0 NOT NULL,
--   helpfulness SMALLINT DEFAULT 0 NOT NULL,
--   FOREIGN KEY(questionID) REFERENCES Questions(question_id)
-- );
