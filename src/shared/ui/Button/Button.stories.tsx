import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ThemeButton } from './Button'
import { Theme } from '../../../app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const DefaultDark = Template.bind({})
DefaultDark.args = {
	children: 'Text',
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearDark = Template.bind({})
ClearDark.args = {
	children: 'Text',
	theme: ThemeButton.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Default = Template.bind({})
Default.args = {
	children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
	children: 'Text',
	theme: ThemeButton.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Text',
	theme: ThemeButton.OUTLINE,
}
