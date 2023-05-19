<script lang="ts">
  import { page } from "$app/stores";
  import { Avatar } from "@skeletonlabs/skeleton";
  import Navigation from "./Navigation.svelte";

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
</script>

<header class="flex h-14">
  <div class="flex-none w-14 p-1">
    <!-- TODO home with logo if I ever get around to making one -->
  </div>

  <Navigation />

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