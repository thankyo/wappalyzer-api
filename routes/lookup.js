const express = require('express');
const Wappalyzer = require('wappalyzer');
const router = express.Router();

/* GET simple lookup. */
router.get('/v1/', function(req, res) {
  let { query: { url } } = req;
  if (url) {
    new Wappalyzer(url).analyze().then(json => res.send(json)).catch(error => res.status(500).send(error))
  } else {
    res.status(500).send(`URL is required`);
  }
});

module.exports = router;