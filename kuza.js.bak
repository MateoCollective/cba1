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
*/


const 
{ 
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
const fs = require("fs")
const brainly = require('brainly-scraper')
const crypto = require('crypto')
const speed = require("performance-now")
const moment = require('moment-timezone')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const axios = require('axios')
const util = require('util')
const request = require('request')
const { exec, spawn } = require('child_process')
const { removeBackgroundFromImageFile } = require('remove.bg')
const client = new WAConnection()
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const toMs = require('ms')
const ms = require('parse-ms')
const os = require('os');
const { fetchJosn, fetchText, kyun } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const simple = require('./lib/simple.js')

    //--Data--//
    let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
    let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
    let welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
    let scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));
    
    //--media--//
    let thumb = fs.readFileSync("./thumb.jpg");

    //--Setting--//

let botname = '*_｢ KuzaBase 0.1 ｣ 冬_*' //NAMA BOT
let lolkey = 'isi'
let zekskey = 'NXRu7zmcmyWTn0YGNzIV0gTFgoP' //Ganti Pake Api Lu Sendiri Biar Limitnya Gak Cepet Abis , Login Di zeks.me Untuk Mendapatkan Api Gratis
let ownername = '*_｢ AbilGanz ✘ ｣_*' //NAMA OWNER
let owner = '6282293295376' // NOMOR OWNER
let symbol = '*☛*'
let faketeks = `*_｢ KuzaBase 0.1 ｣ 冬_*` 

readGc = true; 
readPc = true;
autovn = false;
autoketik = true;

    //--Module.Exports--//
    
module.exports = kuza = async (kuza, mek, _welkom) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const Verived = "0@s.whatsapp.net"
const ytabilbotz = "6282293295376@s.whatsapp.net"
const txt = mek.message.conversation
const botNumber = kuza.user.jid
const ownerNumber = [`${owner}@s.whatsapp.net`, `6282293295376@s.whatsapp.net`, `6282293295376@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await kuza.chats.all()
const groupMetadata = isGroup ? await kuza.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const c = args.join(' ')
const m = simple.smsg(kuza, mek)
const isListMsg = (type == 'listResponseMessage')
const conts = mek.key.fromMe ? kuza.user.jid : kuza.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const isOwner = ownerNumber.includes(sender)
const pushname = mek.key.fromMe ? kuza.user.name : conts.notify || conts.vname || conts.name || '-'
const isAntiLink = isGroup ? antilink.includes(from) : false
const isWelkom = isGroup ? _welkom.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false

 //--Gblk
	    
	    const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {

  let position = null;
  Object.keys(scommand).forEach((i) => {
    if (scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return scommand[position].chats;
  }
};  

const Wib = moment().utcOffset('+0700').format('HH:mm')
const Wita = moment().utcOffset('+0800').format('HH:mm')
const Wit = moment().utcOffset('+0900').format('HH:mm')
const p1 = await kuza.getStatus(sender)
const uptime = process.uptime();
const d = new Date
const locale = 'id'
const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Petang🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Malam🌉'
}
var ase = new Date();
var jamss = ase.getHours();
switch(jamss){
case 0: jamss = "Midnight 🌚"; break;
case 1: jamss = "Midnight 🌚"; break;
case 2: jamss = "Midnight 🌚"; break;
case 3: jamss = "Midnight 🌔"; break;
case 4: jamss = "Midnight 🌔"; break;
case 5: jamss = "Dawn 🌄"; break;
case 6: jamss = "Morning 🌄"; break;
case 7: jamss = "Morning 🌄"; break;
case 8: jamss = "Morning ☀️"; break;
case 9: jamss = "Morning ☀️"; break;
case 10: jamss = "Morning ☀️"; break;
case 11: jamss = "Afternoon 🌞"; break;
case 12: jamss = "Zuhur 🌞"; break;
case 13: jamss = "Afternoon 🌞"; break;
case 14: jamss = "Afternoon 🌞"; break;
case 15: jamss = "Asr 🌞"; break;
case 16: jamss = "Afternoon ☀️"; break;
case 17: jamss = "Evening 🌄"; break;
case 18: jamss = "Maghrib 🌄"; break;
case 19: jamss = "Isha 🌙"; break;
case 20: jamss = "Night 🌙"; break;
case 21: jamss = "Night 🌙"; break;
case 22: jamss = "Midnight 🌙"; break;
case 23: jamss = "Midnight 🌚"; break;
}
var tampilUcapan = "" + jamss;
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
const week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
let po = kuza.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Take Here","listType": "SINGLE_SELECT","sections": list}}, {})
return kuza.relayWAMessage(po, {waitForAck: true})
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

countDownDate = new Date("2022-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
newYear = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
countDownDate = new Date("2022-04-02").getTime();
Ramadhan = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`
var ampun = await kuza.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await kuza.chatRead(jid)
})
var chatss = await kuza.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await kuza.chatRead(jid)
})
if (autovn) {
if (autovn === false) return
await kuza.updatePresence(from, Presence.recording)
} else if (autoketik) {
if (autoketik === false) return
await kuza.updatePresence(from, Presence.composing)
}


    //--Cn--//
    
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
} 
const reply = (teks) => {
kuza.sendMessage(from, teks, text, {quoted:mek})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anu = await kuza.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
kuza.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendMess = (hehe, teks) => {
kuza.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? kuza.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : kuza.sendMessage(from, teks.trim(), extendedText, { quoted: fstatus, contextInfo: { "mentionedJid": memberr } })
}
const Ytabilbotz = fs.readFileSync ('pee.jpg')
const costum = (pesan, tipe, target, target2) => {
kuza.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
let runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
const p2 = '.'


    //--Butt--//


const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
  };
  kuza.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
  );
};
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
kuza.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: fstatus
})
}
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await kuza.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
kuza.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendBug = async (target) => {
await kuza.relayWAMessage(
kuza.prepareMessageFromContent(
target,
kuza.prepareDisappearingMessageSettingContent(0),
{}
),{ waitForAck: true }) 
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await kuza.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
kuza.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: fstatus,
contexInfo: kuza
})
}

