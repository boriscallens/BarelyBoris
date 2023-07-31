<script lang="ts">
  import "../app.css";

  import { dev } from "$app/environment";
  import { inject as analyticsConfig } from "@vercel/analytics";
  import Navigation from "$lib/header/Navigation.svelte";
  import Profile from "$lib/auth/Profile.svelte";
  import Logo from "$lib/Logo.svelte";
  import Footer from "$lib/footer/Footer.svelte";

  analyticsConfig({ mode: dev ? "development" : "production" });
</script>

<header>
  <Logo />
</header>
<Navigation />
<div id="signIn"><Profile /></div>
<main><slot /></main>
<footer>
  <Footer />
</footer>

<style type="css">
  :global(body) {
    display: grid;
    height: 100%;
    grid-template-rows: var(--size-10) auto var(--size-10);
    grid-template-columns: auto auto var(--size-11);
    grid-template-areas:
      "logo nav signIn"
      "main main main"
      "footer footer footer";
  }

  header {
    grid-area: logo;
    padding-left: var(--size-1);
    padding-top: var(--size-1);
  }

  main {
    grid-area: main;
  }

  #signIn {
    grid-area: signIn;
    padding: var(--size-fluid-1);
  }

  footer {
    grid-area: footer;
  }
</style>
