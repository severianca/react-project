import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation('about')

	return (
		<>
			<h4>{t('О САЙТЕ')}</h4>
		</>
	)
}

export default About
