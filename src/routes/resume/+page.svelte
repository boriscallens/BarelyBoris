<script lang="ts">
	import {
		BadgeCheck,
		BriefcaseBusiness,
		FolderGit2,
		GraduationCap,
		Languages as LanguagesIcon,
		Mail,
		ExternalLink,
		MapPin
	} from '@lucide/svelte';

	const headline = 'Tech Lead, Senior Full Stack, Principal Engineer';

	const summaryParagraphs = [
		"I'm a software engineer who enjoys building the right systems to push the envelope. Show me what you do and I'll find the system that pushes you forwards. I work well in driven teams and have experience across project environments, from small self-steering teams to large, highly connected organisations.",
		"Varied work environments have shown me when to take ownership and run, and when to slow down to bring a team together. Most recently I worked in an international team at iChoosr to scale its group buying software to match the company's rapid growth. We moved from a self-hosted Ruby on Rails application to a fully scalable, easy to manage suite on Azure, supporting customer-facing and back-office portals as well as various third-party integrations while growing to support complex localizations, agile product diversification, and steep concurrent load growth.",
		"I'm most comfortable owning a feature from start to finish: understanding the problem, designing the solution, building and deploying it with others, then seeing how it lands in real life. I enjoy sharing what I've learned and mentoring motivated people and teams. You can ask me anything about C#, SQL, Entity Framework, HTML, TypeScript, vertical slicing, C4 diagrams, the culture map, SvelteKit, or my home lab."
	];

	const workExperience = [
		{
			period: '2023-01 - 2025-12',
			title: 'Principal Engineer',
			company: 'iChoosr',
			description:
				'At iChoosr I had an amazing time bringing the New Horizons platform live and scaling it up. I learned to really appreciate the highly rewarding, fast-paced start-up environment, got familiar with Azure. As a principal engineer, I had the chance to steer the platform in its final iteration and draw the first lines for its successor.',
			tags: ['Azure', 'Azure Entra ID', 'Solution architecture', 'Technical leadership', 'ISO 27001']
		},
		{
			period: '2020-04 - 2022-12',
			title: 'Technical Lead',
			company: 'iChoosr',
			description: 'Was selected as Technical Lead representing the Belgium team. Together with the Dutch and Polish ones we gathered periodically to tackle overarching problems that became apparent now the software was slowly maturing. We extracted satellite APIs based on the same domains as the team structure was set up. We extended the platform with another UI and set up various integrations with our external suppliers and communities.',
			tags: ['Team leadership', 'API design', 'System integrations', 'Technical writing', 'C4', 'ERD', 'ADR']
		},
		{
			period: '2018-11 - 2020-04',
			title: 'Full-stack Developer',
			company: 'iChoosr',
			description: 'Helped building out the new platform in an international team. In a team of full stack developers we all were dispersed amongst our business users and support employees to discover the right features and bring them forward for analysis, planning, development and finally deployment. We created a central monolithic API and used it for the three different frontends for various user groups both internal and external.',
			tags: ['C#', '.NET', 'Vertical slicing', 'Elasticsearch', 'EF Core', 'MassTransit', 'Azure Service Bus', 'Azure SQL', 'Containerization', 'ALM']
		},
		{
			period: '2013-12 - 2018-11',
			title: 'Senior .net developer',
			company: 'SD Worx',
			description:
				'Responsible for development after the initial setup of the Flex Income Plan proof of concept. Supported technical operations and provided last line user support. Later helped in the team responsible for the MyWorkAndMe platform and helped embedding the legacy C++ XBlox application into an ASP.net MVC website. I learned the reality of old code bases, multi-tenancy, SQL performance work, and the opportunities with containerized environments.',
			tags: ['C#', 'ASP.NET MVC', 'Advanced SQL Server', 'Legacy modernisation']
		},
		{
			period: '2010-03 - 2013-12',
			title: '.net developer',
			company: 'Vanbreda International',
			description:
				'As full-time developer I was part of a medium-sized, strong team that brought .net projects from requirement document to product backlog, sprint backlog, testing and implementation. We owned our products and their support, and a horizontal hierarchy allowed tight collaboration with business analysts and product owners. I grew most in team collaboration, application lifecycle management, and communication, and above all learned the value of a real team and pair programming.',
			tags: ['C#', '.NET', 'Agile', 'ALM']
		},
		{
			period: '2012',
			title: 'Co-founder',
			company: 'Bojojoing',
			description: 'We created a simple website for a real estate initiative next to Berchem Station. My friend and I needed a VAT number.',
			tags: ['Web development', 'Entrepreneurship']
		},
		{
			period: '2010-02',
			title: 'Jr Analyst Programmeur',
			company: 'Prosteps',
			description: 'Analyst-programmer at a small Antwerp software house building POS, ERP, and web applications for retail and logistics clients.',
			tags: ['Delphi']
		},
		{
			period: '2007-11 - 2010-01',
			title: 'Jr. .net Developer',
			company: 'Coteng',
			description: 'My first serious solo .NET programming project taught me a lot through self-study and iteration. I built a website in ASP.net MVC 1.0 that could stream in lots of color swatches generated by a proprietary COM object and learned using Lucene for fast search.',
			tags: ['ASP.NET MVC', 'Lucene', 'COM interop']
		},
		{
			period: '2007-06 - 2007-10',
			title: 'Jr. Internal Development and Technical Support EMEA',
			company: 'FedEx',
			description: 'Internal development and technical support with a migration from MQ to JMS technology.',
			tags: ['IBM MQ', 'JMS']
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

	const skills = ['Software Infrastructure', 'Software Systems Engineering', 'Software Design'];

	const languages = [
		{ name: 'Dutch', level: 'Native or bilingual' },
		{ name: 'English', level: 'Full professional' },
		{ name: 'French', level: 'Elementary' }
	];

	const projects: {
		period: string;
		name: string;
		description: string;
		href?: string;
		linkLabel?: string;
	}[] = [
		{
			period: '2018-11 - 2025-12',
			name: 'New Horizons',
			description:
				"A complete rewrite of iChoosr's software stack that could keep up with their rapidly scaling products, diversified markets, and cultures while keeping support for the tailor-made expectations of existing customers.",
			href: 'https://samenoverstappen.be/energie/ichoosr/',
			linkLabel: 'samenoverstappen.be'
		},
		{
			period: '2014-07',
			name: 'HR Webworx',
			description: 'Modular HR software for the automation of administrative processes, talent management, and recruitment.',
			href: 'https://www.sdworx.be/en/hr/hr-software/applications/hr-webworx',
			linkLabel: 'sdworx.be'
		},
		{
			period: '2013-12',
			name: 'Flex Income Plan',
			description: 'SD Worx project I was the only developer on after the initial build, covering development and technical support.',
			href: 'https://www.sdworx.be/en/hr/reward/services/flex-income-plan',
			linkLabel: 'sdworx.be'
		},
		{
			period: '2012',
			name: 'X-Antwerp',
			description: 'A quick, simple website for our little project on the side.',
			href: 'http://www.x-antwerpen.be/',
			linkLabel: 'x-antwerpen.be'
		}
	];
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
			<div class="portrait-ring">
				<img class="portrait" src="/portrait.jpg" alt="Portrait of Boris Callens" />
			</div>
			<div class="identity">
				<h1>Boris Callens</h1>
				<p class="headline">{headline}</p>
				<p class="location">
					<MapPin class="location-icon" aria-hidden="true" size={16} strokeWidth={2} />
					Historical Center of Antwerp, BE
				</p>
				<a class="contact-link" href="mailto:boris.callens+linkedin@gmail.com">
					<Mail class="contact-icon" aria-hidden="true" size={16} strokeWidth={2} />
					boris.callens+linkedin@gmail.com
				</a>
				<a class="contact-link" href="https://www.linkedin.com/in/boriscallens" target="_blank" rel="noreferrer">
					<ExternalLink class="contact-icon" aria-hidden="true" size={16} strokeWidth={2} />
					www.linkedin.com/in/boriscallens
				</a>
			</div>
		</div>
		<div class="summary-card">
			<h2>Summary</h2>

			{#each summaryParagraphs as paragraph (paragraph)}
				<p>{paragraph}</p>
			{/each}
		</div>
	</aside>

	<div class="detail-stack">
		<article class="resume-section">
			<header class="resume-header">
				<BriefcaseBusiness class="section-icon" aria-hidden="true" size={18} strokeWidth={2} />
				<h2>Work experience</h2>
			</header>

			<div class="entries">
				{#each workExperience as experience (experience.period)}
					<article class="entry">
						<p class="period">{experience.period}</p>
						<h3>{experience.title}</h3>
						<p class="company">{experience.company}</p>
						<span class="description">{experience.description}</span>
						<ul class="pill-list">
							{#each experience.tags as tag (tag)}
								<li>{tag}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</article>

		<article class="resume-section">
			<header class="resume-header">
				<FolderGit2 class="section-icon" aria-hidden="true" size={18} strokeWidth={2} />
				<h2>Projects</h2>
			</header>

			<div class="projects">
				{#each projects as project (project.name)}
					<article class="project">
						<div class="project-heading">
							<h3>{project.name}</h3>
							<p class="period">{project.period}</p>
						</div>
						<span class="description">{project.description}</span>
						{#if project.href}
							<a class="project-link" href={project.href} target="_blank" rel="noreferrer">
								<ExternalLink aria-hidden="true" size={14} strokeWidth={2} />
								{project.linkLabel}
							</a>
						{/if}
					</article>
				{/each}
			</div>
		</article>

		<article class="resume-section">
			<header class="resume-header">
				<GraduationCap class="section-icon" aria-hidden="true" size={18} strokeWidth={2} />
				<h2>Education</h2>
			</header>

			<div class="entries compact-entries">
				{#each education as item (item.period)}
					<article class="entry compact-entry">
						<p class="period">{item.period}</p>
						{#if item.title}
							<h3>{item.title}</h3>
						{/if}
						<p class="company">{item.institution}</p>
						<span class="description">{item.description}</span>
					</article>
				{/each}
			</div>
		</article>

		<article class="resume-section">
			<header class="resume-header">
				<BadgeCheck class="section-icon" aria-hidden="true" size={18} strokeWidth={2} />
				<h2>Skills</h2>
			</header>

			<ul class="chip-list">
				{#each skills as skill (skill)}
					<li>{skill}</li>
				{/each}
			</ul>
		</article>

		<article class="resume-section">
			<header class="resume-header">
				<LanguagesIcon class="section-icon" aria-hidden="true" size={18} strokeWidth={2} />
				<h2>Languages</h2>
			</header>

			<ul class="language-list">
				{#each languages as language (language.name)}
					<li>
						<span class="language-name">{language.name}</span>
						<span class="language-level">{language.level}</span>
					</li>
				{/each}
			</ul>
		</article>
	</div>
</section>

<style>
	:global(body) {
		--resume-ink: #313843;
		--resume-body: #596273;
		--resume-meta: #7f8695;
		--resume-title: #1f2530;
		--resume-inset: rgba(242, 245, 249, 0.95);
		--resume-card: rgba(255, 255, 255, 0.88);
		--resume-border: rgba(115, 122, 145, 0.16);
		--resume-divider: rgba(107, 120, 145, 0.2);
		--resume-shadow: rgba(25, 31, 46, 0.05);
		background:
			radial-gradient(circle at top left, rgba(121, 119, 158, 0.14), transparent 30%),
			linear-gradient(180deg, #f8f7fb 0%, #f5f4f8 100%);
		color: var(--resume-ink);
	}

	@media (prefers-color-scheme: dark) {
		:global(body) {
			--resume-ink: var(--text-2);
			--resume-body: var(--text-2);
			--resume-meta: var(--text-2);
			--resume-title: var(--text-1);
			--resume-inset: var(--surface-3);
			--resume-card: var(--surface-2);
			--resume-border: color-mix(in srgb, var(--text-2) 22%, transparent);
			--resume-divider: color-mix(in srgb, var(--text-2) 28%, transparent);
			--resume-shadow: color-mix(in srgb, #000 45%, transparent);
			background:
				radial-gradient(circle at top left, color-mix(in srgb, var(--brand) 12%, transparent), transparent 30%),
				var(--surface-1);
			color: var(--text-1);
		}
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
		background: var(--resume-card);
		border: 1px solid color-mix(in srgb, var(--resume-body) 20%, transparent);
		box-shadow: 0 10px 24px color-mix(in srgb, var(--resume-title) 8%, transparent);
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

	.portrait-ring {
		position: relative;
		width: 250px;
		aspect-ratio: 1;
		padding: 0.5rem;
		box-sizing: border-box;
		display: grid;
		place-items: center;
	}

	.portrait-ring::before {
		content: '';
		position: absolute;
		inset: 0;
		background: #fff;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	}

	.portrait {
		width: 100%;
		height: 100%;
		object-fit: cover;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	}

	.identity {
		display: grid;
		justify-items: center;
		gap: 0.55rem;
		text-align: center;
	}

	.contact-link {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		justify-self: start;
		text-decoration: none;
		color: inherit;
	}

	.identity h1 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 2.75rem);
		line-height: 0.95;
		letter-spacing: -0.05em;
	}

	.identity .headline {
		margin: 0.55rem 0 0;
		font-size: 0.8rem;
		letter-spacing: 0.09em;
		text-transform: uppercase;
		opacity: 0.85;
	}

	.identity p,
	.identity a {
		margin: 0;
		font-size: 0.95rem;
		color: inherit;
		text-decoration: none;
	}

	.location {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		justify-self: start;
		text-align: left;
	}

	.identity a:hover {
		text-decoration: underline;
	}

	.summary-card {
		padding: 1.15rem 1.1rem 1.25rem;
		color: var(--resume-body);
	}

	.summary-card h2,
	.resume-header h2 {
		margin: 0;
		font-size: 1.05rem;
		letter-spacing: 0.03em;
		color: var(--resume-title);
	}

	.summary-card p {
		margin: 0.85rem 0 0;
		font-size: 0.95rem;
		line-height: 1.55;
		color: var(--resume-body);
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
		border-bottom: 1px solid color-mix(in srgb, var(--resume-body) 25%, transparent);
		margin-bottom: 1rem;
	}

	.entries {
		display: grid;
		gap: 1.1rem;
	}

	.entry {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr) ;
		grid-template-areas:
			'period .'
			'title company'
			'description description'
			'tags tags';
		row-gap: 0.3rem;
	}

	.period {
		grid-area: period;
		margin: 0;
		font-size: 0.8rem;
		color: var(--resume-meta);
	}

	.entry h3 {
		grid-area: title;
		margin: 0;
		font-size: 1.65rem;
		line-height: 1.08;
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--resume-title);
	}

	.company {
		grid-area: company;
		margin: 0;
		font-size: 1rem;
		color: #ff6f61;
		justify-self: end;
		text-align: right;
		align-self: end;
	}

	.description {
		display: block;
		margin: 0;
		background: var(--resume-inset);
		border-radius: 0.65rem;
		padding: 0.9rem 0.95rem;
		color: var(--resume-body);
		line-height: 1.55;
		font-size: 0.95rem;
	}

	.entry .description {
		grid-area: description;
	}

	.pill-list {
		grid-area: tags;
		margin: 0.15rem 0 0;
		padding: 0;
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.pill-list li {
		padding: 0.18rem 0.55rem;
		border-radius: 999px;
		border: 1px solid var(--resume-border);
		background: var(--resume-inset);
		color: var(--resume-body);
		font-size: 0.75rem;
		line-height: 1.4;
		white-space: nowrap;
	}

	.compact-entry h3 {
		font-size: 1.25rem;
	}

	.chip-list,
	.language-list,
	.projects {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 0.65rem;
	}

	.chip-list {
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}

	.chip-list li,
	.language-list li {
		background: var(--resume-inset);
		border-radius: 0.65rem;
		padding: 0.85rem 0.95rem;
		color: var(--resume-body);
		line-height: 1.45;
	}

	.language-list li {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		gap: 1rem;
	}

	.language-level {
		color: var(--resume-meta);
		font-size: 0.85rem;
	}

	.project {
		display: grid;
		gap: 0.5rem;
	}

	.project-heading {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.25rem 1rem;
	}

	.project h3 {
		margin: 0;
		font-size: 1.3rem;
		line-height: 1.1;
		font-weight: 600;
		letter-spacing: -0.03em;
		color: var(--resume-title);
	}

	.project-link {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		color: #ff6f61;
		font-size: 0.9rem;
		text-decoration: none;
	}

	.project-link:hover {
		text-decoration: underline;
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

		.entry h3 {
			font-size: 1.35rem;
		}

		.company {
			justify-self: start;
			text-align: left;
		}
	}
	@media print {
		@page {
			margin: 0.75in;
		}

		:global(body) {
			min-height: 100%;
			background: white !important;
			color: #000;
			font-size: 11pt;
			line-height: 1.5;
			--resume-ink: #313843;
			--resume-body: #596273;
			--resume-meta: #7f8695;
			--resume-title: #1f2530;
			--resume-inset: #f3f4f6;
			--resume-card: #fff;
			--resume-border: rgba(115, 122, 145, 0.16);
			--resume-divider: rgba(107, 120, 145, 0.2);
			--resume-shadow: transparent;
		}

		:global(header),
		:global(nav),
		:global(#signIn),
		:global(footer) {
			display: none !important;
			visibility: hidden !important;
			height: 0 !important;
		}

		.resume-page {
			width: 100%;
			margin: 0;
			padding: 0;
			display: block;
			gap: 1rem;
			height: 90vh;
		}

		.sidebar {
			display: grid;
			grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
			gap: 1rem;
			align-items: start;
			break-after: page;
			page-break-after: always;
		}

		.detail-stack,
		.entries,
		.compact-entries,
		.chip-list,
		.language-list,
		.projects {
			gap: 0.75rem;
		}

		.sidebar {
			position: static;
		}

		.summary-card {
			align-self: start;
		}

		.detail-stack {
			display: block;
			break-before: page;
			page-break-before: always;
		}

		.detail-stack > article {
			margin-bottom: 1rem;
		}

		.detail-stack .entries {
			display: block;
		}

		.detail-stack .entries > .entry {
			margin-bottom: 0.75rem;
		}

		.summary-card,
		.resume-section {
			background: white;
			box-shadow: none;
			backdrop-filter: none;
		}


		.profile-card,
		.summary-card,
		.detail-stack > article,
		.entry,
		.project,
		.chip-list,
		.language-list,
		.projects,
		.chip-list li,
		.language-list li {
			break-inside: avoid;
			page-break-inside: avoid;
		}

		.chip-list {
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.chip-list li {
			flex: 1 1 180px;
		}

		.resume-header,
		.entry {
			break-after: avoid;
			page-break-after: avoid;
		}

		.entry {
			display: block;
		}

		.entry .period {
			margin: 0;
		}

		.entry h3 {
			display: inline;
			font-size: 1.2rem;
		}

		.entry .company {
			display: inline;
			margin-left: 0.35rem;
			font-size: 0.95rem;
			text-align: left;
		}

		.entry .description {
			margin-top: 0.35rem;
		}

		.pill-list {
			margin-top: 0.3rem;
			gap: 0.25rem;
			break-inside: avoid;
			page-break-inside: avoid;
		}

		.pill-list li {
			padding: 0.1rem 0.45rem;
			font-size: 8pt;
		}

		.entry .period,
		.entry h3,
		.entry .company,
		.entry .description {
			break-after: avoid;
			page-break-after: avoid;
			break-before: avoid;
			page-break-before: avoid;
		}

		.summary-card p,
		.description,
		.chip-list li,
		.language-list li {
			font-size: 9.5pt;
			line-height: 1.4;
		}

		.profile-card {
			min-height: auto;
			padding: 1rem;
			gap: 0.9rem;
		}

		.profile-card .identity h1 {
			font-size: 1.6rem;
		}

		.profile-card .identity p,
		.profile-card .identity a {
			font-size: 8pt;
			overflow-wrap: anywhere;
		}

		.profile-card .identity {
			width: 100%;
			min-width: 0;
		}

		.profile-card .contact-link,
		.profile-card .location {
			justify-self: stretch;
			max-width: 100%;
			text-align: left;
		}

		.portrait-ring {
			width: 180px;
		}

		.resume-section {
			padding: 1rem 1.05rem;
		}

		.description {
			background: #f3f4f6;
			padding: 0.75rem 0.85rem;
		}
	}
</style>
