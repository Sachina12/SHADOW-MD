const {cmd , commands} = require('../command')
const fg = require('apy-dylux')
const Yts = require('Yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title")
const search = await Yts(q)
const data = search.videos[0];
const url = data.url

let dese = `
🔰 *SHADOW-MD SONG DOWNLOADER* 🔰

title: ${data.title}
description: ${data.description}
time: ${data.timestamp}
ago: ${data.ago}
views: ${data.views}

MADE BY SHADOW-MD 💻✅
'
await conn.sendmessage(from,{image:{url:data.thumbnail},caption:dese},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio message
awaite conn.sendmessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek});





}catch(e){
console.log(e)
reply(`${e}`)
}
})    
