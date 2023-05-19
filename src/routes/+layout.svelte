<script lang="ts">
  import "@skeletonlabs/skeleton/themes/theme-skeleton.css";
  import "@skeletonlabs/skeleton/styles/skeleton.css";
  import "../app.postcss";
  import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';

  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import Footer from "$lib/footer/Footer.svelte";
  import Header from "$lib/header/Header.svelte";

  inject({ mode: dev ? "development" : "production" });
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
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
