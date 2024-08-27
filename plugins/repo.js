const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "bot repo.",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `👾 Hi SHADOW-MD🔰\n\n*🌈 Owner* - SHADOW-MD - Lakshan damayantha\n\n*Repo Link:https://github.com/vipshadowmd/SHADOW-MD👾💯*> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙻𝙰𝙺𝚂𝙷𝙰𝙽 𝚝𝚎𝚊𝚌𝚑*\n\n`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
