import LottieHeartEyes from '@/assets/lottie-heart-eyes.json'
import { WavoTitle } from '@/components/typography'
import { Lottie } from '@/components/ui'

export const Biography = () => {
	return (
		<section id="story" className="py-8">
			<div className="max-w-6xl mx-auto my-auto px-5 xl:px-0">
				<WavoTitle>My story</WavoTitle>
				<div className="text-neutral-400 leading-8 text-lg">
					<p className="mb-4">
						My journey began with a passion for the creation of things, and programming doubled it.
					</p>
					<p className="mb-4">
						I started my programming career in high school with Html and CSS. Subsequently, I learned how to implement PHP and WordPress themes and became an expert in this area.
					</p>
					<p className="mb-4">
						Later on, I started studying computer engineering at the Ferdowsi University of Mashhad, and I decided to focus on my technical skills more seriously and strengthen them. So, I started learning Django and React.Js simultaneously, and after a while, I implemented various projects.
					</p>
					<p className="mb-4">
						Over time, I have been able to work with a variety of technologies and tools, including Django-Rest-Framework, Celery, Nginx, and Django-Channels for the server-side and Redux, TypeScript, Sass, Styled-Components, and Tailwind for the client-side. Also, I&apos;m familiar with Git and Linux-based OSs like ubuntu.
					</p>
					<p className="mb-4">
						After that, Front-End became my primary specialty, and I decided to work full time; I also used more technologies such as NextJS.
					</p>
					<p className="mb-4">
						Due to this journey, I got into web development, which has since become my greatest passion and, fortunately, my job.
					</p>
					<div className="mb-4 flex items-center">
						<span className="mr-2">
							I love what I do!
						</span>
						<Lottie src={LottieHeartEyes} className="w-12" />
					</div>
				</div>
			</div>
		</section>
	)
}
