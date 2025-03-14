import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls,
				// compilerOptions: {
				// 	// treat all tags with a dash as custom elements
				// 	isCustomElement: (tag) => tag.includes('apex'),
				// },
			},
		}),

		quasar({
			sassVariables: 'src/quasar-variables.scss',
		}),

		createSvgIconsPlugin({
			// Specify the icon folder to be cached
			iconDirs: [path.resolve(process.cwd(), 'src/assets/img/icons')],
			// Specify symbolId format
			symbolId: 'icon-[dir]-[name]',

			/**
			 * custom insert position
			 * @default: body-last
			 */
			// inject: 'body-last' | 'body-first',

			/**
			 * custom dom id
			 * @default: __svg__icons__dom__
			 */
			customDomId: '__svg__icons__dom__',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	},
	build: {
		minify: true,
	},
	server: {
		proxy: {
			'^/.*/patches.min.js': {
				target: 'http://127.0.0.1:3000',
				rewrite: () => '/patches.js',
			},
			'^/(_|api|dv\\d)/': {
				target: 'https://help.docsvision.com',
				changeOrigin: true,
			},

		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/styles/variables.scss";`
			}
		}
	}
})
