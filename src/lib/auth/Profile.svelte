<script lang="ts">
    import { page } from "$app/stores";
    import { LogIn, LogOut } from "lucide-svelte";
    let signedIn = $page.data.session;
</script>

<div data-sveltekit-preload-data="off">
    {#if !signedIn}
        <a href="/auth/signin" class="btn"><LogIn />sign in</a>
    {:else}
        <a href="/auth/signout" title="log out" class="btn"><LogOut />log out</a>
    {/if}
</div>

<style>
    div {
        height:100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
</style>
