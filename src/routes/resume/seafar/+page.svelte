<svelte:head>
	<title>Motivatiebrief | Boris Callens</title>
	<meta
		name="description"
		content="Motivatiebrief van Boris Callens voor Seafar."
	/>
</svelte:head>

<section class="letter-page" aria-label="Motivatiebrief voor Seafar">
	<article class="letter-card">
		<header class="letter-header">
			<p class="eyebrow">Motivatiebrief</p>
			<h1>Seafar</h1>
		</header>

		<div class="letter-body">
			<p>Beste,</p>

			<p>
				Op basis van mijn ervaring in .NET- en C#-omgevingen zie ik mezelf vooral als iemand die
				goed gedijt in softwareproducten met echte schaal, duidelijke verantwoordelijkheden en veel
				bewegende delen. In mijn meest recente werk heb ik met een internationaal team meegebouwd
				aan iChoosr's New Horizons-platform, waar we een self-hosted Ruby on Rails-oplossing omvormden
				tot een schaalbaar geheel op Azure met klantportalen, backoffice-portalen en meerdere
				integraties. Dat soort trajecten spreekt me aan omdat het niet alleen om coderen gaat, maar
				om eigenaarschap over het volledige productpad.
			</p>

			<p>
				Waar ik sterk in ben, is feature ownership end-to-end. Ik ben gewend om niet alleen een
				technische oplossing te bedenken, maar ook mee te denken over feature discovery, analyse,
				implementatie, integraties, uitrol en de impact op gebruikers en operations. In mijn rol als
				Principal Engineer en Technical Lead lag de nadruk op delivery, afstemming en het scherp
				houden van de richting terwijl team en product groeiden. Ik functioneer daarbij graag
				zelfstandig en autonoom, zonder de nood aan voortdurende sturing, maar wel met voldoende
				afstemming om snelheid en kwaliteit te combineren.
			</p>

			<p>
				Mijn diepste .NET-ervaring zit in grote, langdurig levende productsystemen met echte
				complexiteit. Bij SD Worx werkte ik onder meer aan legacy-omgevingen, multi-tenancy, SQL
				performance en het inbedden van een bestaande C++-toepassing in een ASP.NET MVC-website. Dat
				soort werk heeft me geleerd om niet bang te zijn voor codebases die groot, ouder of gelaagd
				zijn, en om technische keuzes te maken die haalbaar blijven op de schaal van een
				productieomgeving. Mijn profiel sluit daarom sterk aan bij teams die zoeken naar iemand die
				zowel moderniseert als stabiliteit bewaart.
			</p>

			<p>
				Voor desktop-ervaring kan ik op basis van deze samenvatting vooral zeggen dat mijn achtergrond
				stevig in .NET zit, maar de expliciete nadruk in mijn loopbaan ligt eerder op web, platform en
				integratie dan op WPF of WinForms. Ik schreef menig batch en console-applicaties, maar dat is
				waarschijnlijk niet wat u in gedachte had.
			</p>

			<p>
				Wat teamimpact en snelheid betreft, heb ik vooral in omgevingen gewerkt waar concrete resultaten
				belangrijk zijn: een platform live brengen, de schaalbaarheid opkrikken, meerdere frontends op
				een centrale API-laag laten draaien en tegelijk de technische samenhang bewaren. Ik heb ervaren
				hoe je als engineer niet alleen individuele tickets oplost, maar ook de doorlooptijd van een
				team kunt verkorten door de juiste abstrahering, een heldere technische richting en
				samenwerking met product en stakeholders.
			</p>

			<p>
				Bij iChoosr integreerden we met Sendgrid webhooks om onze mail events te monitoren. In piek
				momenten moesten we volumes in grootte ordes van miljoenen events per dag reduceren naar data
				stromen die beheersbaar waren om UX feedback te geven in aanvaardbare tijd. We leunden hiervoor
				op Azure Event Grid en Azure functions om te filteren en reduceren. Verder gebruikten we een
				interne message queue op basis van Azure Service Bus. Dit leerde ons vooral over de subtiliteiten
				van schaal en performantie en de inherente complexiteit bij development en debugging. Kleinere
				integraties zoals Stripe en Vereniging Eigen Huis waren ook onderdeel van het platform.
			</p>

			<p>
				Samengevat breng ik een combinatie mee van C#- en .NET-diepte, ervaring met relatief grote en
				complexe producten, end-to-end verantwoordelijkheid, zelfstandigheid en een praktische focus op
				resultaten. Ik werk graag in teams die technische volwassenheid combineren met tempo, en waar je
				als engineer zichtbaar impact hebt op zowel het systeem als het team eromheen.
			</p>

			<p>
				In desktop frontend zal ik echter nog een leertraject hebben.
			</p>

			<p>Met vriendelijke groet,</p>

			<p>Boris Callens</p>
		</div>
	</article>
</section>

<style>
	:global(body) {
		background:
			radial-gradient(circle at top left, rgba(118, 145, 130, 0.16), transparent 28%),
			linear-gradient(180deg, #f5f7f4 0%, #eef2ef 100%);
	}

	.letter-page {
		width: min(920px, calc(100% - 2rem));
		margin: 0 auto;
		padding: 2rem 0 3rem;
	}

	.letter-card {
		background: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(116, 134, 122, 0.18);
		box-shadow: 0 18px 40px rgba(30, 44, 34, 0.08);
		backdrop-filter: blur(10px);
		border-radius: 1.15rem;
		padding: clamp(1.5rem, 3vw, 2.5rem);
	}

	.letter-header {
		display: grid;
		gap: 0.35rem;
		margin-bottom: 1.4rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid rgba(116, 134, 122, 0.18);
	}

	.eyebrow {
		margin: 0;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-size: 0.75rem;
		color: #5f6f64;
	}

	.letter-header h1 {
		margin: 0;
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1;
		letter-spacing: -0.05em;
		color: #1f2b23;
	}

	.letter-body {
		display: grid;
		gap: 1rem;
		font-size: 1.05rem;
		line-height: 1.75;
		color: #2e3a31;
	}

	.letter-body p {
		margin: 0;
	}

	.letter-body p:first-child,
	.letter-body p:last-child {
		font-weight: 600;
		color: #1f2b23;
	}

	@media (max-width: 720px) {
		.letter-page {
			width: min(100% - 1rem, 920px);
			padding: 1rem 0 2rem;
		}

		.letter-card {
			border-radius: 0.9rem;
		}

		.letter-body {
			font-size: 1rem;
			line-height: 1.68;
		}
	}
</style>