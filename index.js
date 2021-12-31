// SC NYA JANGAN DI JUAL NGENTOD
//MAKASIH DAH PAKE 
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
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const crypto = require('crypto')  
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const ytsd = require('ytsr')

const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { ythd } = require('./lib/ytdll.js')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const setting = JSON.parse(fs.readFileSync('./setting.json'))

// let
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
var _registered = JSON.parse(fs.readFileSync('./database/user.json'))
// image
tamnel = fs.readFileSync('./stik/thumb.jpeg')
//

banChats = true
offline = false
autorespon = false
ownerNumber = ["62857785356307@s.whatsapp.net","6285158342254@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net","62857785356307@s.whatsapp.net"]
ownerName = 'WolfCodeX'
botName = "CodeXBot"
var creator = '❦︎ 𝗖𝗿𝗲𝗮𝘁𝗲𝗱 𝗕𝘆 𝗖𝗼𝗱𝗲𝗫-𝗧𝗲𝗮𝗺'
targetpc = setting.ownerNumber
owner = setting.owner
fake = setting.fake
numbernye = '0'
waktu = '-'
alasan = '-'
hit_today = []
//
const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
 //>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			hexa.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
//=================================================//
module.exports = hexa = async (hexa, mek) => {
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
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
         const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
         const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
        const q = args.join(' ')
		const botNumber = hexa.user.jid
		const botNumberss = hexa.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await hexa.chats.all()
		const groupMetadata = isGroup ? await hexa.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const conts = mek.key.fromMe ? hexa.user.jid : hexa.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? hexa.user.name : conts.notify || conts.vname || conts.name || '-'
        const isOwner = owner.includes(sender)
		const isMybot = isOwner || mek.key.fromMe

let d = new Date
 let locale = 'en'
  let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
   let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
     let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
          if(time2 < "23:59:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
          if(time2 < "19:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
          if(time2 < "18:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
          if(time2 < "15:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
          if(time2 < "11:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
          if(time2 < "05:00:00"){
          var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}

const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${ucapanWaktu}`,
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
  const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 169,
                            status: 1,
                            surface : 1,
                            message: `CodeXTeam`, 
                            orderTitle: `Hii!`,
                            thumbnail: tamnel, //thumb
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
  //SIMI
  if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${sender}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        hexa.sendMessage(from, `_${sami}_`, text, {thumbnail: tamnel, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
//
await hexa.chatRead(from, "read")
        //MESS
		mess = {
			wait: '⏳Cotto A Minute...',
			success: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = hexa.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*CodeXBot×*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return hexa.relayWAMessage(po, {waitForAck: true})
        }
        
        const runtime = function(seconds) {
               seconds = Number(seconds);
                var d = Math.floor(seconds / (3600 * 24));
                 var h = Math.floor(seconds % (3600 * 24) / 3600);
                  var m = Math.floor(seconds % 3600 / 60);
                   var s = Math.floor(seconds % 60);
                    var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
                     var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
                      var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
                       var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
                  return dDisplay + hDisplay + mDisplay + sDisplay;
                  }
        
        const reply = (teks) => {
            hexa.sendMessage(from, teks, text, {quoted:fstick})
        }
// PEMBATASAN		            
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/user.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const sendButton = async (from, context, fortext, but, mek) => {
        buttonMessages = {
        contentText: context,
        footerText: fortext,
        buttons: but,
        headerType: 1
        }
        hexa.sendMessage(from, buttonMessages, buttonsMessage, {
        quoted: ftrol
        })
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
        const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
        };
        hexa.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
        );
        };
const isRegistered = checkRegisteredUser(sender)
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
hexa.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `𝘏𝘢𝘭𝘭𝘰 𝘒𝘢𝘬 ${pushname} 👋\n𝘒𝘢𝘮𝘶 𝘉𝘦𝘭𝘶𝘮 𝘛𝘦𝘳𝘥𝘢𝘧𝘵𝘢𝘳 𝘋𝘪 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦\n𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘋𝘢𝘧𝘵𝘢𝘳 𝘋𝘦𝘯𝘨𝘢𝘯 𝘊𝘢𝘳𝘢 𝘒𝘭𝘪𝘬 𝘛𝘰𝘮𝘣𝘰𝘭 𝘋𝘪 𝘉𝘢𝘸𝘢𝘩 𝘐𝘯𝘪!`
const daftar2 = '𝘜𝘯𝘵𝘶𝘬 𝘗𝘦𝘯𝘨𝘨𝘶𝘯𝘢 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘔𝘰𝘥 𝘚𝘪𝘭𝘢𝘩𝘬𝘢𝘯 𝘒𝘦𝘵𝘪𝘬 #verify'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `𝗩𝗘𝗥𝗜𝗙𝗬 ✅`,},type: 1,}]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await hexa.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await hexa.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
hexa.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return hexa.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
}
//
        const sendMess = (hehe, teks) => {
            hexa.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? hexa.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : hexa.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            hexa.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            hexa.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
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
                        hexa.sendMessage(to, media, MessageType.sticker,{quoted:mek})
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
                    hexa.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        hexa.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
hexa.groupRemove(from, [sender])
}, 2000);
}
}
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	
let mengt =`CodeXBot`  
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        if (!mek.key.fromMe && banChats === true) return
switch (command) {
case 'jadibot':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    if(mek.key.fromMe) return reply('Tidak bisa jadibot di dalam bot')
    jadibot(reply,hexa,from)
    break
case 'stopjadibot':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    if(mek.key.fromMe)return reply('tidak bisa stopjadibot kecuali owner')
    stopjadibot(reply)
    break
case 'listbot':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'menuakira':
hexa.sendMessage(from, {"contentText": `${ucapanWaktu} kak  *${pushname}*`,"footerText": '_*• Contact Owner*_\n_🪀Whatsapp_ : *wa.me/62857785356307*\n_💌Email_ : *tesheroku123@gmail.com*\n_🎬YouTube_ : *https://bit.ly/31EuQb5*\n_🔫GiThub_ : *https://bit.ly/3GXZZ9n*\n\n\nCodeXBot',
"buttons": [
{buttonId: `.menu`, buttonText: {displayText: 'MENU'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
							"url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "title": "CodeXBot.pptx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕮𝖔𝖉𝖊𝖃𝕭𝖔𝖙ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
  }}, MessageType.buttonsMessage,{ quoted: mek,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://wa.me/62857785356307`}}})
  break
case 'menu':
case 'help':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
thu = await hexa.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}`
hexa.sendMessage(from, { contentText: `${menuh}`, footerText: `
❏ 「 \`\`\`Creator Info\`\`\` 」

• Nama Owner : *${ownerName}*
• Nomor Owner : *${owner}*
• Api : *wa.me/62857785356307*
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`About Bot\`\`\` 」

• Nama Bot : *${botName}*
• Runtime : ${runtime(process.uptime())}
• Total Chat : *${totalchat.length}*
• Link Group : https://chat.whatsapp.com/JycwVlfX2OvG3xQbKMHQli
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`Waktu\`\`\` 」

• WIB :  ${wib} 
• WITA : ${wita}
• WIT : ${wit}
• TANGGAL : ${date}
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦
𝘕𝘰𝘵𝘦 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘉𝘰𝘵 𝘚𝘦𝘣𝘢𝘪𝘬 𝘔𝘶𝘯𝘨𝘬𝘪𝘯, 𝘑𝘢𝘯𝘨𝘢𝘯 𝘋𝘪 𝘚𝘱𝘢𝘮
𝘒𝘢𝘳𝘯𝘢 𝘈𝘬𝘢𝘯 𝘔𝘦𝘯𝘨𝘢𝘬𝘪𝘣𝘢𝘵𝘬𝘢𝘯 𝘓𝘢𝘨 𝘗𝘢𝘥𝘢 𝘚𝘺𝘴𝘵𝘦𝘮 𝘉𝘰𝘵
𝘒𝘢𝘴𝘪𝘩 𝘞𝘢𝘬𝘵𝘶 3 𝘋𝘦𝘵𝘪𝘬 𝘜𝘯𝘵𝘶𝘬 𝘑𝘦𝘥𝘢 𝘉𝘰𝘵 𝘚𝘶𝘱𝘢𝘺𝘢 𝘛𝘪𝘥𝘢𝘬 𝘛𝘦𝘳𝘫𝘢𝘥𝘪𝘓𝘢𝘨!  

𝑾𝒐𝒍𝒇𝑪𝒐𝒅𝒆𝑿 ☆☆
̵`, buttons: [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: '📒MENU' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case 'allmenu':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
hexa.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

❏ 「 \`\`\`Creator Info\`\`\` 」

• Nama Owner : *${ownerName}*
• Nomor Owner : *${owner}*
• Api : *wa.me/62857785356307*
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`About Bot\`\`\` 」

• Nama Bot : *${botName}*
• Runtime : ${runtime(process.uptime())}
• Total Chat : *${totalchat.length}*
• Link Group : https://chat.whatsapp.com/JycwVlfX2OvG3xQbKMHQli
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`Waktu\`\`\` 」

• WIB :  ${wib} 
• WITA : ${wita}
• WIT : ${wit}
• TANGGAL : ${date}
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`OWNER MENU\`\`\` 」
❥︎ ${prefix}off
❥︎ ${prefix}on
❥︎ ${prefix}status
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`MAKER MENU\`\`\` 」
❥︎ ${prefix}sticker
❥︎ ${prefix}swm <author|packname>
❥︎ ${prefix}take <author|packname>
❥︎ ${prefix}fdeface
❥︎ ${prefix}emoji
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`CONVERT MENU\`\`\` 」
❥︎ ${prefix}toimg
❥︎ ${prefix}tomp3
❥︎ ${prefix}tomp4
❥︎ ${prefix}slow
❥︎ ${prefix}fast
❥︎ ${prefix}reverse
❥︎ ${prefix}tourl
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`UPSW MENU\`\`\` 」

❥︎ ${prefix}upswteks
❥︎ ${prefix}upswimage
❥︎ ${prefix}upswvideo
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`FUN MENU\`\`\` 」
❥︎ ${prefix}fitnah
❥︎ ${prefix}fitnahpc
❥︎ ${prefix}kontak
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`TAG MENU\`\`\` 」

❥︎ ${prefix}hidetag
❥︎ ${prefix}kontag
❥︎ ${prefix}sticktag
❥︎ ${prefix}totag
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`DOWNLOAD MENU\`\`\` 」
❥︎ ${prefix}ytsearch <query>
❥︎ ${prefix}igstalk <query>
❥︎ ${prefix}play <query>
❥︎ ${prefix}video <query>
❥︎ ${prefix}ytmp3 <link>
❥︎ ${prefix}ytmp4 <link>
❥︎ ${prefix}ig <link>
❥︎ ${prefix}igstory <username>
❥︎ ${prefix}twitter <link>
❥︎ ${prefix}tiktok <link>
❥︎ ${prefix}tiktokaudio <link>
❥︎ ${prefix}fb <link>
❥︎ ${prefix}brainly <query>
❥︎ ${prefix}image <query>
❥︎ ${prefix}anime <random>
❥︎ ${prefix}pinterest <query>
❥︎ ${prefix}komiku <query>
❥︎ ${prefix}lirik <query>
❥︎ ${prefix}chara_<query>
❥︎ ${prefix}playstore <query>
❥︎ ${prefix}otaku <query>
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`SOUND MENU\`\`\` 」

❥︎ ${prefix}sound
❥︎ ${prefix}sound 1 s/d 60
❥︎ ${prefix}arrahman
❥︎ ${prefix}sholawat
❥︎ ${prefix}araara
❥︎ ${prefix}baka
❥︎ ${prefix}susu
❥︎ ${prefix}home
❥︎ ${prefix}ngaji
❥︎ ${prefix}ngaji2
❥︎ ${prefix}tilawah
❥︎ ${prefix}yasin
❥︎ ${prefix}ayatkursi2
❥︎ ${prefix}playdate
❥︎ ${prefix}iri
❥︎ ${prefix}pale
❥︎ ${prefix}beautiful
❥︎ ${prefix}menyukaiku
❥︎ ${prefix}hallo
❥︎ ${prefix}magic
❥︎ ${prefix}loosinggame
❥︎ ${prefix}loosinginterest
❥︎ ${prefix}yourskin
❥︎ ${prefix}cutmeoff
❥︎ ${prefix}up
❥︎ ${prefix}wanna
❥︎ ${prefix}sowell
❥︎ ${prefix}lucas
❥︎ ${prefix}allnight
❥︎ ${prefix}aeshtetic
❥︎ ${prefix}aeshtetic2
❥︎ ${prefix}aeshtetic3
❥︎ ${prefix}aeshtetic4
❥︎ ${prefix}sad
❥︎ ${prefix}sad2
❥︎ ${prefix}sad3
❥︎ ${prefix}sad4
❥︎ ${prefix}gettinggold
❥︎ ${prefix}beb
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`WIBU MENU\`\`\` 」

❥︎ ${prefix}cry
❥︎ ${prefix}kill
❥︎ ${prefix}hug
❥︎ ${prefix}pat
❥︎ ${prefix}lick
❥︎ ${prefix}kiss
❥︎ ${prefix}bite
❥︎ ${prefix}yeet
❥︎ ${prefix}neko
❥︎ ${prefix}bully
❥︎ ${prefix}bonk
❥︎ ${prefix}wink
❥︎ ${prefix}poke
❥︎ ${prefix}nom
❥︎ ${prefix}slap
❥︎ ${prefix}waifu
❥︎ ${prefix}smile
❥︎ ${prefix}wave
❥︎ ${prefix}awoo
❥︎ ${prefix}blush
❥︎ ${prefix}smug
❥︎ ${prefix}glomp
❥︎ ${prefix}happy
❥︎ ${prefix}dance
❥︎ ${prefix}cringe
❥︎ ${prefix}cuddle
❥︎ ${prefix}highfive
❥︎ ${prefix}shinobu
❥︎ ${prefix}megumin
❥︎ ${prefix}handhold
❥︎ ${prefix}waifu
❥︎ ${prefix}loli
❥︎ ${prefix}husbu
❥︎ ${prefix}milf
❥︎ ${prefix}cosplay
❥︎ ${prefix}wallml
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`ASUPAN MENU\`\`\` 」
❥︎ ${prefix}cogan
❥︎ ${prefix}cecan
❥︎ ${prefix}cecanvietnam
❥︎ ${prefix}cecanrandom
❥︎ ${prefix}hijaber
❥︎ ${prefix}santuy
❥︎ ${prefix}ukhti
❥︎ ${prefix}bocil
❥︎ ${prefix}ghea
❥︎ ${prefix}rika
❥︎ ${prefix}cecanmalaysia
❥︎ ${prefix}cecankorea
❥︎ ${prefix}cecanthailand
❥︎ ${prefix}cecanjapan
❥︎ ${prefix}cecanindonesia
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`PHOTO OXY MENU\`\`\` 」
❥︎ ${prefix}romance
❥︎ ${prefix}shadow <text>
❥︎ ${prefix}cup <text>
❥︎ ${prefix}cup1 <text>
❥︎ ${prefix}burnpaper <text>
❥︎ ${prefix}lovemessage <text>
❥︎ ${prefix}undergrass <text>
❥︎ ${prefix}love <text>
❥︎ ${prefix}coffe <text>
❥︎ ${prefix}woodheart <text>
❥︎ ${prefix}woodenboard <text>
❥︎ ${prefix}summer3d <text>
❥︎ ${prefix}wolfmetal <text>
❥︎ ${prefix}nature3d <text>
❥︎ ${prefix}underwater <text>
❥︎ ${prefix}golderrose <text>
❥︎ ${prefix}summernature <text>
❥︎ ${prefix}fallleaves <text>
❥︎ ${prefix}flamming <text>
❥︎ ${prefix}harrypotter <text>
❥︎ ${prefix}carvedwood <text>
❥︎ ${prefix}bannerlol <text>
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`OTHERS MENU\`\`\` 」

❥︎ ${prefix}self
❥︎ ${prefix}public
❥︎ ${prefix}setthumb
❥︎ ${prefix}settarget
❥︎ ${prefix}setfakeimg
❥︎ ${prefix}setreply
❥︎ ${prefix}ping
❥︎ ${prefix}inspect
❥︎ ${prefix}join
❥︎ ${prefix}caripesan <query>
❥︎ ${prefix}get
❥︎ ${prefix}term <code>
► _x_ <code>
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`JADIBOT MENU\`\`\` 」

❥︎ ${prefix}jadibot_
❥︎ ${prefix}stopjadibot_
❥︎ ${prefix}listbot_
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

❏ 「 \`\`\`VOTE MENU\`\`\` 」

❥︎ ${prefix}voting
❥︎ ${prefix}delvote
❥︎ _vote_
❥︎ _devote_
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦

𝘞𝘰𝘭𝘧𝘊𝘰𝘥𝘦𝘟
`,"footerText": `
𝘕𝘰𝘵𝘦 : 𝘎𝘶𝘯𝘢𝘬𝘢𝘯 𝘉𝘰𝘵 𝘚𝘦𝘣𝘢𝘪𝘬 𝘔𝘶𝘯𝘨𝘬𝘪𝘯, 𝘑𝘢𝘯𝘨𝘢𝘯 𝘋𝘪 𝘚𝘱𝘢𝘮
𝘒𝘢𝘳𝘯𝘢 𝘈𝘬𝘢𝘯 𝘔𝘦𝘯𝘨𝘢𝘬𝘪𝘣𝘢𝘵𝘬𝘢𝘯 𝘓𝘢𝘨 𝘗𝘢𝘥𝘢 𝘚𝘺𝘴𝘵𝘦𝘮 𝘉𝘰𝘵
𝘒𝘢𝘴𝘪𝘩 𝘞𝘢𝘬𝘵𝘶 3 𝘋𝘦𝘵𝘪𝘬 𝘜𝘯𝘵𝘶𝘬 𝘑𝘦𝘥𝘢 𝘉𝘰𝘵 𝘚𝘶𝘱𝘢𝘺𝘢 𝘛𝘪𝘥𝘢𝘬 𝘛𝘦𝘳𝘫𝘢𝘥𝘪𝘓𝘢𝘨!  

𝕮𝖔𝖉𝖊𝖃𝕭𝖔𝖙ꪶ|| ${date}*`,
"buttons": [
{buttonId: `.owner`, buttonText: {displayText: '👤OWNER'}, type: 1},
{buttonId: `.tqto`, buttonText: {displayText: '🎉CREDITS'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "title": "CodeX-Team.hlxs",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕮𝖔𝖉𝖊𝖃𝕭𝖔𝖙ꪶ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
  }}, MessageType.buttonsMessage,{ quoted: mek,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})
  break
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = hexa.contacts[i] != undefined ? hexa.contacts[i].vname || hexa.contacts[i].notify : undefined
inilist.push({
"displayName": 'WolfCodeX',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${hexa.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await hexa.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: floc })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Ownerku, Mau Tanya Apa',
    footerText: `*Jangan Sungkan Sungkan Kak!*`,
    buttons: button,
    headerType: 1
}
await hexa.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: floc})
break
case 'bay':
      reply('Sayonara Buat Yang Udh Di Tanem\n Semoga Harimu Suram Kawand')
      break
