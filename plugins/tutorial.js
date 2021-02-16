let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
_https://wa.me/6285741696465_
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

