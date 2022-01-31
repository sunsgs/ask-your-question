CREATE TABLE questions(
   question_id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
   username VARCHAR(255) NOT NULL,
   question VARCHAR(255) NOT NULL,
   last_update TIMESTAMP DEFAULT Now()
);

CREATE TABLE answers(
   answer_id INT GENERATED ALWAYS AS IDENTITY UNIQUE,
   question_id INT REFERENCES questions (question_id),
   username VARCHAR(255) NOT NULL,
   answer VARCHAR(255) NOT NULL,
   last_update TIMESTAMP DEFAULT Now()
);

INSERT INTO questions(username, question) VALUES('gianluca','Would you hire Gianluca?')