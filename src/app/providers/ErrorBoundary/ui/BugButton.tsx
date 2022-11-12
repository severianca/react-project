import React, { useEffect, useState } from 'react'
import { Button } from 'shared/ui/Button/Button'

/** Компонент для тестирования */
export const BugButton = () => {
	const [error, setError] = useState(false)

	useEffect(() => {
		if (error) {
			throw new Error()
		}
	}, [error])

	const onThrow = () => {
		setError(true)
	}

	return <Button onClick={onThrow}>throw error</Button>
}
