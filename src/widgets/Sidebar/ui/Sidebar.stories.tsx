import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Sidebar } from './Sidebar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const SidebarDark = Template.bind({})
SidebarDark.args = {}
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SidebarLight = Template.bind({})
SidebarLight.args = {}
