import { z } from 'zod';

export const getUserDto = z.object({ email: z.string().email() });
