var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || process.env.HOST)
var articles = db.get('articles')
var validate = require('../lib/error')

/* GET home page. */
router.get('/', function(req, res, next) {
  articles.find({}, function(err, record){
  res.render('article/index', {articles: record});
  })
});

router.get('/article/new', function(req, res, next){
  res.render('article/new');
});

router.post('/article/new', function(req, res, next){
  var title = req.body.title;
  var urls = req.body.url;
  var textcolor = req.body.textcolor;
  var excerpt = req.body.excerpt;
  var body = req.body.body;
  var verify = validate(title, excerpt, body)
    if(verify.length > 0) {
      res.render('article/new', {error: verify})
    } else {
  articles.insert({
    title: title,
    url: url,
    textcolor: textcolor,
    excerpt: excerpt,
    body: body
  });
  res.redirect('/');
};
});
router.get('/article/:id', function(req, res, next){
  articles.findOne({_id: req.params.id}, function(err, record){
      res.render('article/show', {articles: record});
  });
});

router.get('/article/:id/edit', function(req, res, next){
  articles.findOne({_id: req.params.id}, function(err, record){
  res.render('article/edit', {articles: record});
});
});

router.post('/article/:id/edit', function(req, res, next){
  articles.update({_id: req.params.id},  {$set: {
    'title': req.body.title,
    'url': req.body.url,
    'textcolor': req.body.textcolor,
    'excerpt': req.body.excerpt,
    'body': req.body.body
  }});
  res.redirect('/');
});


router.post('/:id', function(req, res, next){
  res.redirect('/');
})
module.exports = router;
