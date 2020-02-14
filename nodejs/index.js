const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const crypto = require('crypto');
const { publicKey, privateKey } = require('./keys');

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/', (req, res) => {
  const verifier = crypto.createVerify('sha256');
  verifier.update(JSON.stringify(payload));
  return res.json({ result: verifier.verify(publicKey, req.body.sign, 'base64') });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
