var express = require('express');
var router = express.Router();
var request = require('request');


// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });

// });


router.get('/analyze/:text', function(req, res){
  // console.log(req.params, "REQ")
  var paragraph = req.params.text;
  // console.log(paragraph, "PARAGRAPH")
  request({
    method: 'POST',
    url: 'http://gateway-a.watsonplatform.net/calls/text/TextGetRankedKeywords?text='+paragraph+'&apikey='+process.env.KEY+'&outputMode=json&sentiment=1&showSourceText=1'
  }, function(err, response){
    if(err){
      console.log('err', err);
      res.json(err);
    } else {

      var result = JSON.parse(response.body).keywords;
      // console.log(response.body);
      // console.log(response.body.status, "STATUS");
      console.log(result, "RESULT");
      res.json(result);
      // res.render('index', {keywords: result[0].text});
      // res.send(result);

    }
  });
});




module.exports = router;
