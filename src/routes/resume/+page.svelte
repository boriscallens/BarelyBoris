<script lang="ts">
	const summaryParagraphs = [
		"My best value is achieved when I can get to know people and their processes thoroughly so I can help them solve problems or discover opportunities. I function well in a team thanks to my experience in most project management processes and tools as they evolved with me throughout my career.",
		"Working in varied industries of mixed sizes has shown me when to focus on being fast and self-steering as well as how to function in highly connected teams and manage complex SLAs and project planning. My most recent achievements involved working with an international team to scale up iChoosr's group buying software to match the company's rapid growth.",
		"We moved from a self-hosted Ruby on Rails application to a fully scalable, easy to manage suite on Azure. We supported customer-facing and back-office portals as well as various third-party integrations, and we grew to support complex localizations, agile product diversification, and steep concurrent load growth. You can ask me anything about C#, SQL, Entity Framework, HTML, TypeScript, vertical slicing, C4 diagrams, the culture map, SvelteKit, or my home lab."
	];

	const workExperience = [
		{
			period: '2023-01 - 2025-12',
			title: 'Principal Engineer',
			company: 'iChoosr',
			location: 'Antwerp',
			description:
				'At iChoosr I had an amazing time bringing the New Horizons platform live and scaling it up. I learned to really appreciate the highly rewarding, fast-paced start-up environment, got familiar with Azure quickly, and had the chance to steer an international team in the last few years of my career.'
		},
		{
			period: '2020-04 - 2022-12',
			title: 'Technical Lead',
			company: 'iChoosr',
			location: 'Antwerp, BE',
			description: 'Technical leadership focused on delivery, alignment, and guiding the platform as the team and product matured.'
		},
		{
			period: '2018-11 - 2020-04',
			title: 'Full-stack Developer',
			company: 'iChoosr',
			location: 'Antwerp, BE',
			description: 'Built across the stack while the product evolved and the team scaled.'
		},
		{
			period: '2013-12 - 2018-11',
			title: 'Senior .net developer',
			company: 'SD Worx',
			location: '',
			description:
				'Responsible for development after the initial build, technical support, and later work on a legacy migration path. I learned the reality of old code bases, multi-tenancy, SQL performance work, and the opportunities with containerized environments.'
		},
		{
			period: '2012-01 - 2012-12',
			title: 'Co-founder',
			company: 'Bojojoing',
			location: '',
			description: 'We created a simple website on the side and needed a VAT number.'
		},
		{
			period: '2007-01 - 2010-08',
			title: 'Jr. .net Developer',
			company: 'Coteng',
			location: '',
			description: 'My first serious solo .net programming project taught me a lot through self-study and iteration.'
		},
		{
			period: '2007-06 - 2007-10',
			title: 'Jr. Internal Development and Technical Support Europe, the Middle East and Africa',
			company: 'FedEx',
			location: '',
			description: 'Internal development and technical support with a migration from MQ to JMS technology.'
		}
	];

	const education = [
		{
			period: '2006-01',
			title: 'Bachelor of Applied Informatics',
			institution: 'Hogeschool Antwerpen',
			description: 'Applied Informatics (2004 - 2006)'
		},
		{
			period: '1998-01',
			title: '',
			institution: 'Xaverius College Borgerhout',
			description: 'Lecture & expressiveness, Drama and Dramatics/Theatre Arts, General (1992 - 1998)'
		}
	];

	const qualifications = ['Software Infrastructure', 'Software Systems Engineering', 'Software Design'];
	const achievements = ['Worked with an international team to scale a platform during rapid growth.'];
</script>

<svelte:head>
	<title>Resume | Boris Callens</title>
	<meta
		name="description"
		content="Resume page for Boris Callens. A software engineer who likes creating software that people love to use."
	/>
</svelte:head>

