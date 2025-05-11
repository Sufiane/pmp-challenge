import { Brand } from 'effect';

export type Email = string & Brand.Brand<'Email'>

export const Email = Brand.refined<Email>(
    (payload) => {
        const EMAIL_REGEX = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        const regex = new RegExp(EMAIL_REGEX, 'i');

        return regex.test(payload);
    },
    (payload) => Brand.error(`Expected ${payload} to be a valid email.`),
);
