const app = require('express')();

app.get('/', function (req, res, next) {
  res.send('Hello world!');
});

app.listen(4041, function () {
  console.log('Listening on *4041');
});
