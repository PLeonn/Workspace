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
    PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS session
(
    id BIGINT NOT NULL,
    length INTEGER,
    type VARCHAR(50),
    PRIMARY KEY(id)
);


-- Create FKs

-- Create Indexes

