const mongoose = require('mongoose')
var articleDb = require('../db/db.article.js')
exports.addArticle = async (ctx, next) =>{
    let result = await articleDb.findOneWithArticleName(ctx.request.body.title)
    debugger
    if (!result) {
       let saveResult = await articleDb.addSingleArticle(ctx.request.body)
       ctx.body = {message:saveResult,resultCode:200}
    }
    else {
        ctx.body = {message:'文章已经出现过了',resultCode:201}
    }
}
exports.getAllArticles = async (ctx, next) => {
    let result = await articleDb.findAllArticles()
    ctx.body = {message: result}
}