// fakenya

const katalog = (teks) => {
res = kuza.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "KuzaBotz😈", "thumbnail": fs.readFileSync('pee.jpg'), "surface": 'CATALOG' }}, {quoted:fstatus})
kuza.relayWAMessage(res)}
const fakeyt = (teks) => { 
kuza.sendMessage(from, teks, text,{contextInfo :{text: 'hi', "forwardingScore": 1000000000, isForwarded: false, sendEphemeral: false, "externalAdReply": { "title": `hallo ${pushname}🗿` , "body": `YT : ABIL BOTZ`, "mediaType": "2", "thumbnailUrl": "https://c.top4top.io/p_2087f30hj1.jpeg", "mediaUrl": "https://tps.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA", "thumbnail": fs.readFileSync('pee.jpg'), "sourceUrl": "", },mentionedJid:[sender]}, quoted : fstatus})};

const fakestatus = (teks) => { kuza.sendMessage(from, teks, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": faketeks, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('pee.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}})}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6282293295376-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} }
const fstatus = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "YT : ABIL BOTZ", 'jpegThumbnail': fs.readFileSync('pee.jpg')}}}

const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu}, ${pushname}`, 
                            orderTitle: `Jangan Lupa Nafas Bro`,
                            thumbnail: Ytabilbotz, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

    //--Cn2--//
    
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
kuza.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}

const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
kuza.sendMessage(to, media, type, { quoted: fstatus, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
kuza.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('Admin Mah Bebas Yekan:v')
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
kuza.groupRemove(from, [sender])
}     

    //--Cn3--//
    
    colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('|| PRIBADI ||', color(command), 'FROM', color(sender.split('@')[0]), 'ARGS :', color(args.length))
if (isCmd && isGroup) console.log('|| GROUP ||', color(command), 'FROM', color(sender.split('@')[0]), 'in', color(groupName), 'ARGS :', color(args.length))
if (!mek.key.fromMe === false) return

kuza.setStatus(`${botname} || Active Time : ${kyun(uptime)} || {'PUBLIC-MODE'}`).catch((_)=>_);

settingstatus = new Date() * 1;

switch (command) {
case 'menu':
case 'help':
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
 listMsg = {
 buttonText: 'ListMenu ️',
 footerText: '🌀 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘈𝘣𝘪𝘭𝘉𝘰𝘵𝘻',
 description: `Hai kak @${sender.split('@')[0]}, Saya ${botname}, saya akan membatu mempermudah kehidupan..seperti membuat sticker dan lain-lain. untuk memulai silahkan ketik Click Button Dibawah yaa 🙏
 
 *_｢ Indonesia Time ｣_*
