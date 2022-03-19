function movie(options){
if(options.movie==undefined){
Bot.sendMessage("Movie name is not defined")
return
}
if(options.apikey==undefined){
Bot.sendMessage("Api Key is not defined")
}else{
var movie = encodeURI(options.movie)
User.setProperty("MovieInfo", movie, "string")
HTTP.get({
  url: "http://www.omdbapi.com/?apikey=" + options.apikey + "&t=" + movie + "&y=" + options.year + "",
  success: options.onSuccess
})
}}

function read(data){
var s = JSON.parse(data)
var name = s.Title
var pic = s.Poster
var rate = s.Rated
var genre = s.Genre
var des = s.Plot
var date = s.Released
var due = s.Runtime
var imdbid = s.imdbID
var imdbr = s.imdbRating
var votes = s.imdbVotes
var lang = s.Language
var country = s.Country
var writer = s.Writer
var actor = s.Actors
var year = s.Year
var response = s.Response
var error = s.Error
var boxot = decodeURI(User.getProperty("MovieInfo")
if(response=="False"){
  Api.sendMessage({
  text: "<i>No results were found that included all of your search.</i>\n\nYour search -  "+boxot+ " -  did not find any movie.\n\n<b>Server message</b>: \n" + error,
  parse_mode: "HTML",
  reply_markup: {inline_keyboard: button}
})
}else{
Api.sendMessage({
  text: "<b><a href='" + pic + "'>Title</a></b>: <a href='https://www.imdb.com/title/" + imdbid + "'>"+ name + "</a> [" + year + "]\n<i>Also known as</i>: "+ name + " (" + year + ")\n<b>Rating</b>🌟: <i>" + imdbr +  "/10</i>\n(<code>" + imdbr + " based on " + votes + " user ratings</code>)| <code>" + rate + "</code> | <code>" + due + "</code> |\n<b>Release Info</b>: <a href='https://www.imdb.com/title/" + imdbid + "/releaseinfo'>" + date + "</a>\n<b>Genre</b>🎭: " + genre + "\n<b>IMDB url</b>: https://www.imdb.com/title/" + imdbid + "\n<b>Language</b>: " + lang + "\n<b>Country of origin</b>: " + country + "\n<b>Story line</b>: " + des + "\n<b>Writers</b>: " + writer + "\n<b>Stars</b>: " + actor + "\n\n<a href='https://www.imdb.com/title/" + imdbid + "/fullcredits#cast'>Read More...</a>",
  parse_mode: "HTML"
})
}
}


publish({
 readInfo: read,
 searchInfo: movie
})
