-- Select count of actors first names in descending order


-- Select the average duration of movies by rating


-- Select top ten replace costs for the length of the movie


-- Select the count of countries

SELECT * from actor;

SELECT COUNT(first_name), first_name
FROM actor
GROUP BY first_name
ORDER BY first_name DESC;

SELECT *
FROM film;

SELECT ROUND(AVG(rental_duration),2), rating
FROM film
GROUP BY rating
ORDER BY rating;

SELECT ROUND(AVG(replacement_cost),2) AS "Rep_Cost", length
FROM film
GROUP BY length
ORDER BY "Rep_Cost"
DESC LIMIT 10;

SELECT *
FROM city;

SELECT *
FROM country;

SELECT COUNT(city) as "count", country
FROM city
INNER JOIN country ON 
city.country_id = country.country_id
GROUP BY country
ORDER BY "count" DESC;