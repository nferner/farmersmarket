const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  markets: {
  all: sql('./sql/market/all.sql'),
  create: sql('./sql/market/create.sql'),
  delete: sql('./sql/market/delete.sql'),
  find: sql('./sql/market/find.sql'),
  findZip: sql('.sql/market/findZip.sql'),
  },
};

module.exports = sqlProvider;
