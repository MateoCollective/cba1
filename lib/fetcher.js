const fetch = require('node-fetch')
const fs = require('fs')
const { spawn } = require("child_process")
const ff = require('fluent-ffmpeg')


exports.getBase64 = getBase64 = async (url) => {
    const response = await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' } });
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = await response.buffer();
    const videoBase64 = `data:${response.headers.get('content-type')};base64,` + buffer.toString('base64');
    if (buffer)
        return videoBase64;
};

exports.getBuffer = getBuffer = async (url) => {
	const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
	const anu = fs.readFileSync('./src/emror.jpg')
	if (!res.ok) return { type: 'image/jpeg', result: anu }
	const buff = await res.buffer()
	if (buff)
		return { type: res.headers.get('content-type'), result: buff }
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchText = fetchText = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            // console.log(text)
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

//exports.getBase64 = getBase64;


exports.kyun = (seconds) =>{
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(seconds / (60 * 60));
    var minutes = Math.floor(seconds % (60 * 60) / 60);
    var seconds = Math.floor(seconds % 60);

    return `${pad(hours)}Jam - ${pad(minutes)}Menit -  ${pad(seconds)}Detik`
}
exports.createExif = (pack, auth) =>{
    const code = [0x00,0x00,0x16,0x00,0x00,0x00]
    const exif = {"sticker-pack-id": "com.nino.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
    let len = JSON.stringify(exif).length
    if (len > 256) {
        len = len - 256
        code.unshift(0x01)
    } else {
        code.unshift(0x00)
    }
    if (len < 16) {
        len = len.toString(16)
        len = "0" + len
    } else {
        len = len.toString(16)
    }
    //len = len < 16 ? `0${len.toString(16)}` : len.toString(16)
    const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
    const __ = Buffer.from(len, "hex")
    const ___ = Buffer.from(code)
    const ____ = Buffer.from(JSON.stringify(exif))
    fs.writeFileSync('./sticker/data.exif', Buffer.concat([_, __, ___, ____]), function (err) {
        console.log(err)
        if (err) return console.error(err)
        return `./sticker/data.exif`
    })

}
exports.modStick = (media, nino, mek, from) => {
    out = getRandom('.webp')
    try {
        console.log(media)
        spawn('webpmux', ['-set','exif', './sticker/data.exif', media, '-o', out])
        .on('exit', () => {
            nino.sendMessage(from, fs.readFileSync(out), 'stickerMessage', {quoted: mek})
            fs.unlinkSync(out)
            fs.unlinkSync(media)
        })
    } catch (e) {
        console.log(e)
        nino.sendMessage(from, 'Terjadi keslahan', 'conversation', { quoted: mek })
        fs.unlinkSync(media)
    }
}
