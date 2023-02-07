<script>
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";
</script>

{#if ($page.data.session)}
    <div>
        <a href="/name-pairs/{crypto.randomUUID()}/edit">or create a new one</a>
    </div>
{:else}
    <div>
        <span>Anoymously viewing a a list of names</span>
        <button on:click={() => signIn("auth0")}>Sign in to edit</button>
    </div>
{/if}