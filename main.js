import {createServer} from 'node:http';

const server = createServer((req, res) => {
  res.write('Hello')
  res.end();
});
server.listen('80');