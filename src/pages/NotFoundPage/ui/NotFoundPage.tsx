import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface INotFoundPage {
	className?: string
}

export const NotFoundPage: React.FC<INotFoundPage> = (props) => {
	const { className } = props

	const { t } = useTranslation()

	return <div className={classNames(cls.NotFoundPage, {}, [className])}>{t('страница не найдена')}</div>
}
