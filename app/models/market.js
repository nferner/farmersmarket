class Market {
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
