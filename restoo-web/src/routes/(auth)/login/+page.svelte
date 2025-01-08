<script lang="ts">
  import { page } from '$app/state';
    import type { PageData, ActionData } from './$types';
    import Icon from "@iconify/svelte";

    let { data, form }: { data: PageData, form: ActionData } = $props();

    let email = page.url.searchParams.get('email');

</script>


<div class="h-screen w-screen bg-slate-100">
    <div class="h-full w-full flex flex-col content-center items-center pt-5">

        <div class="rounded-full w-24 h-24 self-center border border-zinc-200 flex flex-row justify-center content-center items-center p-2 shadow">
            <img src="https://img.icons8.com/nolan/96/food-bar.png" class="w-16 h-16" alt="logo" />
        </div>

        <div class="flex flex-col self-center mt-5 text-center gap-y-4 mb-9 px-3">
            <span class="text-2xl font-bold text-orange-500 italic">Restoo</span>
            <span class="font-semibold text-zinc-700">Bienvenue! Identifiez-vous pour continuer</span>
        </div>
        
        <form method="post" class="flex flex-col w-full gap-y-2">

            {#if form}
                {#if form.error}
                    <div class="flex flex-row px-5 w-full self-center">
                        <div class="flex flex-row gap-x-2 mb-3 w-full justify-center items-center content-center p-2 py-3 rounded-xl bg-red-300">
                            <Icon icon="line-md:alert-twotone" class="text-red-600 w-5 h-5" />
                            <span class="text-red-600">{form.error}</span>
                        </div>
                    </div>
                {/if}
            {/if}

            <div class="mb-4 px-3 flex flex-col">
                <input type="email" name="email" id="email" value="{email ?? ''}" class="form-input" placeholder="Adresse e-mail">
            </div>

            <div class="mb-4 px-3 flex flex-col">
                <input type="password" name="password" id="password" class="form-input" placeholder="Mot de passe">
            </div>

            <div class="mb-4 px-6 flex flex-col">
                <button type="submit" class="bg-orange-500 text-white p-3 rounded-xl mt-3 shadow">
                    Connexion
                </button>
            </div>

            <div class="text-center w-full">
                <span>Pas de compte ? <a href="/registration" class="text-orange-500">Inscrivez-vous</a></span>
            </div>
        </form>
    </div>
</div>
