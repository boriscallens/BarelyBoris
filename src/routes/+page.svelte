<svelte:head>
	<title>Barely Boris</title>
	<meta name="description" content="The place where Boris puts his projects and experiments"/>
</svelte:head>

<section>
	<h1>Barely</h1>
	<h2>Boris</h2>

	<div class="tagline">Admittedly, only barely so.</div>
	<div class="description">I wanted a place to store my projects and experiments. This is that place</div>
</section>

<style type="css">
	section {
		height: 100%;
		display: grid;
		
		align-content: center;

		font-size: 20rem;
        grid-template-columns: 2ch auto;
		column-gap: var(--size-3);
		grid-template-areas:
			"barely boris"
			"barely tagline"
			"barely description";
    }
	h1 {
		grid-area: barely;
		color: var(--text-inverse-1);
		background-color:var(--brand);
		
		height: 100%;
		word-break: break-all;
		text-transform: uppercase;
		
		font-weight: 900;
		font-family: 'Inconsolata', var(--font-mono), monospace;
		font-size: 27rem;
		line-height: 0.625em;
		letter-spacing: -0.07em;
	}
	h2 {
		grid-area: boris;
		font-size: 8rem;
		color: var(--text-2);
		font-family: 'Inconsolata', monospace;
		align-self: end;
	}
	.tagline{
		grid-area: tagline;
		font-size: var(--font-size-fluid-3);
	}
	.description{
		grid-area: description;
		font-size: var(--font-size-fluid-3);
	}

	/* h1 {
		height: 100%;
		background-color: orange;
		text-transform: uppercase;
		max-width: 2.2ch;
		word-wrap: break-word;

		font-size: 20vh;
		line-height: 0.8em;
		font-family: var(--font-mono);
	} */
</style>
