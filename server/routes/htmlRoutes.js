const path = require('path');

module.exports = (app) => //maybe this needs to be a function?
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