case 'selamatdatang':
      reply('Selamat Datang Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kak\n Semoga Betah👏')
      break      
case 'ssweb':
case 'ss':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					hexa.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					break
case 'delvote':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
case 'voting':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
case 'linkwa':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
case 'cogan':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
replly(`⏳Cotto A Minute...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=codexteam`)
wmn = `CodeXBot`
trans = `Jangan Lupa Donasi!`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🌹 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
replly(`⏳Cotto A Minute...`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=codexteam`)
wmn = `CodeXBot`
trans = `Jangan Lupa Donasi!`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🌹 Next' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecanvietnam':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/cewe/vietnam?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hexa.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanrandom':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/asupan/cecan?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hexa.sendMessage(from, buffer, image, {quoted: fgi, caption: ''})
break
case 'hijaber':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/asupan/hijaber?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hexa.sendMessage(from, buffer, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'santuy':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/asupan/santuy?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hexa.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'ukhti':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/asupan/ukty?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hexa.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'bocil':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/asupan/bocil?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hexa.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'ghea':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/asupan/ghea?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hexa.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'rika':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/asupan/rikagusriani?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
buffer = await getBuffer(ini.result.url)
hexa.sendMessage(from, buffer, video, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanmalaysia':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/cewe/malaysia?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hexa.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecankorea':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/cewe/korea?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hexa.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanindonesia':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/cewe/indonesia?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hexa.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanjapan':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/cewe/japan?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hexa.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cecanthailand':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com//api/cewe/thailand?apikey=ZeroYT7`)
replly(`⏳Cotto A Minute...`)
goo = await getBuffer(huft.result.url)
hexa.sendMessage(from, goo, image, {quoted: fgi, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
break
case 'cry':
        case 'kill':
        case 'hug':
        case 'pat':
        case 'lick':
        case 'kiss':
        case 'bite':
        case 'yeet':
        case 'neko':
        case 'bully':
        case 'bonk':
        case 'wink':
        case 'poke':
        case 'nom':
        case 'slap':
        case 'waifu':
        case 'smile':
        case 'wave':
        case 'awoo':
        case 'blush':
        case 'smug':
        case 'glomp':
        case 'happy':
        case 'dance':
        case 'cringe':
        case 'cuddle':
        case 'highfive':
        case 'shinobu':
        case 'megumin':
        case 'handhold':
        if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            reply(mess.wait)
            anu = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
            buffer = await getBuffer(anu.url)
            hexa.sendMessage(from, buffer, image, {quoted: kir, caption: '[ √ ] 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭..'})
            break
case 'waifu':
          case 'loli':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
          if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `�️Next`},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'👤OWNER'},type:1}]
              imageMsg = ( await hexa.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Hii Kak!!', imageMessage: imageMsg,
              contentText:`WolfCodeX`,buttons,headerType:4}
              prep = await hexa.prepareMessageFromContent(from,{buttonsMessage},{quoted: kir})
              hexa.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case 'igstory': 
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'daftar':
case 'verify':
if (isRegistered) return reply('𝘒𝘢𝘮𝘶 𝘚𝘶𝘥𝘢𝘩 𝘛𝘦𝘳𝘥𝘢𝘧𝘵𝘢𝘳 𝘋𝘪 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘉𝘰𝘵 !')
namaUser = args.join(" ")
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
            fs.writeFileSync('./database/user.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
const jancok =`「  𝖵𝖾𝗋𝗂𝖿𝗂𝗄𝖺𝗌𝗂 𝖡𝖾𝗋𝗁𝖺𝗌𝗂𝗅  」 
• 𝑵𝒂𝒎𝒂 : *${pushname}*
•  𝑵𝒐𝒎𝒆𝒓 : *@${sender.split('@')[0]}*
• 𝑺𝒆𝒓𝒊 : *${serialUser}*
• 𝑷𝒆𝒏𝒈𝒈𝒖𝒏𝒂: *${_registered.length}*
──────────── ·﻿ ﻿ ﻿· ﻿ ·﻿ ﻿ ﻿· ﻿✦
𝖲𝗂𝗅𝖺𝗁𝗄𝖺𝗇 𝖪𝖾𝗍𝗂𝗄 #𝗆𝖾𝗇𝗎 𝖴𝗇𝗍𝗎𝗄 𝖬𝖾𝗅𝖺𝗇𝗃𝗎𝗍𝗄𝖺𝗇 !

𝖩𝖺𝗇𝗀𝖺𝗇 𝖫𝗎𝗉𝖺 𝖩𝗈𝗂𝗇 𝖦𝗋𝗎𝖻 : https://chat.whatsapp.com/JycwVlfX2OvG3xQbKMHQli
𝖴𝗇𝗍𝗎𝗄 𝖬𝖾𝗅𝗂𝗁𝖺𝗍 𝖴𝗉𝖽𝖺𝗍𝖾 𝖳𝖾𝗋𝖻𝖺𝗋𝗎 𝖣𝖺𝗋𝗂 𝖢𝗈𝖽𝖾𝖷𝖡𝗈𝗍 
𝖠𝗋𝗂𝗀𝖺𝗍𝗈𝗎`
jancok2 =`${creator}`
but = [
{buttonId:`${prefix}allmenu`, buttonText: {displayText: '📒MENU'}, type: 1},
{buttonId:`${prefix}sewabot`, buttonText: {displayText: '👤OWNER'}, type: 1}
]
sendButMessage(from, jancok, jancok2, but)
hh = fs.readFileSync('./vn/bndr.mp3')
await hexa.sendMessage(from, hh, MessageType.audio, {qouted: mek, mimetype: 'audio/mp4', ptt:true})  
break
case 'caripesan':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q)return reply('pesannya apa bang?')
            let v = await hexa.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await hexa.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
