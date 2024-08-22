const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👨‍💻_SHADOW-MD_MAIN_COMMAND_👨‍💻*

*_______🔎MAIN_COMMANDS💻_______*

*🤖 Command - .alive*

*👑 බොට් ඔන්ලයින්ද බැලීම*

*🤖 Command - .menu*

*👑 බොට්ගෙ විධාන මෙනුව ලබාගැනීම*

*_______🔎_DOWNLOAD_COMMANDS💻_______*

*👨‍💻 Command - .song*

*👑 සිංදු බාගත කිරීම*

*👨‍💻 Command - .video*

*👑 වීඩියෝ බාගත කිරීම*

*👨‍💻 Command - .video*

*👑 වීඩියෝ බාගත කිරීම*

*👨‍💻 command - .fb*

*👑 facebook විඩියො බගත කිරීම*

*👨‍💻 command - .tt*

*👑 tik tok විඩියො බගත කිරිම*

*👨‍💻 command - .mediafire* 

*👑 mediafire බගත කිරිම*

*👨‍💻 command - .twitter*

*👑 twitter විඩියො බගත කිරිම*

*👨‍💻 command - .gdrive*

*👑 gdrive බාගත කිරිම*

*_______🔎AI_CHAT_COMMAND💻_______*

*💬 Command - .ai*

*👑 AI විධානයකි*

*_______🔎OWENER_COMMANDS💻_______*

*🤖 Command - .restart*

*🚀 Bot restart කරිමට*

𝚙𝚘𝚠𝚎𝚛 𝚋𝚢 𝚜𝚑𝚊𝚍𝚘𝚠 𝚖𝚍 𝚋𝚢 𝙻𝙰𝙺𝚂𝙷𝙰𝙽 𝚝𝚎𝚊𝚌𝚑
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/8f0d6b5f0f741277f4ef8.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