${symbol} Date : ${date}
${symbol} Wib : ${Wib}
${symbol} Wita : ${Wita}
${symbol} Wit : ${Wit}

*_｢ Bot Info ｣_*
${symbol} Bot Name : ${botname}
${symbol} Owner Name : ${ownername}
${symbol} Prefix : 「${prefix}」
${symbol} Mode : PUBLIC
${symbol} Lib : *Baileys*
${symbol} Calender : *${date}*
${symbol} Time : *${jmn}*
${symbol} Speed : *${latensi.toFixed(4)} second*
${symbol} Runtime : *${kyun(run)}*`,
 sections: [
                     {
                      "title": `Youtube : ABIL BOTZ`,
 rows: [
                          {
                              "title": "☰ Command / All Menu️",
                              "rowId": ".allmenu"
                           },
                           {
                              "title": "☰ Owner / Pemilik Bot️",
                              "rowId": ".owner"
                           },
                           {
                              "title": "☰ Donasi / Sedekah️",
                              "rowId": ".donasi"
                           },
                           {
                              "title": "☰ ScriptBot / Source Code",
                              "rowId": ".script"
                           },
                           {
                              "title": "☰ Speed / Kecepatan Bot️",
                              "rowId": ".speed"
                           },
                           {
                              "title": "☰ Runtime / Waktu Berjalan",
                              "rowId": ".runtime"
                           }
                        ]
                     }],
 listType: 1
}
kuza.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fstatus})
break

case 'allmenu': case 'command':
timestamp = speed();
latensi = speed() - timestamp;
run = process.uptime();
 listMsg = {
 buttonText: 'Buttons',
 footerText: '🌀 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘈𝘣𝘪𝘭𝘉𝘰𝘵𝘻',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan Pilih Salah Satu Button List Dibawah Yaa 🙏
 
 *_｢ Indonesia Time ｣_*
${symbol} Date : ${date}
${symbol} Wib : ${Wib}
${symbol} Wita : ${Wita}
${symbol} Wit : ${Wit}

*_｢ Bot Info ｣_*
${symbol} Bot Name : ${botname}
${symbol} Owner Name : ${ownername}
${symbol} Prefix : 「${prefix}」
${symbol} Mode : PUBLIC
${symbol} Lib : *Baileys*
${symbol} Calender : *${date}*
${symbol} Time : *${jmn}*
${symbol} Speed : *${latensi.toFixed(4)} second*
${symbol} Runtime : *${kyun(run)}*

*_｢ User Info ｣_*
❱ Name : *${pushname}*
❱ Bio : *${p1 ? `${p1.status}` : '-'}*
❱ Nomor : *wa.me/${sender.split("@")[0]}*
❱ Status : *${isOwner ? 'Owner' :  'User'}*`,
 sections: [
                     {
                      "title": `ListButMessage`,
 rows: [
                          {
                              "title": "☰ Menu Group",
                              "rowId": ".groupmenu"
                          },
                          {
                              "title": "☰ Menu Sticker️",
                              "rowId": ".stickermenu"
                           },
                           {
                              "title": "☰ Menu Download",
                              "rowId": ".downloadmenu"
                           },
                           {
                              "title": "☰ Menu Other",
                              "rowId": ".othermenu"
                           },
                           {
                              "title": "☰ Menu Owner",
                              "rowId": ".ownermenu"
                           },
                          {
                              "title": "☰ SewaBot / Rent A Bot️",
                              "rowId": ".sewabot"
                           }
                           
                        ]
                     }],
 listType: 1
}
kuza.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fstatus})
break

