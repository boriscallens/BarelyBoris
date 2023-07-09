<script lang="ts">
  import { page } from "$app/stores";
    import Navigation from "./Navigation.svelte";
  // let signedIn = $page.data.session;
</script>

<header>
  <div id="logo">Barely Boris!</div>

  <Navigation />

  <div id="avatar">avatar!</div>

  <!-- <div data-sveltekit-preload-data="off">
    {#if !signedIn}
      <a href="/auth/signin" class="buttonPrimary">Sign in</a>
    {:else}
      <a href="/auth/signout" title="sign out">
        avatar!
      </a>
    {/if}
  </div> -->
</header>

<style type="css">
  header {
    height: var(--element-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: var(--space-between);   
  }
</style>
