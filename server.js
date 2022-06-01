import { create, router, defaults } from 'json-server';

const server = create();
const router = router('db.json');
const middlewares = defaults();
const port = process.env.PORT || 4200;

server.use(middlewares);
server.use(router);

server.listen(port);