/*CMD
  command: /settings2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var html2 = User.getProperty("html")
if(!html2){
var buttons = [
    {title: "Current Format: Markdown", command: "/html"},
{title: "Clear bins", command: "/clearbin" },
    {title: "Conversion Option", command: "/touchutton1" }
];

Bot.editInlineKeyboard(buttons);
}else{
var buttons = [
    {title: "Current Format: HTML", command: "/markdown"},
{title: "Clear bins", command: "/clearbin" },
    {title: "Conversion Option", command: "/touchutton1" } 
];

Bot.editInlineKeyboard(buttons);
}
