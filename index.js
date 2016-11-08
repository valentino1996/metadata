var express = require('express');
var multer = require('multer');

var app = express();
upload = multer({ dest: 'uploads/' });
	  

app.use(express.static('./public'));

app.post('/get-file-size', upload.single('file'), function(req, res) {
  res.json({ size: req.file.size });
});

app.listen(process.env.PORT||8080);