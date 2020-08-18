-- Create schemas

-- Create tables
CREATE TABLE IF NOT EXISTS gym
(
    id INTEGER NOT NULL,
    gym_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    zipcode VARCHAR(12),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS trainer
(
    id INTEGER NOT NULL,
    first_cname VARCHAR(255),
    last_name VARCHAR(255),
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS member
(
    id INTEGER NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    zipcode VARCHAR(12),
    gym_id INTEGER NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS session
(
    id BIGINT NOT NULL,
    length INTEGER,
    type VARCHAR(50),
    date_time TIMESTAMP NOT NULL,
    trainer_id INTEGER,
    gym_id INTEGER,
    member_id INTEGER,
    PRIMARY KEY(id)
);


-- Create FKs
ALTER TABLE session
    ADD    FOREIGN KEY (member_id)
    REFERENCES member(id)
    MATCH SIMPLE
;
    
ALTER TABLE session
    ADD    FOREIGN KEY (trainer_id)
    REFERENCES trainer(id)
    MATCH SIMPLE
;
    
ALTER TABLE session
    ADD    FOREIGN KEY (gym_id)
    REFERENCES gym(id)
    MATCH SIMPLE
;
    
ALTER TABLE member
    ADD    FOREIGN KEY (gym_id)
    REFERENCES gym(id)
    MATCH SIMPLE
;
    

-- Create Indexes

