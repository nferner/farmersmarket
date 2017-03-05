const db = require('../config/db');
const sql = require('../config/sqlProvider').markets;
const Market = require('../models/market');

class MarketsDAO {
  static all() {
    return db.map(sql.all, [], (row) => new Market(row));
  }
  static findBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
              .then((row) => new Market(row));
  }
  static findZip(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.one(sql.find, [key, value])
              .then((row) => new Market(row));
  }
/*  static create({ market, address, city, zip, link, hours, season, latitude, longitude }) {
    reuturn db.one(sql.create, [market, address, city, zip, link, hours, season, latitude, longitude])
              .then((row) => new Market(row));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }*/
}

module.exports = MarketsDAO;
