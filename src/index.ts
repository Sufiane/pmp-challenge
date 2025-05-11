import { Hono } from 'hono'
import userController from './domain/users/users.controller'

const app = new Hono()

app.route('/users', userController)

export default app