case 'groupmenu':
reply(`*_Menu Group_*
${symbol} ${prefix}welcome 1/0
${symbol} ${prefix}antilink 1/0
${symbol} ${prefix}antivirtex 1/0
${symbol} ${prefix}rulesgroup
${symbol} ${prefix}promote
${symbol} ${prefix}demote
${symbol} ${prefix}promoteall
${symbol} ${prefix}demoteall
${symbol} ${prefix}kick
${symbol} ${prefix}add
${symbol} ${prefix}sider
${symbol} ${prefix}resetlinkgc
${symbol} ${prefix}linkgc
${symbol} ${prefix}listonline
${symbol} ${prefix}leave
${symbol} ${prefix}opengc
${symbol} ${prefix}closegc
${symbol} ${prefix}tagall
${symbol} ${prefix}hidetag

*_Created By AbilGanz_*`)
break

case 'stickermenu':
reply(`*_Menu Sticker_*
${symbol} ${prefix}attp
${symbol} ${prefix}ttp
${symbol} ${prefix}stiker
${symbol} ${prefix}doge
${symbol} ${prefix}patrick
${symbol} ${prefix}gawgura
${symbol} ${prefix}stickeranime

*_Created By AbilGanz_*`)
break

case 'downloadmenu':
reply(`*_Menu Download_*
${symbol} ${prefix}play
${symbol} ${prefix}ytsearch
${symbol} ${prefix}tiktokmusic
${symbol} ${prefix}pinterest

*_Created By AbilGanz_*`)
break

case 'othermenu':
reply(`*_Menu Other_*
${symbol} ${prefix}script
${symbol} ${prefix}sewabot
${symbol} ${prefix}donasi
${symbol} ${prefix}owner
${symbol} ${prefix}readmore
${symbol} ${prefix}bay
${symbol} ${prefix}selamatdatang
${symbol} ${prefix}groupbot
${symbol} ${prefix}runtime
${symbol} ${prefix}speed

*_Created By AbilGanz_*`)
break

case 'ownermenu':
reply(`*_Menu Owner_*
${symbol} ${prefix}owner
${symbol} ${prefix}setsymbol
${symbol} ${prefix}bc
${symbol} ${prefix}upswteks
${symbol} ${prefix}upswsticker
${symbol} ${prefix}upswaudio
${symbol} ${prefix}upswvideo
${symbol} ${prefix}upswimage

*_Created By AbilGanz_*`)
break

case 'upswteks':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('Teksnya?')
teks = body.slice(10)
kuza.sendMessage('status@broadcast', teks, MessageType.text)
reply(`Sukses upload status:\n${teks}`)
break

case 'upswsticker':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await kuza.downloadMediaMessage(encmedia)
kuza.sendMessage('status@broadcast', buff, sticker)
}
reply(`Sukses upload sticker`)
break

case 'upswaudio':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await kuza.downloadMediaMessage(encmedia)
kuza.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
}
reply(`Sukses upload audio`)
break

case 'upswvideo':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var konti = body.slice(11)
reply(mess.wait)
var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var mediap = await kuza.downloadAndSaveMediaMessage(enmediap)
const buffer3 = fs.readFileSync(mediap)
kuza.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
reply(`Sukses upload video:\n${konti}`)
break

case 'upswimage':
reply(mess.wait)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
var teksyy = body.slice(11)
reply(mess.wait)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await kuza.downloadAndSaveMediaMessage(enmedia)
buffer = fs.readFileSync(media)
kuza.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
reply(`Sukses upload image:\n${teksyy}`)
break

