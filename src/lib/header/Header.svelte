<script lang="ts">
	import { page } from '$app/stores';
	import { Avatar } from '@skeletonlabs/skeleton';

	let signedIn = $page.data.session;
	let avatarProps = {
		cursor: "cursor-pointer",
		border: "border-4 border-surface-300-600-token hover:!border-primary-500",
		width: "w-12 h-12",
		rounded: "rounded-full",
		src: $page.data.session?.user?.image ?? undefined,
		initials: $page.data.session?.user?.name?.split(' ').map((n) => n[0]).join('') ?? "?",

	};
</script>

<header class="flex h-14">
	<div class="flex-none w-14 p-1">
		<!-- TODO home with logo if I ever get around to making one -->
	</div>

	<nav class="grow text-center">nav</nav>
	<!-- <nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.url.pathname === '/'}><a href="/">Home</a></li>
			<li class:active={$page.url.pathname === '/protected'}><a href="/protected">Protected</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav> -->

	<div class="flex-none w-18 p-1" data-sveltekit-preload-data="off">
		{#if !signedIn}
			<a href="/auth/signin" class="buttonPrimary">Sign in</a>
		{:else }
			<a href="/auth/signout" title="sign out">
				<Avatar {...avatarProps}/>
			</a>
		{/if}
	</div>
</header>