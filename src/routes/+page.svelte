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
	section{
		height: 100%;
		display: grid;
		grid-template-columns: min-content auto;
		grid-template-areas:
			"barely boris"
			"barely tagline"
			"barely description";	
		align-content: center;
	}
	h1 {
		grid-area: barely;
		word-break: break-all;
		width: 2ch;
		padding-left: var(--size-1);

		color: var(--text-inverse-1);	

		text-transform: uppercase;
		font-weight: 900;
		font-family: 'Inconsolata', var(--font-mono), monospace;
		font-size: 45vmin;
		line-height: 0.625em;
		letter-spacing: -0.07em;
	}
	h2 {
		grid-area: boris;
		font-size: var(--font-size-fluid-3);
		color: var(--text-2);
		font-family: 'Inconsolata', monospace;
		align-self: end;
	}
	.tagline{
		grid-area: tagline;
		font-size: var(--font-size-fluid-2);
	}
	.description{
		grid-area: description;
		font-size: var(--font-size-fluid-1);
	} 
</style>
