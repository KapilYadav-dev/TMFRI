# TheMovieFlix webscrape api

As we all know, need is the mother of invention. So being a front-end developer, API was the most fascinating thing for me. So I decided to learn node rest and implement it with the cheerio library to do something productive and here's the result...

# What this api do ?
So, using this API you can get a jsonarry of new movies with all necessary details and even their downloading links...

# Example Response

![alt text](https://raw.githubusercontent.com/KapilYadav-dev/TMFRI/master/left.png)

# <b>/movies/{pageNumber}<b>
<div class="highlight highlight-source-groovy"><pre>[
{
"title": "Download Sicario: Day of the Soldado (2018) Dual Audio {Hindi-English} 480p [400MB] | 720p [1GB] | 1080p [2.5GB]",
"img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODIK/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/8AAEQgAFAAPAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A5RNO8QaZ4p0zxFBpuqySWa2++BWeSKeLChjvyww3zAKo4yuQDnL4Nev9B1++8S+JLTVY/wC1GdoI5FISOPdxGuSFwAV6jIx05Nc3pupeLtBYz22sL/ZV3cquIz5h3LtZEJKnZgFTj2OOQcZWv3/iTxdbQSa1rdpcQWUsioHOxoWcjIO1ec7c/gfesbJ6XOjlkrO25zWo65etNNp80rTWsNwxijZ2AQgkA4UjJxxk5qtHeyXMkcCqIIsk7Y2bHT/aJxRRWnUxvbY//9k=",
"url": "https://themoviesflix.co/download-sicario-day-of-the-soldado-2018-hindi-english-480p-720p/"
},
{
"title": "Download NetFlix The Alienist (Season 1-2) Dual Audi {Hindi-English} 720p WeB-HD [350MB]",
"img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODIK/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/8AAEQgAFAAOAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A87fTIbWTyo71HXG7eEAOPT8/0qG606OYcTEFWIzGq4YevWsyTxN84Ejs8pDRsqqu1gQRnDZ9j7USeIgF85AWMzFjvRGA5PGMcda9iX15w+PWy/rY+jhicpU+X2bau9/+H6HIK5a555yfyq/duBcxxogRPIRyoJwWI5PJ6nNFFSpP2lr9WfNJao//2Q==",
"url": "https://themoviesflix.co/download-the-alienist-season-1-2-hindi-english-720p/"
},
{
"title": "Download Netflix Fast & Furious: Spy Racers (Season 1 – 3) Dual Audio {Hindi-English} 720p Web-DL [220MB]",
"img": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODIK/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/8AAEQgAFAANAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8AwPFV/wCHJdbXwzbS3Flptsv2k3lmQpljjj3Ek9TliwHOOF4J5rbh8a+HpLaGS38HNqu5SWnXGM7iQOOwBAweePcVz+j+KLTUNNjvf+EPE8rlEW4aIMjIpxyWIz0IwOvtjBsxfEzw34d3WlnpqG33ErCyn92ep68AknkD06nPHKsOoWvr9/52O51qk7pO3np+VzxTTPFWtaZa/ZrTUbmGDeZPKSRlXccAnAPU4H5VW1LVb/VphPfXk9w4GFMkhbaPQZ6Ciiu1NnM4pJO2p//Z",
"url": "https://themoviesflix.co/download-fast-furious-spy-racers-season-1-3-hindi-english-720p/"
},
{
"title": "Download NetFlix Alice in Borderland 2020 (Season 1) Dual Audio {English-Japanese} 720p WeB-HD [400MB]",
"img": "data:image/png;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODIK/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/8AAEQgAFAANAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A890RdDltVGpSyrcpI25Yk3KY8Dbz2Od2fbH4VdYis/te6wEnkFFH7xSDuCjd6/xZ/DFZ8Hi+0iJkayHzbtpHVCAcZ55G7afoD1qaXxXbyIh+zRiTq4jYbeQD6f1/+vhzvsTKhZ6HnfmuTyaQzyDoxoorQ3P/2Q==",
"url": "https://themoviesflix.co/download-alice-in-borderland-2020-s-1-english-japanese-720p/"
},
{
"title": "Download NOS4A2 (Season 1-2 ) Dual Audio {Hindi-English} WeB-HD || 720p [450MB]",
"img": "https://themoviesflix.co/wp-content/uploads/2021/01/ccR64SXSsgWMW3W161VQKlrnjnh-200x300.jpg",
"url": "https://themoviesflix.co/download-nos4a2-season-1-2-hindi-english-720p/"
}
]</pre></div>


![alt text](https://raw.githubusercontent.com/KapilYadav-dev/TMFRI/master/right.png)

# <b> /movie/{url}<b>
<div class="highlight highlight-source-groovy"><pre>
{
"movieName": "Wonder Woman 1984",
"movieRuntime": "151 min",
"moiveGenre": "Action, Adventure, Fantasy",
"movieImdbrating": "",
"movieCreator": "Geoff Johns (story), Patty Jenkins (story), Dave Callaham (screenplay), Geoff Johns (screenplay), Patty Jenkins (screenplay), William Moulton Marston (Wonder Woman created by)",
"movieYear": "25 Dec 2020",
"movieDirector": "Patty Jenkins",
"movieActors": "Pedro Pascal, Gal Gadot, Connie Nielsen, Chris Pine",
"moviePlot": "Rewind to the 1980s as Wonder Woman’s next big-screen adventure finds her facing two all-new foes: Max Lord and The Cheetah.When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
"movieImages": [],
"movieLinks": {
"movie480p": "https://coinquint.com/a15803/",
"movie720p": "https://coinquint.com/a15804/",
"movie1080p": "https://coinquint.com/a15805/"
}
}
</pre></div>
 
# <b>/searchMovies/{searchText}/{pageNumber}<b>
 <div class="highlight highlight-source-groovy"><pre>
 {
"pageNumber": "1",
"data": [
{
"title": "Download Netflix Fast & Furious: Spy Racers (Season 1 – 3) Dual Audio {Hindi-English} 720p Web-DL [220MB]",
"img": "https://themoviesflix.co/wp-content/uploads/2021/01/9d80e56746610810805324b6b1ac0863-200x300.jpg",
"url": "https://themoviesflix.co/download-fast-furious-spy-racers-season-1-3-hindi-english-720p/"
},
{
"title": "Download Soul (2020) {English With Subtitles} WEB-DL 480p [300MB] || 720p [900MB] || 1080p [1.9GB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/12/pixar-reveals-new-poster-for-soul-and-teases-trailer-release-tomorrow-200x300.jpeg",
"url": "https://themoviesflix.co/download-soul-2020-english-with-sub-480p-720p/"
},
{
"title": "Download Ferdinand (2017) {Hindi-English} 480p [350MB] || 720p [1GB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/12/07cd5fa3d810277bf06ad7be3b67e0df-200x300.jpg",
"url": "https://themoviesflix.co/download-ferdinand-2017-hindi-english-480p-720p/"
},
{
"title": "Download Tangled: Before Ever After (2017) {Hindi-English} 480p [200MB] || 720p [600MB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/12/MV5BYzZkYzIwNGUtZmNiMC00NGQ1LWFmN2UtODU0YzhiYjBjYmQyXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_-200x300.jpg",
"url": "https://themoviesflix.co/tangled-before-ever-after-2017-hindi-english-480p-720p/"
},
{
"title": "Download Barbie Princess Adventure (2020) Dual Audio {Hindi-English} 480p [230MB] || 720p [850MB] || 1080p [1.5GB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/11/MV5BOWIyN2Y5NmYtMzdjZi00MzcyLWI2NzgtNjM4NmJmZTcwNDJkXkEyXkFqcGdeQXVyNzQyNTU2MjI@._V1_-200x300.jpg",
"url": "https://themoviesflix.co/download-barbie-princess-adventure-2020-hindi-english-480p-720p-1080p/"
},
{
"title": "Download Doraemon The Movie Nobita Aur Antariksh Daku (2015) Hindi Dubbed 480p [250MB] || 720p [624MB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/11/69349l-Custom-200x300.jpg",
"url": "https://themoviesflix.co/download-doraemon-the-movie-nobita-aur-antariksh-daku-2015-hindi-480p-720p/"
}
}
]
}
 </pre></div>
 
 # <b>/movies/{category}/{pageNumber}<b>
 <div class="highlight highlight-source-groovy"><pre>
{
"pageNumber": "1",
"category": "animated",
"data": [
{
"title": "Download Netflix Fast & Furious: Spy Racers (Season 1 – 3) Dual Audio {Hindi-English} 720p Web-DL [220MB]",
"img": "https://themoviesflix.co/wp-content/uploads/2021/01/9d80e56746610810805324b6b1ac0863-200x300.jpg",
"url": "https://themoviesflix.co/download-fast-furious-spy-racers-season-1-3-hindi-english-720p/"
},
{
"title": "Download Soul (2020) {English With Subtitles} WEB-DL 480p [300MB] || 720p [900MB] || 1080p [1.9GB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/12/pixar-reveals-new-poster-for-soul-and-teases-trailer-release-tomorrow-200x300.jpeg",
"url": "https://themoviesflix.co/download-soul-2020-english-with-sub-480p-720p/"
},
{
"title": "Download Ferdinand (2017) {Hindi-English} 480p [350MB] || 720p [1GB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/12/07cd5fa3d810277bf06ad7be3b67e0df-200x300.jpg",
"url": "https://themoviesflix.co/download-ferdinand-2017-hindi-english-480p-720p/"
},
{
"title": "Download Tangled: Before Ever After (2017) {Hindi-English} 480p [200MB] || 720p [600MB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/12/MV5BYzZkYzIwNGUtZmNiMC00NGQ1LWFmN2UtODU0YzhiYjBjYmQyXkEyXkFqcGdeQXVyNjg3MDM4Mzc@._V1_-200x300.jpg",
"url": "https://themoviesflix.co/tangled-before-ever-after-2017-hindi-english-480p-720p/"
},
{
"title": "Download Barbie Princess Adventure (2020) Dual Audio {Hindi-English} 480p [230MB] || 720p [850MB] || 1080p [1.5GB]",
"img": "https://themoviesflix.co/wp-content/uploads/2020/11/MV5BOWIyN2Y5NmYtMzdjZi00MzcyLWI2NzgtNjM4NmJmZTcwNDJkXkEyXkFqcGdeQXVyNzQyNTU2MjI@._V1_-200x300.jpg",
"url": "https://themoviesflix.co/download-barbie-princess-adventure-2020-hindi-english-480p-720p-1080p/"
}]}
 </pre></div>
