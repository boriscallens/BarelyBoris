<script lang="ts">
  import { page } from "$app/stores";
  import { Avatar, Tab, TabGroup } from "@skeletonlabs/skeleton";

  let signedIn = $page.data.session;
  let avatarProps = {
    cursor: "cursor-pointer",
    border: "border-4 border-surface-300-600-token hover:!border-primary-500",
    width: "w-12 h-12",
    rounded: "rounded-full",
    src: $page.data.session?.user?.image ?? undefined,
    initials:
      $page.data.session?.user?.name
        ?.split(" ")
        .map((n) => n[0])
        .join("") ?? "?",
  };

  const anonymousNavItems = [
		{ label: "Home", href: "/"},
		// { label: "Fashionably Late", href: "/fashionablylate"},
	];
  const authenticatedNavItems = [
    ...anonymousNavItems,
    { label: "Protected", href: "/protected" },
  ];
  const navItems = signedIn ? authenticatedNavItems : anonymousNavItems;
</script>

<header class="flex h-14">
  <div class="flex-none w-14 p-1">
    <!-- TODO home with logo if I ever get around to making one -->
  </div>

  <nav class="tab-group space-y-4 w-full">
    <ul class="tab-list flex justify-center">
			{#each navItems as navItem}
				<li
          class:active={$page.url.pathname === navItem.href}
          class:inactive={$page.url.pathname != navItem.href}
          class="
            tab text-center cursor-pointer
            transition-colors duration-100
            flex-none px-4 py-2">
          <a href="{navItem.href}" class="tab-label hover:no-underline">{navItem.label}</a>
        </li>
			{/each}
		</ul>
  </nav>

  <div class="flex-none w-18 p-1" data-sveltekit-preload-data="off">
    {#if !signedIn}
      <a href="/auth/signin" class="buttonPrimary">Sign in</a>
    {:else}
      <a href="/auth/signout" title="sign out">
        <Avatar {...avatarProps} />
      </a>
    {/if}
  </div>
</header>

<style lang="postcss">
  li.active {
    @apply border-b-2 border-surface-900-50-token;
  }
  li.inactive:hover {
    @apply variant-soft;
  }
</style>
