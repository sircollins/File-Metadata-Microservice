'use strict';

var express = require('express');
var cors = require('cors');
const multer = require('multer');
const upload = multer({dest: __dirname + '/public'});
// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });
// my code
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.json({fileName: req.file.originalname, type: req.file.mimetype, fileSize: req.file.size})
} );
//

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
