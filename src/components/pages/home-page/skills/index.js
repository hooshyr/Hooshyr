import { WavoTitle } from '@/components/typography'
import { skills } from '@/data/skills'

export const Skills = () => {
	return (
		<section className="py-8 sm:pb-20">
			<div className="max-w-6xl mx-auto my-auto px-5 xl:px-0">
				<WavoTitle>Skills</WavoTitle>
				<div className="text-neutral-400 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{skills.map((skill) => (
						<div key={skill.title}>
							<h3 className="text-xl font-semibold mb-4 text-white">{skill.title}</h3>
							<ul className="text-neutral-400 font-light leading-10 text-lg mb-6 lg:mb-0">
								{skill.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
