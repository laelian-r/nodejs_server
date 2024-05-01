import { createReadStream } from 'node:fs';
import {createServer} from 'node:http';

const server = createServer((req, res) => {
  const file = createReadStream('index.html');
  file.pipe(res, {end: false});
  file.on('end', () => {
    res.end();
  });
});
server.listen('80');