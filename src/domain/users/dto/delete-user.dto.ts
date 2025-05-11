import { z } from 'zod';

export const deleteUserDto = z.object({ email: z.string().email() });
