const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please provide a name or a link❗*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let desc = `**❮❮ SONG DOWNLOADER ❯❯**

> ➤ TITLE - ${data.title}

> ➤ VIEWS - ${data.views}

> ➤ DESCRIPTION - ${data.description}

> ➤ TIME - ${data.timestamp}

> ➤ AGO - ${data.ago}

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)  
let downloadUrl = down.dl_url

//send audio
await conn.sendMessage(from,{audio:{url: downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"ᴍᴀᴅᴇ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ➣"},{quoted:mek})
}catch(e){
reply(`${e}`)
}
})

//===========video-dl===========

cmd({
    pattern: "video",
    desc: "download video",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("*Please provide a name or a link❗*")
const search = await yts(q)
const data = search.videos[0]
const url = data.url

let des = `**❮❮ VIDEO DOWNLOADER ❯❯**

> ➤ TITLE - ${data.title}

> ➤ VIEWS - ${data.views}

> ➤ DESCRIPTION - ${data.description}

> ➤ TIME - ${data.timestamp}

> ➤ AGO - ${data.ago}

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱʜᴀᴅᴏᴡ-ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:des},{quoted:mek});

//download video

let down = await fg.ytv(url)  
let downloadUrl = down.dl_url

//send video
await conn.sendMessage(from,{video:{url: downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url: downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"ᴍᴀᴅᴇ ʙʏ ꜱʜᴀᴅᴏᴡ ᴍᴅ ➣"},{quoted:mek})
    
}catch(a){
reply(`${a}`)
}
})
