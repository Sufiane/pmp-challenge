import { z } from 'zod';

export const createUserDto = z.object({
    email: z.string().email(),
})
