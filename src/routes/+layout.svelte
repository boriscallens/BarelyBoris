<script lang="ts">
  import "../app.css";

  import { dev } from "$app/environment";
  import { inject as analyticsConfig } from "@vercel/analytics";
  import Navigation from "$lib/header/Navigation.svelte";
  import Profile from "$lib/auth/Profile.svelte";

  analyticsConfig({ mode: dev ? "development" : "production" });
</script>

<header>
  <img src="/barely-a-logo-2.png" alt="Barely a logo" />
</header>
<Navigation />
<div id="signIn"><Profile /></div>
<main><slot /></main>
<footer>footer</footer>

<style type="css">
  :global(body) {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: var(--size-10) auto var(--size-10);
    grid-template-areas:
      "logo nav signIn"
      "main main main"
      "footer footer footer";
    column-gap: var(--size-2);
  }

  header {
    grid-area: logo;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }

  main {
    grid-area: main;
    width: min(100% - 2rem, 50rem);
    margin-inline: auto;
  }

  #signIn {
    grid-area: signIn;
    padding: var(--size-fluid-1);
  }

  footer {
    grid-area: footer;
  }
</style>
