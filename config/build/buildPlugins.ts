import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
	const plugins = [
		new HTMLWebpackPlugin({ template: paths.html }), // для того чтобы в сборке появился index.html
		new webpack.ProgressPlugin(), // для показа прогресса сборки
		new MiniCssExtractPlugin({
			// чтобы sccs были в своих файлах, а не в одной большой куче с tsx
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
		new webpack.DefinePlugin({
			// с помощью него прокидываются глобальные переменные
			__IS_DEV__: JSON.stringify(isDev),
		}),
	]

	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin()) // для обовления без перезагрузки страницы по f5 (хотя и так вроде не перезагружает)
		plugins.push(
			new BundleAnalyzerPlugin({
				openAnalyzer: false, // чтобы не открывался автоматически, а была ссылка в терминале
			}), // для анализа сборки
		)
	}

	return plugins
}
