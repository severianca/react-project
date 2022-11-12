import React from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

export const PageError: React.FC = () => {
	const { t } = useTranslation()

	const reloadPage = () => {
		location.reload()
	}

	return (
		<div className={classNames(cls.PageError, {}, [])}>
			<p className={cls.text}>{t('произошла непредвиденная ошибка')}</p>
			<Button className={cls.text} onClick={reloadPage}>
				{t('обновить страницу')}
			</Button>
		</div>
	)
}
