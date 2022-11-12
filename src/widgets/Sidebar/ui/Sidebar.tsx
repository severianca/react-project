import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'

interface ISidebarProps {
	className?: string
}

export const Sidebar = (props: ISidebarProps) => {
	const { className } = props
	const [collapsed, setCollapsed] = useState(false)

	const onToggle = () => {
		setCollapsed((prev) => !prev)
	}

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<button data-testid="sidebar-toggle" onClick={onToggle}>
				toggle
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.langSwitcher} />
			</div>
		</div>
	)
}

export default Sidebar
