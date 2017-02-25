const db = require('./db');

class Market {
  static all(){
    return db.any('SELECT * FROM markets')
             .then((records) => {
               const markets = records.map((row) => {
                 return new Market(row);
               });
               return markets;
             })
            .catch((err) => {
              console.error(err);
            });
  }
  static destroy(id) {
    return db.none(`
      DELETE FROM markets WHERE id=$1;
      `, [id])
      .catch((err) => {
        console.error(err);
      });
  }
  static find(id) {
    return db.one(`
      SELECT * FROM markets
      WHERE id=$1;
      `, [id])
      .then((row) => {
        const newMarket = new Market(row);
        return newMarket;
      })
      .catch((err) => {
        console.error(err);
      });
  }
  static create({ market, address, city, zip, link, hours, season, latitude, longitude }) {
    return db.one(`
      INSERT INTO markets
        (market, address, city, zip, link, hours, season, latitude, longitude)
      Values
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *;
      `, [market, address, city, zip, link, hours, season, latitude, longitude])
      .then((row) => {
        return new Market(row);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  constructor({ id, market, address, city, zip, link, hours, season, latitude, longitude }) {
    this.id = id;
    this.market = market;
    this.address = address;
    this.city = city;
    this.zip = zip;
    this.link = link;
    this.hours = hours;
    this.season = season;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

module.exports = Market;