<section class="resume-page" aria-label="Resume for Boris Callens">
	<aside class="sidebar" aria-label="Profile and summary">
		<div class="profile-card">
			<img class="portrait" src="/portrait.jpg" alt="Portrait of Boris Callens" />

			<div class="identity">
				<h1>Boris Callens</h1>
				<p class="location">Antwerp, BE</p>
				<a href="mailto:boris.callens+linkedin@gmail.com">boris.callens+linkedin@gmail.com</a>
				<a href="https://www.linkedin.com/in/boriscallens" target="_blank" rel="noreferrer">www.linkedin.com/in/boriscallens</a>
			</div>
		</div>

		<div class="summary-card">
			<h2>Summary</h2>

			{#each summaryParagraphs as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>
	</aside>

	<div class="detail-stack">
		<article class="resume-section">
			<header class="resume-header">
				<span class="section-icon" aria-hidden="true">⌂</span>
				<h2>Work experience</h2>
			</header>

			<div class="entries">
				{#each workExperience as experience}
					<article class="entry">
						<div class="entry-top">
							<p class="period">{experience.period}</p>
							<h3>{experience.title}</h3>
							<p class="company">{experience.company}{experience.location ? `, ${experience.location}` : ''}</p>
						</div>

						<div class="entry-body">
							<p>{experience.description}</p>
						</div>
					</article>
				{/each}
			</div>
		</article>

		<article class="resume-section">
			<header class="resume-header">
				<span class="section-icon" aria-hidden="true">⌂</span>
				<h2>Education</h2>
			</header>

			<div class="entries compact-entries">
				{#each education as item}
					<article class="entry compact-entry">
						<div class="entry-top">
							<p class="period">{item.period}</p>
							{#if item.title}
								<h3>{item.title}</h3>
							{/if}
							<p class="company">{item.institution}</p>
						</div>

						<div class="entry-body">
							<p>{item.description}</p>
						</div>
					</article>
				{/each}
			</div>
		</article>

		<article class="resume-section split-section">
			<header class="resume-header">
				<span class="section-icon" aria-hidden="true">⌂</span>
				<h2>Qualifications</h2>
			</header>

			<ul class="chip-list">
				{#each qualifications as item}
					<li>{item}</li>
				{/each}
			</ul>
		</article>

		<article class="resume-section split-section">
			<header class="resume-header">
				<span class="section-icon" aria-hidden="true">⌂</span>
				<h2>Achievements</h2>
			</header>

			<ul class="bullets">
				{#each achievements as achievement}
					<li>{achievement}</li>
				{/each}
			</ul>
		</article>
	</div>
</section>

<style>
	:global(body) {
		background:
			radial-gradient(circle at top left, rgba(121, 119, 158, 0.14), transparent 30%),
			linear-gradient(180deg, #f8f7fb 0%, #f5f4f8 100%);
	}

	.resume-page {
		width: min(1280px, calc(100% - 2rem));
		margin: 0 auto;
		padding: 2rem 0 3rem;
		display: grid;
		grid-template-columns: minmax(280px, 330px) minmax(0, 1fr);
		gap: 2rem;
		align-items: start;
	}

	.sidebar {
		position: sticky;
		top: 1rem;
		display: grid;
		gap: 1.25rem;
	}

	.profile-card,
	.summary-card,
	.resume-section {
		background: rgba(255, 255, 255, 0.88);
		border: 1px solid rgba(115, 122, 145, 0.16);
		box-shadow: 0 22px 50px rgba(25, 31, 46, 0.08);
		backdrop-filter: blur(10px);
	}

	.profile-card {
		min-height: 350px;
		padding: 1.5rem 1.25rem 1.4rem;
		background: linear-gradient(180deg, #6f6882 0%, #686176 100%);
		color: white;
		display: grid;
		justify-items: center;
		align-content: start;
		gap: 1.25rem;
	}

	.portrait {
		width: 155px;
		aspect-ratio: 1;
		object-fit: cover;
		clip-path: polygon(50% 0%, 85% 12%, 100% 50%, 85% 88%, 50% 100%, 15% 88%, 0% 50%, 15% 12%);
		border: 6px solid rgba(255, 255, 255, 0.94);
		box-shadow: 0 16px 30px rgba(0, 0, 0, 0.22);
		background: #fff;
	}

	.identity {
		display: grid;
		justify-items: center;
		gap: 0.55rem;
		text-align: center;
	}

	.identity h1 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 2.75rem);
		line-height: 0.95;
		letter-spacing: -0.05em;
	}

	.identity p,
	.identity a {
		margin: 0;
		font-size: 0.95rem;
		color: inherit;
		text-decoration: none;
	}

	.identity a:hover {
		text-decoration: underline;
	}

	.summary-card {
		padding: 1.15rem 1.1rem 1.25rem;
		color: #313843;
	}

	.summary-card h2,
	.resume-header h2 {
		margin: 0;
		font-size: 1.05rem;
		letter-spacing: 0.03em;
	}

	.summary-card p {
		margin: 0.85rem 0 0;
		font-size: 0.95rem;
		line-height: 1.55;
		color: #51586a;
	}

	.detail-stack {
		display: grid;
		gap: 1.2rem;
	}

	.resume-section {
		padding: 1.15rem 1.2rem 1.2rem;
		border-radius: 0.9rem;
	}

	.resume-header {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid rgba(107, 120, 145, 0.2);
		margin-bottom: 1rem;
	}

	.section-icon {
		display: inline-grid;
		place-items: center;
		width: 1.15rem;
		height: 1.15rem;
		border-radius: 999px;
		color: #6e7587;
		font-size: 0.85rem;
	}

	.entries {
		display: grid;
		gap: 1.1rem;
	}

	.entry {
		display: grid;
		gap: 0.65rem;
	}

	.entry-top {
		display: grid;
		gap: 0.2rem;
	}

	.period {
		margin: 0;
		font-size: 0.8rem;
		color: #7f8695;
	}

	.entry-top h3 {
		margin: 0;
		font-size: 1.65rem;
		line-height: 1.08;
		font-weight: 600;
		letter-spacing: -0.03em;
		color: #1f2530;
	}

	.company {
		margin: 0;
		font-size: 1rem;
		color: #ff6f61;
		justify-self: end;
		text-align: right;
	}

	.entry-body {
		background: rgba(242, 245, 249, 0.95);
		border-radius: 0.65rem;
		padding: 0.9rem 0.95rem;
	}

	.entry-body p {
		margin: 0;
		color: #596273;
		line-height: 1.55;
		font-size: 0.95rem;
	}

	.compact-entry .entry-top h3 {
		font-size: 1.25rem;
	}

	.split-section {
		grid-template-columns: 1fr;
	}

	.chip-list,
	.bullets {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.65rem;
	}

	.chip-list li,
	.bullets li {
		background: rgba(242, 245, 249, 0.95);
		border-radius: 0.65rem;
		padding: 0.85rem 0.95rem;
		color: #596273;
		line-height: 1.45;
	}

	@media (max-width: 960px) {
		.resume-page {
			width: min(100%, calc(100% - 1rem));
			grid-template-columns: 1fr;
		}

		.sidebar {
			position: static;
		}
	}

	@media (max-width: 640px) {
		.resume-page {
			width: min(100%, calc(100% - 0.75rem));
			padding-top: 0.75rem;
		}

		.profile-card {
			min-height: 0;
		}

		.entry-top h3 {
			font-size: 1.35rem;
		}

		.company {
			justify-self: start;
			text-align: left;
		}
	}
</style>
