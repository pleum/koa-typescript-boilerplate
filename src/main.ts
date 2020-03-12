import Koa from 'koa';
import config from './config';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

const server = app.listen(config.serverPort);

server.on('listening', () => {
  console.info(`Listening on port ${config.serverPort}`);
});
