const stickermaker = (prefix, botName, ownerName) => {
	return `
「 *${chapinhax.bot}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${chapinhax.bot}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *STICKER MAKER*
  │
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  └─ ❏ ${prefix}ttp`
}
exports.stickermaker = stickermaker
