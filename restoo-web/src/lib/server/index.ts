import Pocketbase from "pocketbase";
import { env } from "$env/dynamic/private";
import { env as envPublic } from "$env/dynamic/public"
import { type TypedPocketBase } from "./pocketbase-types";


export async function getAdminPbInstance() {

    const adminPb = new Pocketbase(envPublic.PUBLIC_POCKETBASE_URL) as TypedPocketBase;

    try {
        await adminPb.collection("_superusers").authWithPassword(env.POCKET_BASE_ADMIN_USER, env.POCKET_BASE_ADMIN_PASSWORD);

        return adminPb;
    } catch (error) {
        console.error("an error occured", error)
    }

    return null;
}
