import { Hono } from 'hono';
import { createUser, deleteUser, getUser } from './users.service';
import { zValidator } from '@hono/zod-validator';
import { createUserDto } from './dto/create-user.dto';
import { Email } from '../../shared/types/email.type';
import { getUserDto } from './dto/get-user.dto';
import { deleteUserDto } from './dto/delete-user.dto';

const app = new Hono();

app.get('/:email', zValidator('param', getUserDto), (c) => {
    return getUser(Email(c.req.valid('param').email));
});

app.post('/', zValidator('json', createUserDto), async (c): Promise<void> => {
    const body = c.req.valid('json');

    await createUser({ email: Email(body.email) });
});

app.delete('/:email', zValidator('param', deleteUserDto), async (c) => {
    await deleteUser(Email(c.req.valid('param').email));

    return c.json('User deleted.')
});

export default app;
