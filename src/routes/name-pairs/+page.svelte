<script>
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";
</script>

<div>
    <label for="listcode">Fill in the list code to find your partner :D</label>
    <input type="text" placeholder="list code" name="listcode"/>
</div>
{#if ($page.data.session)}
    <div>
        <a href="/name-pairs/{crypto.randomUUID()}/edit">or create a new one</a>
    </div>
{:else}
    <div>
        <span>or sign in to create a new one</span>
        <button on:click={() => signIn("auth0")}>Sign In</button>
    </div>
{/if}

