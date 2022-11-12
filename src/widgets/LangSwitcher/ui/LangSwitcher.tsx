import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface ILangSwitcherProps {
	className?: string
	short?: boolean
}

export const LangSwitcher = (props: ILangSwitcherProps) => {
	const { className, short } = props

	const { t, i18n } = useTranslation()

	const change = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={change}
			theme={ButtonTheme.CLEAR}
		>
			{short ? t('язык') : t('полный язык')}
		</Button>
	)
}
