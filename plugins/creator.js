let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  // this.sendContact(m.chat, '62888221449680', 'Yokenza', m)
  this.sendContact(m.chat, '6285741696465', 'Mavis', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
