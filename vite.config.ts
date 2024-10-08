import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const port = process.env.RADROOTS_WEB_PORT ? Number(process.env.RADROOTS_WEB_PORT) : 3000;

export default defineConfig({
	plugins: [
		sveltekit()
	],
	clearScreen: false,
	server: {
		port,
		strictPort: true,
		host: "localhost",
	},
});
