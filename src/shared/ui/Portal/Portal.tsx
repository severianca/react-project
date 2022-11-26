import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface IPortalProps {
	children: ReactNode // Что телепортируем
	element?: HTMLElement // Куда
}

export const Portal: React.FC<IPortalProps> = (props) => {
	const { children, element = document.body } = props

	return createPortal(children, element)
}
