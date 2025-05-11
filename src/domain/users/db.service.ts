import { prismaClient } from '../../../prisma/client';
import { Email } from '../../shared/types/email.type';

export const createUser = async (payload: { email: Email }): Promise<void> => {
    await prismaClient.users.create({
        data: {
            email: payload.email,
        },
    });
};

export const deleteUser = async (email: Email): Promise<void> => {
    await prismaClient.users.delete({
        where: {
            email,
        },
    });
};
