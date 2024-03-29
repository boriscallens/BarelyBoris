import vercel from "@sveltejs/adapter-vercel";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({}),
  ],

  kit: {
    // Consult https://kit.svelte.dev/docs/adapter-vercel for more information
    adapter: vercel({}),
  },
};

export default config;
