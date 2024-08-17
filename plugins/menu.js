const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
reply("*🔰 welcome to SHADOW-MD menu🔰*\n\n|💫+++++Commands+++++💫|\n\n*💻 Command - .alive*\n\n*✅ බොට් ඔන්ලයින්ද බැලීම*\n\n*💻 Command - .menu*\n\n*✅ බොට්ගෙ විධාන මෙනුව ලබාගැනීම*\n\n*💻 Command - .song*\n\n*✅ සිංදු බාගත කිරීම*\n\n*💻 Command - .video*\n\n*✅ වීඩියෝ බාගත කිරීම*\n\n🔰▁SHADOW-MD by lakshan damayantha▁▁▁▁▁🔰")}catch(e){
console.log(e)
reply(`${e}`)
}
})
