export async function repo(message, client) {
    const remoteJid = message.key.remoteJid;

    const repoText = `
    ╔═════ஜ۩۞۩ஜ═════╗
        ⚡𝐊𝐔𝐑𝐀𝐌𝐀-𝚳𝐃⚡
    ╚═════ஜ۩۞۩ஜ═════╝

┏━━━━━━━━━━━━━━❐
┃╭────•
┃│ ❏ 𝙽𝙾𝙼 : 𝙺𝚄𝚁𝙰𝙼𝙰 𝙼𝙳
┃│ ❏ 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 : 𝟷.𝟶.𝟶
┃│ ❏ 𝙳𝙴𝚅 : 𝙱𝙻𝙾𝙾𝙳 𝙰𝙽𝙶𝙴𝙻
┃│ ❏ 𝙲𝙷𝙰𝙽𝙽𝙴𝙻: https://whatsapp.com/channel/0029VayOeIbGufIvDPhi6m1X
┗━━━━━━━━━━━━━❍
┃│❏ 𝙰𝙱𝙾𝙽𝙽𝙴𝚉-𝚅𝙾𝚄𝚂 𝙴𝚃 𝙿𝙰𝚁𝚃𝙰𝙶𝙴𝚉
┃│❏ 𝙺𝚄𝚁𝙰𝙼𝙰 𝙼𝙳 𝙸𝚂 𝚃𝙷𝙴 𝙱𝙴𝚂𝚃
┗━━━━━━━━━━━━━❍
 ©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙱𝙻𝙾𝙾𝙳 𝙰𝙽𝙶𝙴𝙻
`.trim();

    await client.sendMessage(remoteJid, {
        text: repoText
    });
}

export default repo;