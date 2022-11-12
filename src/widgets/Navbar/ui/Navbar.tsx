import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = (props: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [])}>
			<div className={cls.links}>
				<AppLink className={cls.mainLink} to={'/'} theme={AppLinkTheme.SECONDARY}>
					Главная
				</AppLink>
				<AppLink className={cls.aboutLink} to={'/about'} theme={AppLinkTheme.SECONDARY}>
					О сайте
				</AppLink>
			</div>
		</div>
	)
}
