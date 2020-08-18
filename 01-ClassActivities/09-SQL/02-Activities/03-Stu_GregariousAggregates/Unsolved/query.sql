-- 1. What is the average cost to rent a film in the stores?
SELECT ROUND(AVG(rental_rate),2) AS "Avg rental rate"
FROM film;

-- 2. What is the average rental cost of films by rating? On average, what is the cheapest rating of films to rent? Most expensive?
SELECT rating, ROUND(AVG(rental_rate),2) AS "Rate"
FROM film
GROUP BY rating
ORDER BY "Rate" DESC;

-- 3. How much would it cost to replace all the films in the database?
SELECT SUM(replacement_cost)
from film;

-- 4. How much would it cost to replace all the films in each ratings category?
SELECT rating, SUM(replacement_cost)
from film
GROUP BY rating;

-- 5. How long is the longest movie in the database? The shortest?
SELECT MAX(length) as "Longest", MIN(length) as "Shortest"
from film;