
import { SvelteKitAuth } from "@auth/sveltekit";
import { dev } from '$app/environment';
import { AUTH_TRUST_HOST } from '$env/static/private';
import BarelyAuth0 from "$lib/auth/BarelyAuth0";
import FakeProvider from "$lib/auth/FakeCredentials";

let providers = [BarelyAuth0()];
if(dev) providers = [BarelyAuth0(), FakeProvider()];

export const { handle } = SvelteKitAuth({
  providers,
  trustHost: dev || AUTH_TRUST_HOST === 'true'
});