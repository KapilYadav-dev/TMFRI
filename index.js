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
            console.log('data is '+title+img+weburl);
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
app.listen(8000,()=>{
    console.log("Server running on port 8000")
})

function empty() {
    imglist=[]
    titlelist=[]
    urllist=[]
    data=[]
}