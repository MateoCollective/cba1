/* Base Ori : ABILBOTZ
Script Ori : ABILBOTZ
Nama Base : KuzaBase
Nama Script : KuzaBase
Recode : ABILBOTZ
Youtube Author : ABILBOTZ
Youtube Recode : ABILBOTZ
Nama Script Recode : KuzaBase
Versi Script Ori : Masih Base -_-
Versi Script Recode : Masih Base -_-
Created By ABILBOTZ
*/

/* Info Maszeh
Tutor Run Termux Modal Scini
cd /sdcard
cd BaseV2
git clone https://github.com/AbilBotz/node_modules
node .

kalau Dh Ada Modulenya G Ush Git clone Lagi Sung node . Aja 

Tutor Run Heroku
Klen Cek Github Gw Gk Ush Pake Module Tinggal Klen Clonin Aja Recode trs Run Heroku

https://github.com/AbilBotz/KuzaBase

Bukan Untuk Dijual Lagi
Bukan Untuk Di Cap 🗿🤭
*/

const {
WAConnection,
MessageType,
Presence,
Mimetype,
GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const toMs = require('ms')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./kuza.js')
nocache('./kuza.js', module => console.log(`${module} Telah Di Perbarui!`))
require('./main.js')
nocache('./main.js', module => console.log(`${module} Telah Di Perbarui!`))

const starts = async (kuza = new WAConnection()) => {
    kuza.logger.level = 'warn'
    kuza.version = [2,2143,3]
    kuza.browserDescription = ['kuzaBot','Chrome', '3.0']
    console.log(banner)
console.log(color('🌀[ BASE BY ABIL ]'))
    kuza.on('qr', () => {
        console.log(color('[ SCAN ]','red'), color('SCAN QRNYA'))
    })
fs.existsSync('./session.json') && kuza.loadAuthInfo('./session.json')
kuza.on('connecting', () => {
start('2', 'Menghubungkan')
})
kuza.on('open', () => {
success('2', 'CONNECT TO YOUR WHATSAPP WEB')
teks = `https://chat.whatsapp.com/CS4ESARec5o476nHesGIDt` 
 kuza.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('🛑'), color('SUCCESSFUL TO JOINED TO DEVELOPER GRUP')) 
})
await kuza.connect({timeoutMs: 30*1000})
fs.writeFileSync('./session.json', JSON.stringify(kuza.base64EncodedAuthInfo(), null, '\t'))

kuza.on('chat-update', async (message) => {
        require('./kuza.js') (kuza, message, _welkom)
    })
    
    //

kuza.on("group-participants-update", async (anu) => {
				  const isWelkom = _welkom.includes(anu.jid)
				  try {
				  groupMet = await kuza.groupMetadata(anu.jid)
				  groupMembers = groupMet.participants
				  groupAdmins = getGroupAdmins(groupMembers)
				  mem = anu.participants[0]
			      console.log(anu)
			      try {
			        pp_user = await kuza.getProfilePicture(mem)
			      } catch (e) {
			        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
			      }
			      try {
			        pp_grup = await kuza.getProfilePicture(anu.jid)
			      } catch (e) {
			        pp_grup =
			          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
			      }
			      if (anu.action == "add" && mem.includes(kuza.user.jid)) {
			        kuza.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")
			      }
                if (!isWelkom) return
                if (anu.action == "add" && mem.includes(kuza.user.jid)) {
                kuza.sendMessage(anu.jid, "Hai Aku Bot Whatsapp, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk meulai silahkan ketik !menu.", "conversation")}
                if (anu.action == 'add' && !mem.includes(kuza.user.jid)) {
                if (!isWelkom) return
                mdata = await kuza.groupMetadata(anu.jid)
	            num = anu.participants[0]
                groupName = mdata.subject
                memeg = mdata.participants.length
                let v = kuza.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0] 
                teks = `Halo  *@${num.split('@')[0]}*
Selamat Datang Di Grub *${mdata.subject}*
Jangan Lupa Intro :
*Nama :*
*Umur :*
*Gender :*
*Askot :*
*_Semoga Betah Yoo_*`
                buff = await getBuffer(pp_user)
                kuza.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `Jangan Lupa Baca Rules Group Ya`, buttons: [{buttonId: `#rulesgroup`,buttonText:{displayText: 'Rules Group'},type:1},{buttonId: `#menu`,buttonText:{displayText: 'Menu'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		        }
                if (anu.action == 'remove' && !mem.includes(kuza.user.jid)) {
                if (!isWelkom) return                 
                mdata = await kuza.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = kuza.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                out = `Selamat Tinggal @${num.split('@')[0]}\nJangan Gentayangan Yaa`
                buff = await getBuffer(pp_user)
                kuza.sendMessage(mdata.id, { contentText: `${out}`, footerText: `Mari Kita Doakan Bersama Agar Arwahnya Tenang`, buttons: [{buttonId: `!bay`,buttonText:{displayText: 'BYE BEBAN'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
                if (anu.action == 'promote') {
        	    mdata = await kuza.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = kuza.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                pa = `*P R O M O T E D E T E C T E D*\n\nNomor : ${num.split("@")[0]}\nTag : @${num.split("@")[0]}\nGroup : ${mdata.subject}`
                buff = await getBuffer(pp_user)
                kuza.sendMessage(mdata.id, { contentText: `${pa}`, footerText: `*Selamat Karena Telah Di Promote*`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'MENU'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
                if (anu.action == 'demote') {
            	mdata = await kuza.groupMetadata(anu.jid)
	            num = anu.participants[0]
                let w = kuza.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                nani = `*D E M O T E D E T E C T E D*\n\nNomor : ${num.split("@")[0]}\nTag : @${num.split("@")[0]}\nGroup : ${mdata.subject}`
                buff = await getBuffer(pp_user)
                kuza.sendMessage(mdata.id, { contentText: `${nani}`, footerText: `*Jabatan Kamu Sebagai Leluhur Grup Ini Telah Di Copot*`, buttons: [{buttonId: `!menu`,buttonText:{displayText: 'MENU'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
                }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}
                
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log(color('Module', 'green'), color(`'${module} Dipantau Oleh Abil'`, 'cyan'))
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
    
starts()
