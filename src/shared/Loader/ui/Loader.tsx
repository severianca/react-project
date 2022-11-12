import React from 'react'
import './Loader.scss'

export const Loader: React.FC = () => {
	return (
		<div className="lds-ellipsis">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	)
}
