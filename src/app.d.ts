// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	interface PageData {
		session?: {
			user: {
				name: string | null;
				email: string | null;
				image: string | null;
			};
			expires: ISODateString;
		};
	}
	// interface Error {}
	// interface Platform {}
}
