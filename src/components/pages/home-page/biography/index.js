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
						I&apos;m a front-end engineer at Divar, Iran&apos;s largest classifieds marketplace, where I work on web platforms used by millions of people every day.
					</p>
					<p className="mb-4">
						At Divar I architected the Authentication SDK that now powers every web platform in our monorepo, and led the migration from legacy auth to a modern token architecture without a minute of downtime. I also spearheaded the front-end of the interactive Real-Estate Map, which lets people switch between map and list views while searching for a home.
					</p>
					<p className="mb-4">
						Before joining Divar, I was a front-end engineer at Balad, Iran&apos;s map and navigation platform. Earlier, I co-founded Maivan and ChinoMarket, where I learned to own products end to end, from Django back-ends to Next.Js front-ends.
					</p>
					<p className="mb-4">
						It all started in high school with HTML, CSS, and WordPress themes. I went on to study computer engineering at the Ferdowsi University of Mashhad and later earned an MBA in strategy from Kharazmi University, which shapes how I think about the products I build.
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
