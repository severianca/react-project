import { lazy } from 'react'

export const CounterComponent = lazy(() => import('./Counter')) // компоненты должны экспортироваться по дефолту
