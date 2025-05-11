import { Email } from '../../shared/types/email.type';
import * as dbService from './db.service';

export const createUser = async (payload: { email: Email }): Promise<void> => {
    await dbService.createUser(payload);
};

// todo typing
export const getUser = async(email: Email)=> {
    throw new Error('not_implemented');
}

export const deleteUser = async (email: Email): Promise<void> => {
    await dbService.deleteUser(email);
}
