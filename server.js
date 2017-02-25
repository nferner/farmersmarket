const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const Market = require('./service/markets.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/markets', (request, response) => {
  Market.all().then((markets) => {
    reponse.status(200).send(markets);
  });
});

app.get('/api/markets/:id', (request, response) => {
  const id = request.params.id;
  Market.find(id).then((market) => {
    response.status(200).send(market);
  });
});
app.delete('/api/markets/:id', (request, response) => {
  const id = request.params.id;
  Market.destroy(id).then(() => {
    response.status(204).send({ message: 'market destroyed' });
  });
});

app.post('/api/markets', (request, response) => {
  const marketDetails = request.body;
  Market.create(marketDetails).then((market) => {
    response.status(200).send(market);
  });
});

app.listen(8080, () => {
  console.log('listening on 8080');
});
