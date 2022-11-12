import { useTheme, Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<>
			<Button
				className={classNames(cls.ThemeSwitcher, {}, [props.className])}
				onClick={toggleTheme}
				theme={ThemeButton.CLEAR}
			>
				{theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
			</Button>
		</>
	)
}
