import { SvelteKitAuth } from "@auth/sveltekit";
import { dev } from '$app/environment';
import FakeCredentialsProvider from "$lib/Auth/FakeCredentials";
import BarelyAuth0 from "$lib/Auth/BarelyAuth0";

let providers = [BarelyAuth0()];
if(dev) providers = [BarelyAuth0(), FakeCredentialsProvider()];

//@ts-expect-error issue https://github.com/nextauthjs/next-auth/issues/6174
export const handle = SvelteKitAuth({providers});