INSERT INTO markets (market, address, city, zip, link, hours, season, latitude, longitude) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
