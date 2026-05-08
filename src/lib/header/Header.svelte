<script lang="ts">
  import { page } from "$app/state";
  import Navigation from "./Navigation.svelte";
  let signedIn = $derived(page.data.session);
</script>

<header>
  <div id="logo">Barely Boris!</div>

  <Navigation />

  <div data-sveltekit-preload-data="off">
    {#if !signedIn}
      <a href="/auth/signin" class="buttonPrimary">Sign in</a>
    {:else}
      <a href="/auth/signout" title="sign out">Sign out</a>
    {/if}
  </div>
</header>

<style>
  header {
    height: var(--element-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: var(--space-between);
  }
</style>
