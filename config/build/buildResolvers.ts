import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js'], // для этих импортов не указываются расширения
		preferAbsolute: true, // Абсолютные пути в приоритете
		modules: [options.paths.src, 'node_modules'],
		mainFiles: ['index'], // главный файл для модуля
		alias: {},
	}
}
