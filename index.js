function start(dateall) {
        var urls = "https://discord.com/api/webhooks/";
        var request = require("request");
        switch (dateall) {
        case "1 8 20 0":
                request({
                        url: urls,
                        method: "POST",
                        json: true, 
                        body: {"head": "hello world"},
                        headers: { "Content-Type": "application/json", }
                });
                break;
        default:

                break;
}}
setInterval(() => {
let date_ob = new Date();
let Hours = date_ob.getHours();
let Minutes = date_ob.getMinutes();
let Seconds = date_ob.getSeconds();
let WEd = date_ob.getDay();
let dateall = WEd+" "+ Hours+" "+Minutes+" "+Seconds;
start(dateall); 
console.log(dateall);
}, 1000);
