import { Email } from '../../shared/types/email.type';
import { getRequestContext } from '../../shared/request-context';

export const createUser = async (payload: { email: Email }): Promise<void> => {
    const { prismaClient } = getRequestContext();

    console.log({ prismaClient });
    console.log({ users: prismaClient.users })

    await prismaClient.users.create({
        data: {
            email: payload.email,
        },
    });
};

export const deleteUser = async (email: Email): Promise<void> => {
    const { prismaClient } = getRequestContext();

    await prismaClient.users.delete({
        where: {
            email,
        },
    });
};
