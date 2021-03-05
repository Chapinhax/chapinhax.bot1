const meme = (prefix, botName, ownerName) => {
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
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme
  └─ ❏ ${prefix}memeindo`
}
exports.meme = meme
