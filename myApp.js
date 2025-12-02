const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
  res.send('¡Helmet está funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
