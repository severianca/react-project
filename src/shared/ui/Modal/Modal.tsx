import { useTheme } from 'app/providers/ThemeProvider'
import React, { ReactNode, useEffect, useRef, useState, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Portal } from 'shared/ui/Portal/Portal'

import cls from './Modal.module.scss'

interface IModelProps {
	className?: string
	children: ReactNode
	isOpen?: boolean
	onClose?: () => void
}

const ANIMATION_DELAY = 300

export const Modal: React.FC<IModelProps> = (props) => {
	const { className, children, isOpen, onClose } = props

	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef<ReturnType<typeof setTimeout>>()
	const { theme } = useTheme()

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	}

	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler()
			}
		},
		[closeHandler]
	)

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown)
		}
		return () => {
			clearTimeout(timerRef.current)
			window.removeEventListener('keydown', onKeyDown)
		}
	}, [isOpen, onKeyDown])

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	return (
		<Portal>
			<div className={classNames(cls.Modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	)
}
