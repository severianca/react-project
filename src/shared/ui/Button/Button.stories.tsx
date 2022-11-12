import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button, ButtonSize, ButtonTheme } from './Button'
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
	theme: ButtonTheme.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND,
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInvertedDark = Template.bind({})
BackgroundInvertedDark.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND_INVERTED,
}
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Default = Template.bind({})
Default.args = {
	children: 'Text',
}

export const Clear = Template.bind({})
Clear.args = {
	children: 'Text',
	theme: ButtonTheme.CLEAR,
}

export const Outline = Template.bind({})
Outline.args = {
	children: 'Text',
	theme: ButtonTheme.OUTLINE,
}

export const Background = Template.bind({})
Background.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND,
}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
	children: 'Text',
	theme: ButtonTheme.BACKGROUND_INVERTED,
}

export const SquareSizeM = Template.bind({})
SquareSizeM.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.M,
}

export const SquareSizeL = Template.bind({})
SquareSizeL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.L,
}

export const SquareSizeXL = Template.bind({})
SquareSizeXL.args = {
	children: '>',
	theme: ButtonTheme.BACKGROUND_INVERTED,
	square: true,
	size: ButtonSize.XL,
}
