import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import cls from './LangSwitcher.module.scss'

interface ILangSwitcherProps {
	className?: string
}

export const LangSwitcher = (props: ILangSwitcherProps) => {
	const { className } = props

	const { t, i18n } = useTranslation()

	const change = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames(cls.LangSwitcher, {}, [className])}
			onClick={change}
			theme={ThemeButton.CLEAR}
		>
			{t('язык')}
		</Button>
	)
}
