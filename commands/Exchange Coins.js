/*CMD
  command: Exchange Coins
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter amount
  keyboard: 
  aliases: 
CMD*/

let mess = message + "00"
User.setProperty("ex1", data.message, "integer")
User.setProperty("ex2", mess, "integer")
Bot.runCommand("/nodejs")
