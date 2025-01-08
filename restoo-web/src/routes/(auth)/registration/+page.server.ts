import type { PageServerLoad } from './$types';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import { superValidate } from "sveltekit-superforms";
import { registrationSchema } from '$lib';
import { zod } from "sveltekit-superforms/adapters";
import { getAdminPbInstance } from '$lib/server';

export const load = (async () => {

    const form = await superValidate({}, zod(registrationSchema));

    return {
        form: form
    };
}) satisfies PageServerLoad;


export const actions: Actions = {
    default: async ({ request }) => {

        const formData = await request.formData();

        const { email, password, name, passwordConfirm } = {
            name: formData.get("name") as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            passwordConfirm: formData.get('passwordConfirm') as string
        }

        const pb = await getAdminPbInstance();

        if (pb === null) {
            throw new Error("No pb instance found");
        }

        let userid = "";

        try {

            const user = await pb.collection("users").create({
                password,
                passwordConfirm,
                email,
                emailVisibility: true,
                verified: true,
                name,
                role: "user"
            });

            userid = user.id

        } catch (error) {

            return fail(400, {
                error: "Une erreur lors de la création de votre compte"
            })
        }


        if (userid) {
            throw redirect(302, `/login?email=${email}`);
        }
    }
}