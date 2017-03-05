const MarketsDAO = require('../services/MarketsDAO');

class MarketController {
  static getAll(req, res) {
    MarketsDAO.all().then((markets) => {
      res.status(200).json(markets);
    });
  }
  static getOne(req, res) {
  MarketsDAO.findBy({ id: req.params.id })
         .then((market) => res.status(200).json(market));
  }
  static findByZip(req, res) {
    MarketsDAO.findZip({ zip: req.params.zip })
          .then((markets) => res.status(200).json(markets));
  }
}

module.exports = MarketController;
