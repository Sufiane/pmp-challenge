import { AsyncLocalStorage } from 'node:async_hooks';
import { PrismaClient } from '../../generated/prisma';


interface RequestContext {
    prismaClient: PrismaClient,
}

export const requestContextStore = new AsyncLocalStorage<RequestContext>();

export const getRequestContext = (): RequestContext => {
    const store = requestContextStore.getStore();

    if (!store) {
        throw new Error('store_not_found')
    }

    return store
}
