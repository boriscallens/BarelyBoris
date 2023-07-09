import { SvelteKitAuth } from "@auth/sveltekit";
import { dev } from '$app/environment';
import BarelyAuth0 from "$lib/auth/BarelyAuth0";
import FakeProvider from "$lib/auth/FakeCredentials";

let providers = [BarelyAuth0()];
if(dev) providers = [BarelyAuth0(), FakeProvider()];

//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
export const handle = SvelteKitAuth({providers});