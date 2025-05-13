import { PrismaClient } from '../generated/prisma';
import { PrismaD1 } from '@prisma/adapter-d1';


/*const adapter = new PrismaD1(env.DB);
export const prismaClient = new PrismaClient({ adapter });

const prismaClient = {
    async fetch(db: D1Database) {
        const adapter = new PrismaD1(db);

        return new PrismaClient({ adapter });
    },
};*/

export class DbClient {
    private readonly client: PrismaClient;

    constructor(d1: D1Database) {
        const adapter = new PrismaD1(d1);
        this.client = new PrismaClient({ adapter });

        return this;
    }

    getClient() {
        return this.client;
    }
}

export default DbClient;
