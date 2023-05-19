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

<nav class="w-full flex justify-center">
  {#each navItems as navItem}
    <a href={navItem.href}
      class="
      h4 cursor-pointer
      transition-colors duration-100
      px-4 flex items-center h-full
      hover:no-underline hover:variant-soft
      border-surface-700"
      class:text-primary-900={$page.url.pathname === navItem.href}
      class:text-primary-500={$page.url.pathname != navItem.href}
      class:border-b-2={$page.url.pathname === navItem.href}
      >{navItem.label}
    </a>
  {/each}
</nav>
