<script lang="ts">
  import { page } from "$app/stores";
  import { Home, FileLock } from "lucide-svelte";

  const anonymousNavItems = [
    { label: "Home", href: "/", icon: Home },
    // { label: "Fashionably Late", href: "/fashionablylate" },
  ];
  const authenticatedNavItems = [
    ...anonymousNavItems,
    { label: "Protected", href: "/protected", icon: FileLock },
  ];
  const navItems = $page.data.session
    ? authenticatedNavItems
    : anonymousNavItems;
</script>

{#if navItems.length > 1}
  <nav>
    {#each navItems as navItem}
      <a href={navItem.href} aria-current={$page.url.pathname === navItem.href}>
        <svelte:component this={navItem.icon} />
        {navItem.label}
      </a>
    {/each}
  </nav>
{/if}

<style type="css">
  nav {
    grid-area: nav;
    display: flex;
    justify-content: space-around;
  }
  a {
    display: flex;
    align-items: center;
    column-gap: var(--size-2);
    color: var(--text-2);
    text-decoration: none;
  }
  a[aria-current="true"] {
    color: var(--text-1);
    border-bottom: var(--size-0);
    border-bottom-style: solid;
    border-bottom-color: var(--brand);
  }
</style>
