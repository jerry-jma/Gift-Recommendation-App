const express = require('express');
const { retrieveData, addIdeas } = require('./model/dbQUery.js');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/happywife', retrieveData);

app.post('/happywife', addIdeas)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})