var fs = require('fs');
var sd = require('silly-datetime');
var path = require('path');
var new_ip = [];
var dataPath = path.join(__dirname, '../data/ip.json');
var start = false;

function startRecordIP() {
    start = true;
    setInterval(() => {
        if (new_ip.length != 0) {
            if (!fs.existsSync(dataPath)) {
                return;
            }
            fs.readFile(dataPath, (err, data) => {
                var ip_data = JSON.parse(data) || [];
                new_ip.forEach((element) => {
                    ip_data.push(element);
                });
                fs.writeFile(dataPath, JSON.stringify(ip_data), () => {
                    console.log("IP Data saved.");
                    new_ip = [];
                });
            });
        }
    }, 1000);
}

function recordIP(ip) {
    console.log('' + ip + ": " + sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss'));
    new_ip.push({"ip": ip, "time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')});
}

module.exports.start = start;
module.exports.startRecordIP = startRecordIP;
module.exports.recordIP = recordIP;