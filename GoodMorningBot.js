let request = require("request");
const TOKEN = "自行填入";
const CHATID = "自行填入";

function sendTelegram(sendMsg){
    request({
      url: "https://api.telegram.org/bot"+TOKEN+"/sendMessage?chat_id="+CHATID+"                                                    &text="+sendMsg,
      method: "GET"
    }, function(error, response, body){
        if (error || !body){
            return;
        }else{
            console.log(body);
        }
    });
}

function main(){
    const sendMsg = encodeURI("自行輸入訊息");                                                   )
    sendTelegram(sendMsg);
}

main();
