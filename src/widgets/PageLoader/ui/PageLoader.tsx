import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/Loader/ui/Loader'
import cls from './PageLoader.module.scss'

export const PageLoader: React.FC = () => {
	return (
		<div className={classNames(cls.pageLoader, {}, [])}>
			<Loader />
		</div>
	)
}
