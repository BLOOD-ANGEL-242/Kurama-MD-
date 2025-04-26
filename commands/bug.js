async function bug(message, client, texts, num) {

    const remoteJid = message.key.remoteJid;

    await client.sendMessage(remoteJid, {

        image: { url: `${num}.png` },

        caption: `> ${texts}`,

        contextInfo: {

            externalAdReply: {

                title: "Join Our WhatsApp Channel",

                body: "𝚩𝐋𝚯𝚯𝐃 𝚫𝚴𝐆𝚵𝐋",

                mediaType: 1, // Image preview

                thumbnailUrl: `https://whatsapp.com/channel/0029VayOeIbGufIvDPhi6m1X`,

                renderLargerThumbnail: false,

                mediaUrl: `${num}.png`,

                sourceUrl: `${num}.png`
            }
        }
    });
}

export default bug;
