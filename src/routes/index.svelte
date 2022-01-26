<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class=flex-cell>
	<h1>Hi there! I'm Boris</h1>
	<h2>Admittedly, only barely so.	</h2>

	<p>I wanted a place to store my projects and experiments. This is that place</p>
</section>

<style>
	h1 {
		margin-bottom: 0;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		align-self: stretch;
	}

	h1 {
		width: 100%;
	}
</style>
