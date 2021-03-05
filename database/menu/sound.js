const sound = (prefix, ownerBot, botName) => {
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
◪ *SOUND*
  │
  └─ ❏ ${prefix}tts`
}
exports.sound = sound
