import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const Main = () => {
	const { t } = useTranslation('main')

	return (
		<>
			<h4>{t('ГЛАВНАЯ')}</h4>
			<Counter />
		</>
	)
}

export default Main
