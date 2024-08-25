const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
    pattern: "owner",
    desc: "Check bot owner",
    category: "owner",
    react: "😇",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
let des = `OWENER NAMBAR 94767910958👨‍💻💗📍`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/52720ef1ec768bc4f45b7.jpg`},caption:dec},{quoted:mek});
}catch(e){
console.log(e)
reply(`${e}`)
}
})
