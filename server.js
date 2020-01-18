const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.all('*', async (context) => {
    await handle(context.req, context.res);

    context.res.statusCode = 200;
    context.respond = false;
  });

  server.use(router.routes());

  server.listen(port, () => {
    console.log(`Ready on http://localhost:${port}`);
  });
});
