const express = require('express')
const app=express()
const request = require('request')
const cheerio = require('cheerio')
var baseurl="https://themoviesflix.co/"
var title,img,weburl
var titlelist=[],imglist=[],urllist=[]
var data=[]

app.get('/movies/:pageNumber',(req,res)=>{
    var url=baseurl+'page/'+req.params.pageNumber
    request(url,async (error,response,html)=>{
        if(error) return error
        var $=cheerio.load(html)
        var card=$('#content_box ').find('article')
        console.log(card.length)
        card.each(function (i, e) {
            var a=$(this)
            title = a.find('a').text().trim();
            img=a.find('.featured-thumbnail img').attr('src')
            weburl=a.find('a').attr('href')
            titlelist[i]=title
            imglist[i]=img
            urllist[i]=weburl
        })
        for(var i=0;i<titlelist.length;i++)
        {
            var obj={
                'title':titlelist[i],
                'img':imglist[i],
                'url':urllist[i]
            }
            data.push(obj)
        }
        if(data!=null) res.status(200).send(data)
        else res.json({"error":"Api is down"})
        empty()
    })
})

app.get('/movie/*',(req,res)=>{
    var url=req.params[0]
    request(url,async (error,response,html)=>{
        if(error) return error
        
    
        var $=cheerio.load(html)
        var movieName=$('.imdbwp__title').text().trim()
        var movieRuntime=$('.imdbwp__meta').find('span').eq(0).text().trim()
        var moiveGenre=$('.imdbwp__meta').find('span').eq(1).text().trim()
        var movieYear=$('.imdbwp__meta').find('span').eq(2).text().trim()
        var movieDirector=$('.imdbwp__footer').find('span').eq(0).text().trim()
        var movieCreator=$('.imdbwp__footer').find('span').eq(1).text().trim()
        var movieActors=$('.imdbwp__footer').find('span').eq(2).text().trim()
        var moviePlot=$('div.single_post > div > div.thecontent.clearfix > p:nth-child(9)').text()
        var imgOne=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(13)').find('img').attr('src')
        var imgTwo=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(14)').find('img').attr('src')
        var imgThree=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(15)').find('img').attr('src')
        var imgFour=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(16)').find('img').attr('src')
        var data={
            "movieName":movieName,
            "movieRuntime":movieRuntime,
            "moiveGenre":moiveGenre,
            "movieCreator":movieCreator,
            "movieYear":movieYear,
            "movieDirector":movieDirector,
            "movieActors":movieActors,
            "moviePlot":moviePlot,
            "imgOne":imgOne,
            "imgTwo":imgTwo,
            "imgThree":imgThree,
            "imgFour":imgFour,
        }
        res.json(data)
    })
})
app.listen(8000,()=>{
    console.log("Server running on port 8000")
})

function empty() {
    imglist=[]
    titlelist=[]
    urllist=[]
    data=[]
}