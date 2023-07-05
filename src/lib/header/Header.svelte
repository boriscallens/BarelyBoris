<script lang="ts">
  import { page } from "$app/stores";
  import Navigation from "./Navigation.svelte";

  let signedIn = $page.data.session;
</script>

<header>
  <div>
    <!-- TODO home with logo if I ever get around to making one -->
  </div>

  <Navigation />

  <div data-sveltekit-preload-data="off">
    {#if !signedIn}
      <a href="/auth/signin" class="buttonPrimary">Sign in</a>
    {:else}
      <a href="/auth/signout" title="sign out">
        avatar!
      </a>
    {/if}
  </div>
</header>