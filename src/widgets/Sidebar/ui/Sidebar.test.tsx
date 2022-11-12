import { fireEvent, screen } from '@testing-library/react'
import Sidebar from 'widgets/Sidebar/ui/Sidebar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

describe('Sidebar', () => {
	test('проверка создания sidebar', () => {
		renderWithTranslation(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
})

describe('Sidebar', () => {
	test('проверка toggle', () => {
		renderWithTranslation(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle') // получить кнопку по ее data-testid
		fireEvent.click(toggleBtn) // нажатие на кнопку
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
