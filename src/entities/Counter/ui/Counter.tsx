import { counterActions } from 'entities/Counter/model/slice/counterSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'shared/ui/Button/Button'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
	const dispatch = useDispatch()

	const counterValue = useSelector(getCounterValue)

	const increment = () => {
		dispatch(counterActions.increment())
	}

	const decrement = () => {
		dispatch(counterActions.decrement())
	}

	return (
		<div>
			<h1>value = {counterValue}</h1>
			<Button onClick={increment}>+1</Button>
			<Button onClick={decrement}>-1</Button>
		</div>
	)
}
