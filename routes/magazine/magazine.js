var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.HOST)
var article = db.get('article')

router.get('/magazine/index', function(req, res, next){
  res.render('magazine/index')
})
