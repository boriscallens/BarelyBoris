<script lang="ts">
  import "../app.css";

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Footer from "$lib/footer/Footer.svelte";

  inject({ mode: dev ? "development" : "production" });
</script>

<header>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <slot />
</main>

<Footer />

<style type="css">
  :global(html, body) {
    height: 100%;
    margin: 0;
  }
  :global(#svelte) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