case 'lirik':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
case 'otaku':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            hexa.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
case 'komiku':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
case 'chara':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await hexa.sendMessage(from,li,image,{quoted: mek})
            break
case 'pinterest':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await hexa.sendMessage(from,di,image,{quoted: mek})
            break
case 'playstore':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
case 'on':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
case 'status':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
case 'off':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
case 'get':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
case 'kontag':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
case 'sticktag':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'totag':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'welcome':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'sc':
case 'script':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
reply('*Hai Kak ${pushname}👋*\nBot Ini Menggunakan Script Di Bawah Ini\nhttps://youtu.be/O91DT1pR1ew')
break
case 'antilink':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
case 'fitnah':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            hexa.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
case 'settarget':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
case 'fitnahpc':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await hexa.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await hexa.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
case 'tomp3':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            reply(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'fast':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'slow':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'thxto':
case 'tqto':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
reply(mess.wait)
img = fs.readFileSync('./tqto.jpg')
ini_txt =`THANKS TO

❥︎ 𝘏𝘦𝘹𝘢 ( 𝘉𝘢𝘴𝘦 𝘖𝘳𝘪 )
❥︎ 𝘈𝘬𝘪𝘳𝘢 ( 𝘚𝘤 𝘖𝘳𝘪 )
❥︎ 𝘞𝘰𝘭𝘧𝘊𝘰𝘥𝘦𝘟 ( 𝘗𝘦𝘯𝘨𝘦𝘮𝘣𝘢𝘯𝘨 )
❥︎ 𝘍𝘰𝘹𝘺𝘊𝘰𝘥𝘦𝘟 ( 𝘔𝘺 𝘗𝘢𝘳𝘵𝘯𝘦𝘳 )
❥︎ 𝘊𝘰𝘥𝘦𝘟 𝘛𝘦𝘢𝘮 ( 𝘔𝘺 𝘛𝘦𝘢𝘮)
❥︎ 𝘈𝘭𝘭 𝘊𝘳𝘦𝘢𝘵𝘰𝘳 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱
`
hexa.sendMessage(from, img, image, {quoted: mek, caption: ini_txt})
break
case 'reverse':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            hexa.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
case 'anime':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            reply(mess.wait)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            hexa.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'kontak':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            hexa.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
case 'take':
case 'colong':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await hexa.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, hexa, mek, from)
			break