case 'setsymbol':
	    	if (args.length < 1) return reply('Symbolnya Mana ?')
			if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner)
            symbol = args[0]
            reply(`SUKSES SET SYMBOL KE ${symbol}`)
            break
case 'bc':
					if (!isOwner && !mek.key.fromMe) return  reply(mess.only.owner) 
					if (args.length < 1) return reply('Teksnya?')
					anu = await kuza.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await kuza.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							kuza.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})}
             reply('Sukses Boadcast')
             } else {
             for (let _ of anu) {
             kuza.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST 」*\n\n${body.slice(4)}`,
			"footerText": 'kuzaBot by AbilBotz',
			"buttons": [
			{"buttonId": `${prefix}owner`,
			"buttonText": {"displayText": "OWNER"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )}
             reply('Sukses broadcast')}
        break

case 'play':
reply(mess.wait)
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await kuza.sendMessage(from, ini_buffer, image, { quoted: fstatus, caption: caption })
get_audio = await getBuffer(result.link)
await kuza.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: fstatus })
})
})
break

case 'ytsearch':
reply(mess.wait)
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break

case 'tiktokmusic':
reply(mess.wait)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await kuza.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: fstatus })
break

case 'pinterest':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await kuza.sendMessage(from, ini_buffer, image, { quoted: fstatus })
break

case 'attp':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
kuza.sendMessage(from, buffer, sticker, { quoted: fstatus })
break

case 'ttp':
reply(mess.wait)
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerFromUrl(from, anjay) 
break

case 'sticker':
case 'stiker':
case 's':
reply(mess.wait)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kuza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Yt Abil Botz`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kuza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await kuza.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
kuza.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: fstatus })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break

case 'doge':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'patrick':
case 'pat':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
  sendStickerFromUrl(from, pjr)
}
)
break

case 'gura':
case 'gawgura':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerFromUrl(from, pjr)
}
)
break

case 'anime':
case 'stickeranime':
reply(mess.wait)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerFromUrl(from, pjrr)
}
)
break

case 'sewabot':
 listMsg = {
 buttonText: 'Buttons',
 footerText: '🌀 𝘊𝘳𝘦𝘢𝘵𝘦𝘥 𝘉𝘺 𝘈𝘣𝘪𝘭𝘉𝘰𝘵𝘻',
 description: `Hai kak @${sender.split('@')[0]}, Mau Sewabot Ya?
 Nih Kak Listnya
 
 *Permanen*
 Rp 15.000
 *Perbulan*
 Rp 10.000
 *Perminggu*
 Rp 5.000
 
 *Note : Beli Tinggal Beli Kak Fitur Cek Sendiri Gk Usah Banyak Nanya Atau Basa Basi Soalnya Owner Sibuk 🙏*`,
 sections: [
                     {
                      "title": `ListButMessage`,
 rows: [
                          {
                              "title": "☰ Owner / Pemilik Bot",
                              "rowId": ".owner"
                           }
                        ]
                     }],
 listType: 1
}
kuza.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fstatus})
break

case 'donasi':
case 'sedekah':
reply(`Donasi ${botname}\nQrisAllPayment\nhttps://bit.ly/Allpay\nGopay\nhttps://bit.ly/qrgopay\nOvo\nhttps://bit.ly/qrovo\nDana\nhttp://bit.ly/3HGqiQK`)
break




case 'owner':
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
kuza.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: fstatus, 
})
   break

case 'readmore':
  reply('‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎')
  break

  case 'rulesgroup':
  reply(`*Desc :* \n${groupMetadata.desc}`)
  break

  case 'bay':
  reply(`Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)`)
  break

  case 'selamatdatang':
  reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')
  break

case 'groupbot':
reply(`https://chat.whatsapp.com/CS4ESARec5o476nHesGIDt`)
break

case "runtime":
case "test":
run = process.uptime();
teks = `*${kyun(run)}*`;
reply(teks);
break
case "speed":
case "ping":
timestamp = speed();
latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
child = stdout.toString("utf-8");
ssd = child.replace(/Memory:/, "Ram:");
pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break

