<script lang="ts">
  import { page } from "$app/stores";

  const anonymousNavItems = [
    { label: "Home", href: "/" },
    // { label: "Fashionably Late", href: "/fashionablylate" },
  ];
  const authenticatedNavItems = [
    ...anonymousNavItems,
    { label: "Protected", href: "/protected" },
  ];
  const navItems = $page.data.session ? authenticatedNavItems : anonymousNavItems;
</script>

<nav>
  {#each navItems as navItem}
    <a href={navItem.href} aria-current={$page.url.pathname === navItem.href}>{navItem.label}</a>
  {/each}
</nav>

<style type="css">
  // TODO: round menu at bottom
  
  @media (min-width: 768px) {
    nav {
      display: flex;
      font-size: var(--font-size-h4);
      height: var(--element-height);
    }

    a {
      text-decoration: none;
      line-height: var(--element-height);
      padding: 0px var(--space-between);
      color: var(--text-color);
    }
    a:hover {
      border-bottom: 2px solid var(--border-color);
    }
    [aria-current='true'] {
      border-bottom: 3px solid var(--border-color);
      color: var(--text-color);
    }
  }
  
</style>
