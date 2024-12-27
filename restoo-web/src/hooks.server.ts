import { getAdminPbInstance } from "$lib/server";
import type { Handle, ServerInit } from "@sveltejs/kit";


export const init: ServerInit = async () => {

    const adminPb = await getAdminPbInstance();
    //create admin user

    console.log("init here")
}