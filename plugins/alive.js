const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `🤖 Hi SHADOW-MD Is Online Now 🔰\n\n*🌈 Owner* - SHADOW-MD\n\n*💫 Owner Number* -94717867389\n\n*💻✅ VIP BOT WATS APP SHADOW\n\n_විධාන මෙනුව ලබා ගැනීමට .menu ලෙස ටයිප් කරන්න🤖🔰._`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
