let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: MATCHA
Script: @Mavis
Blog: https://mavizx-site.blogspot.com

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @mavizx.id
➥ YouTube:
https://www.youtube.com/channel/UCQu0J5k3T_ql0ydB7kxXNhQ

*Thanks To :*
Quiecto
Nurotomo
Xaykuzax
MRHTZ
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Indosat: 085741696465
╠➥ Dana: 085741696465
╠➥ Ovo: 085741696465
║>Request? Wa.me/6281357302007
╠═〘 MATCHA BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

