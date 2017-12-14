const router = require('koa-router')()
var articleVc = require('../controller/article.controller.js')
router.post('/publish', articleVc.addArticle)

router.get('/article',articleVc.getAllArticles)

module.exports = router
