import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

describe('Button', () => {
	test('проверка текста', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})
})

describe('Button', () => {
	test('проверка темы ThemeButton.CLEAR', () => {
		render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
		expect(screen.getByText('TEST')).toHaveClass(ButtonTheme.CLEAR)
	})
})
