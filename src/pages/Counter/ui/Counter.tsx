import { useState } from 'react'
import classes from './Counter.module.scss'
import { Link } from 'react-router-dom'

const Counter = () => {
	const [counter, setCounter] = useState(0)
	return (
		<>
			<div>{counter}</div>
			<button className={classes.btn} onClick={() => setCounter(counter + 1)}>
				increment
			</button>
			<Link to={'/'}>на главную</Link>
		</>
	)
}

export default Counter