case 'stikerwm':
case 'stickerwm':
case 'swm':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await hexa.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            hexa.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            hexa.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
case 'upswteks':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!q) return fakestatus('Isi teksnya!')
            hexa.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
case 'upswimage':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
case 'upswvideo':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await hexa.downloadMediaMessage(swsw)
            hexa.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            hexa.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
case 'fdeface':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await hexa.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await hexa.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		hexa.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case 'romance':
case 'shadow':
case 'cup':
case 'cup1':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
case 'bannerlol':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
if (args.length ==0) return reply('Link Nya Mana Tod?')
txtt = args.join (" ")
reply(mess.wait)
hasil = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=codexteam&text=${txtt}`)
nana.sendMessage(from, hasil, image, { quoted: mek, caption: 'Nih Bro Hasilnya' })
break
case 'public':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
case 'self':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
case 'hidetag':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await hexa.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			hexa.sendMessage(from, optionshidetag, text)
			break
case 'ythd':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (args.length === 0) return reply(`Kirim perintah */ythd _linkYt_*`)
            let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
            if (!isLinkks2) return reply(mess.error.Iv)
            try {
            reply(mess.wait)
            ythd(args[0])
           .then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res
            axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
           .then((a) => {
            if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas* : 720p\`\`\`
\`\`\`▢ Size* : ${filesizeF}\`\`\`
\`\`\`▢ Link* : ${a.data}\`\`\`

_Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)

            const captionsYtmp4 = 
`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Kualitas : 720p\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

              sendMediaURL(from, thumb, captionsYtmp4)
              sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))
})		
})
              } catch (err) {
              reply(`eror`)
}
              break 
