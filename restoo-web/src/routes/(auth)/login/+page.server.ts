import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async ({ request }) => {

        const formData = await request.formData();
        const { email, password } = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }

        if(!email || !password) {
            return fail(400,{
                error: "Adresse e-mail et mot de passe requis!"
            })
        }

    }
}