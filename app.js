const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/hello', (req, res) => {
  res.json({
    imie: 'Ivan',
    nazwisko: 'Vlasenko',
    numerIndeksu: '71732'
  });
});

app.listen(port, () => {
  console.log(`Server działa na http://localhost:${port}`);
});