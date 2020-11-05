const fs = require('fs');
const util = require('util');

console.log( "asaaaaaaa");
util.log("bbbbbbbbbb",__dirname);
fs.readFile(__dirname + '/test.json','utf-8',(err,data) => {
    if (err) return console.error(err);
    console.log("data>>",data);
} );

util.log("----------------------------------------");
const msgfile = __dirname + '/message.txt';
fs.writeFileSync(msgfile,'hello node js2', (err) => {
    if (err) throw err;
    util.log('This file was saved!');
});

let data2 = fs.readFileSync(msgfile,'utf-8')
util.log("data2>>",data2);
util.log("data2============================================")
return;
