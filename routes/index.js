var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.HOST) 
var articles = db.get('articles')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('article/index', {});
});

router.get('/article/new', function(req, res, next){
  res.render('article/new');
});

router.post('/article/new', function(req, res, next){
  articles.insert({
    title: req.body.title,
    url: req.body.url,
    textcolor: req.body.textcolor,
    excerpt: req.body.excerpt,
    body: req.body.body
  })
  res.redirect('/')
});

router.get('/article/:id', function(req, res, next){
  res.render('article/show');
});

router.get('/article/:id/edit', function(req, res, next){
  res.render('article/edit');
});

router.post('/article/:id/edit', function(req, res, next){
  res.redirect('/');
})

router.post('/:id', function(req, res, next){
  res.redirect('/');
})
module.exports = router;
