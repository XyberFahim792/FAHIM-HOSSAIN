module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
✯///////__ᴀssᴀʟᴀᴀᴍᴀʟᴀɪᴋᴜᴍ__//////✯

////______ᴀᴅᴍɪɴ ɪɴғᴏ_____////


✯///__ɴᴀᴍᴇ__ : ғᴀʜɪᴍ ʜᴏssᴀɪɴ__///✯

✯///__ʀᴇʟɪɢɪᴏɴ__:  ɪsʟᴀᴍ ///✯

✯///__ғʀᴏᴍ___: 17+ ✯

✯///__ᴡᴏʀᴋ___: sᴛᴜᴅᴇɴᴛ__✯

✯///__ʀᴇʟᴀᴛɪᴏɴsʜɪᴘ__: sɪɴɢʟᴇ ᴜʟᴛʀᴀ ᴘʀᴏ ᴍᴀx__///✯

✯///__ʜɪᴅᴇ__: 5'9__///✯

✯///__ғʙ ɪᴅ ʟɪɴᴋ__:https://www.facebook.com/Itsmefahim007?mibextid=ZbWKwL

✯///__ᴡᴘ ɴᴜᴍʙᴇʀ__: 01609115850

✯///__ᴡᴇʙ__: ғᴀʜɪᴍ ʜᴏssᴀɪɴ ᴜɴᴋɴᴏᴡɴ.ᴄᴏᴍ
 
✯___________//// • ᴛᴀᴋᴇ ʟᴏᴠᴇ ɢʏᴇs • ////______

✯____////// • ᴛʜᴀɴᴋs ғᴏʀ ᴜsᴀɪɴɢ ғᴀʜɪᴍ ᴀɪ ʙᴏᴛ •___////✯`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100092886789103/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
