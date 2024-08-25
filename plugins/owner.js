const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "owner",
    desc: "Check bot owener nambar.",
    category: "main",
    react: "😇",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
let des = `OWENER NAMBAR 94767910958👨‍💻💗📍`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
