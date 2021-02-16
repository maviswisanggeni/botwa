let handler = async(m, { conn, participants, text, usedPrefix }) => {
    if (!text) return conn.reply(m.chat, `ketik: ${usedPrefix}exp <nomor> | <jumlah>`)

    let [who, jumlah] = text.split `|`
    if (!who) m.reply('Kepada Siapa ?')
    if (!jumlah) m.reply('Jumlah ?')

    global.DATABASE._data.users[m.mentionedJid].exp = JSON.parse(jumlah)
    m.reply('Done!')
}
handler.help = ['exp <jumlah>']
handler.tags = ['owner']
handler.command = /^exp$/i
handler.owner = true

module.exports = handler