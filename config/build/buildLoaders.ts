import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	}

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					[
						'i18next-extract',
						{
							locales: ['ru', 'en'],
							keyAsDefaultValue: true,
						},
					],
				],
			},
		},
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	}

	const sccsLoader = buildCssLoader(options.isDev)

	return [babelLoader, typescriptLoader, sccsLoader, svgLoader, fileLoader]
}
