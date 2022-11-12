import { BuildOptions } from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		open: true, // автоматом запускает страницу приложения после сборки
		historyApiFallback: true, // Для того чтобы нормально работал SPA при роутинге
		hot: true, // Чтобы не перезагружать станицу при изменении css
	}
}
