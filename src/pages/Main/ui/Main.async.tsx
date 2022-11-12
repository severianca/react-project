import { lazy } from 'react'

export const MainComponent = lazy(() => import('./Main')) // компоненты должны экспортироваться по дефолту
