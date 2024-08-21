const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "put sesson id",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/676999d83adb705b5cd82.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "🤖🔰 Hi SHADOW-MD Is Online Now 💻\n*💻 Owner* - SHADOW MD\n\n*💻 Owner Number* -94767910958\n\n_විධාන මෙනුව ලබා ගැනීමට .menu ලෙස ටයිප් කරන්න._",
SUDO_NB: process.env.SUDO_NB || "ඔයාගෙ owner number එක දෙන්න",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
};
