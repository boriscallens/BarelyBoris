import { sveltekit } from '@sveltejs/kit/vite';
import basicSsl from '@vitejs/plugin-basic-ssl'
import type { UserConfig } from 'vite';
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
	let config: UserConfig = {
		plugins: [sveltekit()]
	};

	if (command === 'serve') {
		config.server = {https: true};
		config.plugins?.push(basicSsl());
	}

	return config;
});