import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import Pocketbase from 'pocketbase';
import type { TypedPocketBase } from '$lib/server/pocketbase-types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async ({ request, locals: { pb, user } }) => {

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

        try {
            const auth_result = await pb.collection("users").authWithPassword(email, password);
            
            if(auth_result.token){
                redirect(302, "/")
            }
        } catch (error) {
            
        }
    }
}