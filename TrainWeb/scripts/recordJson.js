var fs = require('fs');
var sd = require('silly-datetime');
var path = require('path');
var record = {};

function startRecord(recordName) {
    var dataPath = path.join(__dirname, '../data/' + recordName + '.json');
    record[recordName] = {start: true, data: []};
    setInterval(() => {
        if (record[recordName]['data'].length != 0) {
            if (!fs.existsSync(dataPath)) {
                return;
            }
            fs.readFile(dataPath, (err, data) => {
                var temp_data = JSON.parse(data) || [];
                record[recordName]['data'].forEach((element) => {
                    temp_data.push(element);
                });
                fs.writeFile(dataPath, JSON.stringify(temp_data), () => {
                    console.log("Data saved.");
                    record[recordName]['data'] = [];
                });
            });
        }
    }, 1000);
}

function isRecordStarted(recordName) {
    return record[recordName] || record[recordName]['start'];
}

function record(data) {
    console.log(JSON.stringify({"record": data, "time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')}));
    record[recordName]['data'].push({"record": data, "time": sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')});
}

module.exports.isRecordStarted = isRecordStarted;
module.exports.startRecord = startRecord;
module.exports.record = record;