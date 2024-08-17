const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
reply("🔰📍SHADOW-MD_වෙතින් අපි ඔබව සාදරයෙන් පිලිගන්නෙමු📍🔰\n\n🔰|+++++commands menu+++++|🔰\n\n🖇️ command- .alive 🔖\n\n📍බොට් ඔන්ලයින් දැයි පරික්ශාව📍\n\n🖇️command- .menu 🔖\n\n
📍බොට් විදාන මෙනුව ලබා ගැනිම📍/n/n🖇️command- .song 🔖
📍සිංදු ඩවුන්ලොඩ් කිරිම📍/n/n🖇️command- .video 🔖/n/n📍විඩියො ඩවුන්ලොඩ් කිටිම📍/n/n🔰#SHADOW_MD 💫/n/n⚡SHADOW_MD MAIN OWENER ⚡/n/n🔰Lakshan damayantha 💻✅")}catch(e){
console.log(e)
reply(`${e}`)
}
})
