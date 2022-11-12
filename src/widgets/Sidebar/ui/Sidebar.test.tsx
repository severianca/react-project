import { fireEvent, screen } from '@testing-library/react'
import Sidebar from 'widgets/Sidebar/ui/Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender'

describe('Sidebar', () => {
	test('проверка создания sidebar', () => {
		componentRender(<Sidebar />)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
})

describe('Sidebar', () => {
	test('проверка toggle', () => {
		componentRender(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle') // получить кнопку по ее data-testid
		fireEvent.click(toggleBtn) // нажатие на кнопку
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
	})
})
