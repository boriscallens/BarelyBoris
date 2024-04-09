import { AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET, AUTH0_ISSUER_BASE_URL } from "$env/static/private";
import type { Provider } from "@auth/core/providers";
import Auth0, { type Auth0Profile } from "@auth/sveltekit/providers/auth0";

export default function BarelyAuth0(): Provider<Auth0Profile> {
    return Auth0({
        clientId: AUTH0_CLIENT_ID,
        clientSecret: AUTH0_CLIENT_SECRET,
        issuer: AUTH0_ISSUER_BASE_URL,
    });
};