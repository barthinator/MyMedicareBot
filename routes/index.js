var express = require('express');
const axios = require('axios');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

});

router.post('/string', function(req, res, next) {
  var inputString = req.body.inputString;
  var splitString = inputString.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  res.json({returnString: joinArray});
});

router.get('/url', function(req, res, next){
  //Decodes the encodedURI component
  var url = req.query.url;

  //Uses axios for the get request, then responds with the data
  axios.get(url)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});

//Uses axios for the post request, then responds with the data
router.post('/url', function(req, res, next){
  var url = req.body.inputURL;
  axios.post(url)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
  });
});

module.exports = router;
