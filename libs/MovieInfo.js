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


  

function im(options, s){
var name = s.Title
var pic = s.Poster
var rate = s.Rated
var genre = s.Genre
var des = s.Plot
var date = s.Released
var due = s.Runtime
var imdbid = s.imdbID
var imdbr = s.imdbRating
var aimdbr = s.imdbRating
var votes = s.imdbVotes
var meta = s.Metascore
var box = s.BoxOffice
var lang = s.Language
var country = s.Country
var writer = s.Writer
var actor = s.Actors
var year = s.Year
if(options.imdbbot==true){
Api.sendMessage({
  text: "<b><a href='" + pic + "'>Title</a></b>: <a href='https://www.imdb.com/title/" + imdbid + "'>"+ name + "</a> [" + year + "]\n<i>Also known as</i>: "+ name + " (" + year + ")\n<b>Rating</b>🌟: <i>" + imdbr +  "/10</i>\n(<code>" + imdbr + " based on " + votes + " user ratings</code>)| <code>" + rate + "</code> | <code>" + due + "</code> |\n<b>Release Info</b>: <a href='https://www.imdb.com/title/" + imdbid + "/releaseinfo'>" + date + "</a>\n<b>Genre</b>🎭: " + genre + "\n<b>IMDB url</b>: https://www.imdb.com/title/" + imdbid + "\n<b>Language</b>: " + lang + "\n<b>Country of origin</b>: " + country + "\n<b>Story line</b>: " + des + "\n<b>Writers</b>: " + writer + "\n<b>Stars</b>: " + actor + "\n\n<a href='https://www.imdb.com/title/" + imdbid + "/fullcredits#cast'>Read More...</a>",
  parse_mode: "HTML"
})
}else{
var med = "<b>Title</b>: <u>" + name + "</u>\n<b>Release Date</b>: " + date +"\n<b>Genres</b>: " + genre + "\n<b>Rated</b>: " + rate + "\n<b>Duration</b>: " + due + "\n\n<b><u>Description</u></b>: \n" + des + "\n\n<b>Writer</b>: " + writer + "\n<b>Actors</b>: " + actor + "\n<b><a href='https://www.imdb.com/title/" + imdbid + "'>IMDB </a>Rating</b>: " + imdbr + "/10 \n<b>Votes</b>: " + votes + "\n<b>Metacritic</b>: " + meta + "/100\n<b>Box Office</b>: " + box + "\n<b>Language</b>: " + lang + "\n<b>Country</b>: " + country
Api.sendPhoto({
  photo: "https://www.imdb.com/title/" + imdbid ,
  caption: med,
  parse_mode: "HTML"
})
}}
function read(options){

var s = JSON.parse(options.data)

var response = s.Response
var error = s.Error
var boxot = decodeURI(User.getProperty("MovieInfo"))
if(response=="False"){
  Api.sendMessage({
  text: "<i>No results were found that included all of your search.</i>\n\nYour search -  "+boxot+ " -  did not find any movie.\n\n<b>Server message</b>: \n" + error,
  parse_mode: "HTML"
})
}else{
im(options, s)
}
}


publish({
 readInfo: read,
 searchInfo: movie
})
