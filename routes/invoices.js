var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  const data = [];
  req.on('data', chunk => {
    data.push(chunk);
  });

  req.on('end', () => {
    const requestBody = data.join();
    const itemsSaved = JSON.parse(requestBody).length;
    res.send(`${itemsSaved} items saved`);
  })
});

module.exports = router;
