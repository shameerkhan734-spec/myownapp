const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Jenkins + Docker + Kubernetes');
});

app.listen(3000);
