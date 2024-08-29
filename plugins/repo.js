const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `𝗥𝗘𝗣𝗢 𝗟𝗜𝗡𝗞 -  ❪https://github.com/vipshadowmd/SHADOW-MD ❫

1) 𝙵𝙸𝚁𝚂𝚃 𝙵𝙾𝚁𝙺 𝚃𝙷𝙴 𝚁𝙴𝙿𝙾.
2) 𝚂𝙲𝙰𝙽 𝚃𝙷𝙴 𝚙𝚒𝚛 𝚃𝙷𝙴𝙽 𝚆𝙸𝙻𝙻 𝙲𝙾𝙼𝙴 𝚂𝙴𝚂𝚂𝙸𝙾𝙽 𝙸𝙳.
3) 𝙰𝙽𝙳 𝚂𝙴𝙻𝙴𝙲𝚃 𝙵𝙾𝚁𝙺 𝚁𝙴𝙿𝚘 𝙰𝙽𝙳 𝙳𝙴𝙿𝙻𝙾𝚈 𝚃𝙷𝙴 𝙱𝙾𝚃.
4) 𝙿𝚄𝚃 𝙳𝚈𝙽𝙾 𝚃𝙾 𝙿𝚁𝙾𝙵𝙴𝚂𝚂𝙸𝙾𝙽𝙰𝙻 𝙰𝙽𝙳 𝙿𝚄𝚃 𝙸𝚃 
5) 𝙽𝙾𝚆 𝙴𝙽𝙹𝙾𝚈 𝚃𝙷𝙴 𝚂𝙷𝙰𝙳𝙾𝚆 𝙼𝙳 𝙱𝙾𝚃.

*thank you 🔥👑💗*
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴀᴋꜱʜᴀɴ ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/dbd3d53c674a79cbbd294.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