case 'sc':
case 'script':
case 'sourcecode':
ini_text = `Script
https://youtube.com/channel/UCJPqI5eVhKPXPL2V8y6pIDA`
reply(ini_text)
break

case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome 1 untuk mengaktifkan\n${prefix}welcome 0 untuk menonaktifkan`)
if ((args[0]) === '1') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === '0') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
}
break
case 'antilink':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiLink) return reply(`Udah aktif`)
  antilink.push(from)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antilink.indexOf(from)
  antilink.splice(anu, 1)
  fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
  reply('*「 ANTILINK DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break
case 'antivirtex':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
  if (!q) return reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
  if (args[0].toLowerCase() === '1'){
  if (isAntiVirtex) return reply(`Udah aktif`)
  antivirtex.push(from)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI AKTIFKAN 」*\n\nYang Ngirim Virtex Bakal Ke Kick!')
  } else if (args[0].toLowerCase() === '0'){
  let anu = antivirtex.indexOf(from)
  antivirtex.splice(anu, 1)
  fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
  reply('*「 ANTI VIRTEX DI NONAKTIFKAN 」*')
  } else {
  reply(`1 untuk mengaktifkan, 0 untuk mematikan`)
}
  break

case 'demoteall':
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
kuza.groupDemoteAdmin(from, members_id)
break

case 'promoteall':
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
   	members_id.push(mem.jid)
  	}
kuza.groupMakeAdmin(from, members_id)
break

case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await kuza.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'resetlinkgc':
 case 'resetlinkgroup':
 case 'revoke':
 if (!isGroup) return reply(mess.only.group)
 if (!isGroupAdmins) return(mess.only.admin)
 if (!isBotGroupAdmins) return(mess.only.Badmin)
  json = ['action', 'inviteReset', from]
 kuza.query({json, expect200: true})
  reply('Sukses Mereset Link Group')
 break

case 'link':
case 'linkgc':
case 'linkgrup' :
case 'linkgroup':
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await kuza.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
kuza.sendMessage(from, yeh, text, { quoted: fstatus })
break

case 'online':
case 'listonline':
case 'here':                
case 'nyimak':
if (!isGroup) return reply(mess.only.group)
 try {
 let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
 let online = [...Object.keys(kuza.chats.get(ido).presences), kuza.user.jid]
 kuza.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: fstatus, contextInfo: { mentionedJid: online }})
 } catch (e) {
 reply(`${e}`)
}
 break

case 'leave':
if (!isGroupAdmins) return reply(mess.only.admin)
  setTimeout( () => {
  kuza.groupLeave(from) 
  }, 2000)
  setTimeout( () => {
  reply('Byee...')
  }, 0)
  break

case 'opengc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
kuza.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'closegc' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
kuza.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kuza.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
kuza.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kuza.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
kuza.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
try {
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await kuza.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Eror, user private acc')
if(inv[0].code == 408) return reply('Eror, user baru saja keluar')
if(inv[0].code == 401) return reply('Eror, Karena Bot Di Block Oleh Target')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await kuza.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Target Sudah Di Didalam Group!')
if(inv[0].code == 403) return reply('Gagal, Karena Di Private')
if(inv[0].code == 408) return reply('Gagal, Karena Target Baru² Saja Keluar')
if(inv[0].code == 401) return reply('Gagal, Karena Bot Di Block Oleh Target')
}
} catch {
return 
}
break
case 'kick' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
kuza.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
kuza.groupRemove(from, mentioned)
}
break

case 'tagall':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `• @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await kuza.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: fstatus
}
kuza.sendMessage(from, options, text)
break



if (isOwner) {
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
	let evaled = await eval(budy.slice(2))
	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
	reply(`${evaled}`)
} catch (err) {
	reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
	return kuza.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: fstatus })
} catch (err) {
	e = String(err)
	reply(e)
}
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}




