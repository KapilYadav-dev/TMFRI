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
            var query='#content_box > article:nth-child('+(i+1)+') > header > h2'
            title = $(query).find('a').text()
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
        var movieGenre=$('.imdbwp__meta').find('span').eq(1).text().trim()
        var movieYear=$('.imdbwp__meta').find('span').eq(2).text().trim()
        var movieImdbrating=$('div.single_post > div > div.thecontent.clearfix > div.imdbwp.imdbwp--movie.dark > div.imdbwp__content > div.imdbwp__belt > span.imdbwp__star').text().trim()
        var movieDirector=$('.imdbwp__footer').find('span').eq(0).text().trim()
        var movieCreator=$('.imdbwp__footer').find('span').eq(1).text().trim()
        var movieActors=$('.imdbwp__footer').find('span').eq(2).text().trim()
        var moviePlot=$('div.single_post > div > div.thecontent.clearfix > p:nth-child(9)').text()
        var imgOne=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(13)').find('img').attr('src')
        var imgTwo=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(14)').find('img').attr('src')
        var imgThree=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(15)').find('img').attr('src')
        var imgFour=$('div.single_post > div > div.thecontent.clearfix > figure:nth-child(16)').find('img').attr('src')
        var dataArray=[imgOne,imgTwo,imgThree,imgFour]
        var movieImages = dataArray.filter(function( element ) {
            return element !== undefined;
         });
         var movie480p=$('span[class="maxbutton-3-container mb-container"]').eq(0).find('a').attr('href')
         var movie720p=$('span[class="maxbutton-3-container mb-container"]').eq(1).find('a').attr('href')
         var movie1080p=$('span[class="maxbutton-3-container mb-container"]').eq(2).find('a').attr('href')
         var links={
             "movie480p":movie480p,
             "movie720p":movie720p,
             "movie1080p":movie1080p
         }
        var data={
            "movieName":movieName,
            "movieRuntime":movieRuntime,
            "moiveGenre":movieGenre,
            "movieImdbrating":movieImdbrating,
            "movieCreator":movieCreator,
            "movieYear":movieYear,
            "movieDirector":movieDirector,
            "movieActors":movieActors,
            "moviePlot":moviePlot,
            "movieImages":movieImages,
            "movieLinks":links
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