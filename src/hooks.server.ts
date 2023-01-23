import { SvelteKitAuth } from "@auth/sveltekit"
import Auth0 from '@auth/core/providers/auth0'

import {
	AUTH0_CLIENT_ID,
	AUTH0_CLIENT_SECRET,
	AUTH0_ISSUER_BASE_URL,
	AUTH_SECRET
} from "$env/static/private"

export const handle = SvelteKitAuth({
	trustHost: true,
	secret: AUTH_SECRET,
	callbackUrl: 'http://127.0.0.1:5173/auth/protected',
  	providers: [
		//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
		Auth0({
			clientId: AUTH0_CLIENT_ID,
			clientSecret: AUTH0_CLIENT_SECRET,
			issuer: AUTH0_ISSUER_BASE_URL,
		})]
})