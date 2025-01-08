import { getAdminPbInstance } from "$lib/server";
import type { Handle, ServerInit } from "@sveltejs/kit";
import Pocketbase from 'pocketbase';
import { env as envPublic } from '$env/dynamic/public';
import type { TypedPocketBase } from "$lib/server/pocketbase-types";


export const init: ServerInit = async () => {

    const adminPb = await getAdminPbInstance();
    //create admin user

    console.log("init here")
}

export const handle: Handle = async ({ event, resolve }) => {

    event.locals.pb = new Pocketbase(envPublic.PUBLIC_POCKETBASE_URL) as TypedPocketBase;

    try {

        event.locals.pb.authStore.isValid && event.locals.pb.collection('users').authRefresh();

    } catch (_) {

        event.locals.pb.authStore.clear();
    }

    const response = await resolve(event);
    response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie());

    return response;
}
