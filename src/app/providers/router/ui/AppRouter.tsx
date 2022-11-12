import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader/ui/PageLoader'

export const AppRouter = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} />
				))}
			</Routes>
		</Suspense>
	)
}
