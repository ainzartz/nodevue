const express = require('express');
const app = express(),
      test_json = require('./test/test.json');

app.use(express.static('public'));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.get('/',(req, res) => {
   // res.send("hello NodeJS !!");
   res.render('index',{name:'David Lee'});

});

app.get('/test/:email',(req,res) => {
    test_json.email = req.params.email;
    test_json.aa    = req.query.aa;
    res.json(test_json);
})
const server = app.listen(7000, function(){
    console.log("express started on port 7000");
});