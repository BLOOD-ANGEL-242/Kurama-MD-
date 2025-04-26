
export async function prem(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "𝚩𝐋𝚯𝚯𝐃 𝚫𝚴𝐆𝚵𝐋";

    const username = message.pushName || "Unknown";

    const t = ` 
╔═════ஜ۩۞۩ஜ═════╗
   ⚡ 𝐊𝐔𝐑𝐀𝐌𝐀-𝚳𝐃 ⚡
╚═════ஜ۩۞۩ஜ═════╝
 
┌───「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」───
│ - 𝗡𝗼𝗺 : 𝐊𝐔𝐑𝐀𝐌𝐀-𝚳𝐃
│ - 𝗩𝗲𝗿𝘀𝗶𝗼𝗻 : 𝟭.𝟬.𝟬
│ - 𝗖𝗿𝗲𝗮𝘁𝗲𝘂𝗿 : 𝚩𝐋𝚯𝚯𝐃 𝚫𝚴𝐆𝚵𝐋
│ - 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝗲𝘀 : 𝟯𝟱 𝗣𝗹𝘂𝗴𝗶𝗻𝘀
│ - 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 : https://whatsapp.com/channel/0029VayOeIbGufIvDPhi6m1X
└───────────────────

         𓊈𝗣𝗥𝗘𝗠-𝗖𝗠𝗗𝗦𓊉
┏━━━━━━━━━━━━━━━━━━━━     
│ ⬢ 𝚌𝚘𝚗𝚗𝚎𝚌𝚝 𝟸𝟹𝟽𝚡𝚡𝚡𝚡𝚡
│ ⬢ 𝚛𝚎𝚌𝚘𝚗𝚗𝚎𝚌𝚝 𝟸𝟹𝟽𝚡𝚡𝚡𝚡𝚡            
│ ⬢ 𝚍𝚒𝚜𝚌𝚘𝚗𝚗𝚎𝚌𝚝 𝟸𝟹𝟽𝚡𝚡𝚡𝚡𝚡        
┗━━━━━━━━━━━━━❍
        

> ©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙱𝙻𝙾𝙾𝙳 𝙰𝙽𝙶𝙴𝙻
    `
;

    await client.sendMessage(remoteJid, {

        image: { url: "menu.png" },

        caption: t,

        contextInfo: {

            participant: '0@s.whatsapp.net',

            remoteJid: 'status@broadcast',

            quotedMessage: { conversation:"𝚩𝐋𝚯𝚯𝐃 𝚫𝚴𝐆𝚵𝐋⚡"}, 

            isForwarded: true,
        },


    });
}   

export default prem;
