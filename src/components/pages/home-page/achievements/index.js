import { Timeline } from '@/components/ui'
import { WavoTitle } from '@/components/typography'
import { experiences } from '@/data/experiences'

export const Achievements = (props) => {
	return (
		<section {...props}>
			<div className="max-w-6xl mx-auto px-5 xl:px-0 pt-20">
				<WavoTitle className="mb-20">Featured projects</WavoTitle>
				<Timeline items={experiences} />
			</div>
		</section>
	)
}
