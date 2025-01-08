// place files you want to import through the `$lib` alias in this folder.


import z from 'zod';

export const registrationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().min(4),
    passwordConfirm: z.string().min(6)
}).required({
    email: true,
    name: true,
    password: true,
    passwordConfirm: true
});