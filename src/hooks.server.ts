import { dev } from "$app/environment";
import { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_ISSUER_BASE_URL } from "$env/static/private";
import { SvelteKitAuth } from "@auth/sveltekit";
import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";
import Auth0 from "@auth/core/providers/Auth0"

export const authorization: Handle = async ({ event, resolve }) => {
  // Protect any routes under /authenticated
  if (event.url.pathname.startsWith('/authenticated')) {
  const session = await event.locals.getSession();
        if (!session) {
            throw redirect(303, '/auth');
        }
    }

    // If the request is still here, just proceed as normally
    return await resolve(event, {
        transformPageChunk: ({ html }) => html
    });
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
  SvelteKitAuth({
    debug: dev,
    trustHost: true,
    providers: [
      //@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
      Auth0({
        clientId: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        issuer: AUTH0_ISSUER_BASE_URL
      }),
  ]}),
  authorization,
);