case 'ytsearch':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
             reply(mess.wait)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await hexa.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}music ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}video ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await hexa.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break                
case 'music':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:mek})
             break         
case 'video':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break
 case 'ytmp3':
case 'ytmp4':
case 'ytsearch':
case 'play':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, ftrol)
if (args.length === 0) return reply(`Example : ${prefix + command} Duka`)
var srch = args.join(' ')
aramas = await yts(srch);
aramat = aramas.all 
var mulaikah = aramat[0].url
try {
yta(mulaikah)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captions = `🎧 *[ PLAY MUSIC ]* 🎧\n*Name* : ${title}\n\n*Audio Type* : MP3\n*Link Download* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim, butuh beberapa menit_\n*_CodeX-Bot_*`
await sendMediaURL(from, thumb, captions)
sendMediaURL(from, dl_link).catch(() => reply('error'))
}) 
})
} catch (err) {
reply(mess.api.error)
}
break
case 'sticker': 
case 'stiker':
case 'sg':
case 's':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await hexa.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await hexa.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
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
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            hexa.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
case 'toimg':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			if (!isQuotedSticker) return reply('??𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			reply(mess.wait)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await hexa.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
case 'ytsearch':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			if (args.length < 1) return reply('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await hexa.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
case 'setreply':
case 'setfake':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
case 'setfakeimg':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
case 'setthumb':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await hexa.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
case 'emoji':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
case 'image':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            reply(mess.wait)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            hexa.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
case 'tiktok':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
		hexa.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
     		.catch(e => console.log(e))
     		break
case 'tiktokaudio':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return fakegroup('Linknya?')
 		reply(mess.wait)
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { audio} = result
            sendMediaURL(from,audio,'')
    		})
     		.catch(e => console.log(e))
     		break
case 'brainly':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			hexa.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
case 'ig':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    hexa.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
case 'igstalk':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
case 'fb':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
case 'term':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
case 'join':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await hexa.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
case'twitter':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
case 'runtime':
case 'test':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
case 'speed':
case 'ping':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
case 'totag':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await hexa.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await hexa.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            hexa.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'tomp4':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
case 'tourl':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await hexa.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
case 'inspect':
if (!isRegistered) return sendButton(from, daftar1, daftar2, daftar3, ftrol)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await hexa.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             hexa.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
default:
if (budy.startsWith('>')){
console.log('Eval Owner>_<', 'green')
if (!isOwner && !itsMe) return reply(mess.only.ownerB)
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted:mek})
} catch(err) {
e = String(err)
reply(e)
}
}

if (budy.startsWith('x')){
try {
return hexa.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (isCmd) {
                    }
	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}



	
    
