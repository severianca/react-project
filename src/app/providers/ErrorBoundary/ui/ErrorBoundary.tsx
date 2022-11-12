import React, { ErrorInfo, ReactNode, Suspense } from 'react'
import { PageError } from 'widgets/PageError'
// import { withTranslation } from 'react-i18next'

interface IErrorBoundaryProps {
	children: ReactNode
}

interface ErrorBoundaryState {
	hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: IErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		// Логирование ошибок (добавление на сервер)
		console.log(error, errorInfo)
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props
		if (hasError) {
			// рендерим интерфейс ошибки
			return (
				<Suspense fallback="">
					<PageError />
				</Suspense>
			)
		}

		return children
	}
}

// export default withTranslation()(ErrorBoundary) // если вдруг нужны будут здесь переводы
export default ErrorBoundary
