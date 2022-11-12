import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { LangSwitcher } from './LangSwitcher'
import { Theme } from '../../../app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
	title: 'widgets/LangSwitcher',
	component: LangSwitcher,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	args: {
		to: '/',
	},
} as ComponentMeta<typeof LangSwitcher>

const Template: ComponentStory<typeof LangSwitcher> = (args) => <LangSwitcher {...args} />

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Light = Template.bind({})
Light.args = {}
