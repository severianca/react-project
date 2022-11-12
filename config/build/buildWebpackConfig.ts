import { BuildOptions } from './types/config'
import webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const { mode, paths, isDev } = options
	return {
		mode,
		entry: paths.entry, // путь для стартовой точки приложения
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true, // класть в build только финальную сборку
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(options),
		devtool: isDev ? 'inline-source-map' : undefined, // чтобы четко видеть где/в каком файле произошла ошибка
		devServer: isDev ? buildDevServer(options) : undefined, // чтобы не приходилось при каждом изменении снова запускать сборку вебпака
	}
}
