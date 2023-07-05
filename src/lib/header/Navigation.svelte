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
  const isActive = (href: string) => $page.url.pathname === href;

</script>

<nav>
  {#each navItems as navItem}
    <a href={navItem.href}>{navItem.label}</a>
  {/each}
</nav>
