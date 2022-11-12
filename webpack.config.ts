import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildPaths, BuildEnv } from './config/build/types/config'
import path from 'path'

const paths: BuildPaths = {
	build: path.resolve(__dirname, 'build'), // путь до места сбора приложения
	entry: path.resolve(__dirname, 'src', 'index.tsx'), // путь для стартовой точки приложения
	html: path.resolve(__dirname, 'public', 'index.html'), // путь до стартовой html-ки
	src: path.resolve(__dirname, 'src'), // путь до папки с исходным кодом
}

export default (env: BuildEnv) => {
	const mode = env.mode || 'development'
	const isDev = mode === 'development'
	const port = env.port || 3000

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
	})
	return config
}
