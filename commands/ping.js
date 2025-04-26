
export async function pingCommand(message, client) {

    const remoteJid = message.key.remoteJid;

    // Record the start time
    const startTime = Date.now();

    // Send a ping message
    const sentMessage = await client.sendMessage(remoteJid, { text: '𝐊𝐔𝐑𝐀𝐌𝐀-𝐌𝐃 ⚡ : *Pong*' });

    // Calculate the latency
    const endTime = Date.now();
    
    const latency = endTime - startTime;

    // Send the latency result back to the user
    await client.sendMessage(remoteJid, {

        text: `𝐒𝐩𝐞𝐞𝐝: ${latency} 𝐦𝐬\n`,

    });
}

//237689360833@s.whatsapp.net

export default pingCommand;
