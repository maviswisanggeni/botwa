let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085741696465]
│ • Dana [085741696465]
│ • Ovo [085741696465]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6285741696465
╰────

Ini *#caranya untuk Donasi*
*Cara Donasi*:
1.) Beli ke pulsa/ konter terdekat semisal Indomaret
2.) Bilang ke konter terdekat..
"Beli pulsa telkomsel"
3.)Dan terus masukkan nomor kami 085741696465
4.) Jika sudah kirim bukti ke sini.. Terimakasih
*Kalau tidak juga gak papa*👍🏻
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
