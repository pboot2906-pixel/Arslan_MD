const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0VRODFCRkxBUndLaVNOVzlISWZzdTRxNVM3eTRiU29iaXNJTkMveGVrZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN05JVzBzZWNPMFZBTkc2N3Zzazh5NUJ1YXZ1OFFJYlR0NklQL2hWR0FFRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQmU5cmJGRlF0QXVQS1d1Y2Q2cE1pR21PRTQrdTV4djRQazNCM0NPaDFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQWVtaTU2TFRRZkVhWHEvNzRmcHdQYklTWVBoZUgyaWpibzhjQjVsOWk0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlJNlVtSVc0ODNqWDVJQjVBeWFDYnJYYkFwQWVDNHdNSzJZb05oUFhlR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRLeTcrcnVLcDh0RHp2T2hmU1B0K1FtcU5yby8vRWJHa2NnRXpGSkpVVEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZrU1VBdHJMTHh6enlYRkZ6Und0Qit6SXhrV04wcTl3bm5IVUpybjMwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWitkUTFLSWliVS84U1l1bkdFeVZlV3ZDQkJnSWN4OURSbDRkZnk4TUx5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjUzMlNaSStvQzQyR0JZQlRWbEpkNVowNlFwYVR0M2w2c0tzZTZTckpCL1pBL3Q5YU8yVXF5eGJ0YlB6NTZabjBzV2dqYnR5a2RVRmRsRFhNbHZaM0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6IjhQenBSdnV4RVMwOXRLMW80OTQzMHJHSGRpbEh5QlE4NTFWSmNMSTQxSzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3Nzg0MjE4MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVENTA0OThENjYxRDREOUQ2N0NCNEUwRjdGNDIxNTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTcyMzQzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3Nzg0MjE4MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVBRTQ4RDcwQzM5M0Q1QTI3N0RDQUYxQTM4REUwMTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTcyMzQzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTM3Nzg0MjE4MDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVERUM4RjQwNEM3RTdERTI3RkFERkM3ODFEMTlENEUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTcyMzQzOX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiSEhBVzVYQkIiLCJtZSI6eyJpZCI6IjkzNzc4NDIxODA0OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNyeXN0YWwgU2VyZW5hIiwibGlkIjoiMjA3NjEwNzMzMTcwODE3OjE3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1dieTRFQ0VLZi9qTWNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNUx3eVl6R0VvZ3pRU1RXRFpLdU41Z3lQZmdYd1R6RHY1Qml2d1ArS2xoRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRWFNb1ZTU1RSdHpYeE5LTUR1RXhHZzdQcE5qcEZVaW5Wd1EwVjQwVnNPTlRqZWRMU3VUT3liQzRTaG5SYm9vdEtZWEd6NUJYWC9YU0lYZkpHQUljQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImNUQXgwWVlZUzF4aEQ0NncyS1V6ZlExc29LS3BRc0h6akNXbTF6SXE1QkhtUmNUR3pVaDBHZGx3MGc0QW1KcXI4WVlmbWdsdEhNR3lMT0dUaDNpc0JBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTM3Nzg0MjE4MDQ6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVM4TW1NeGhLSU0wRWsxZzJTcmplWU1qMzRGOEU4dzcrUVlyOEQvaXBZUiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU5NzIzNDM1LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURFNyJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
