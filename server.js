const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => {
  console.info(`App listening on http://localhost:${port}`)
});
