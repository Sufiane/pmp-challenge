import { Hono } from 'hono';
import userController from './domain/users/users.controller';
import DbClient from '../prisma/client';
import { requestContextStore } from './shared/request-context';

type Bindings = {
    DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', async (c, next) => {
    await requestContextStore.run({
        prismaClient: new DbClient(c.env.DB).getClient(),
    }, next);
});

app.route('/users', userController);

export default app;
