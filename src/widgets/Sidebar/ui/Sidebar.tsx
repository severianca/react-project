import { useState } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'
import { useTranslation } from 'react-i18next'

import cls from './Sidebar.module.scss'

interface ISidebarProps {
	className?: string
}

export const Sidebar = (props: ISidebarProps) => {
	const { className } = props

	const { t } = useTranslation()

	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<div className={cls.items}>
				<AppLink className={cls.link} to={RoutePath.main} theme={AppLinkTheme.SECONDARY}>
					<AboutIcon className={cls.icon} />
					<span className={cls.text}>{t('Главная')}</span>
				</AppLink>
				<AppLink className={cls.link} to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
					<MainIcon className={cls.icon} />
					<span className={cls.text}>{t('О сайте')}</span>
				</AppLink>
			</div>

			<Button
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square={true}
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.langSwitcher} short={collapsed} />
			</div>
		</div>
	)
}

export default Sidebar
