const mongoose = require('mongoose')
var articleModel = require('../model/article.model')

exports.findOneWithArticleName = async(name) => {
    let result = await articleModel.findOne({title:name})
    return result
}
exports.addSingleArticle = async(article) => {
    console.log(`artilece:${article}`)
    debugger
    let newArticle = new articleModel
    newArticle.title = article.title
    newArticle.content = article.content
    newArticle.author = article.author
    let saveResult = await newArticle.save()
    return saveResult
}

exports.findAllArticles = async() => {
    let resultArray = await articleModel.find()
    return resultArray
}