import express from 'express';
import { createServer } from 'node:http';

const app = express();
const server = createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Very good at programming</h1>');
});

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});