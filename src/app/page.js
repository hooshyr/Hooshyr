import { Intro, Achievements, Projects, Biography, Skills } from '@/components/pages/home-page'
import { Header, Footer } from '@/components/ui'

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Intro />
				<Achievements id="achievements" />
				<Projects />
				<Biography />
				<Skills />
			</main>
			<Footer />
		</>
	)
}
