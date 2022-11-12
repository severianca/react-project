import { lazy } from 'react'

export const AboutComponent = lazy(() => import('./About')) // компоненты должны экспортироваться по дефолту
