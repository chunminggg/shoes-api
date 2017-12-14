const router = require('koa-router')()
var articleVc = require('../controller/article.controller.js')
router.post('/publish', articleVc.addArticle)

router.get('/articles',articleVc.getAllArticles)

module.exports = router
