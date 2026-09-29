'use client'

import { useInView } from 'react-intersection-observer'

export const TimelineItem = ({ className = '', title, date, location, description, highlights, url, reverse }) => {

	const {inView, ref} = useInView({triggerOnce: true});

	return (
		<div ref={ref} className={`
				relative
				border-2
				w-[calc(100%-2.5rem)] lg:w-[calc(50%-2.5rem)] p-6

				before:content-['']
				before:absolute before:top-12
				before:w-0 before:h-0
				before:border-[1.2rem] before:border-transparent

				before:right-full
				before:border-r-white
				${reverse ? `` : `
					lg:before:border-r-transparent
					lg:before:right-auto
					lg:before:left-full
					lg:before:border-l-white
				`}

				after:content-['']
				after:absolute after:top-[4.2rem] after:-translate-y-1/2
				after:w-4 after:h-4
				after:rounded-full
				after:bg-white
				after:border-2 after:border-pink-600
				
				after:translate-x-1/2
				after:right-[calc(100%+2.5rem+2px)]
				${reverse ? `` : `
						lg:after:right-auto
						lg:after:-translate-x-1/2
						lg:after:left-[calc(100%+2.5rem+2px)]
					`
				}

				ml-auto
				${reverse ? "" : "lg:ml-0"}

				animate__animated
				${inView ? "animate__fadeInUpSmall" : ""}

				${className}
			`}>
			<h3 className="text-xl font-semibold">
				{title}
			</h3>
			{location && (
				<span className="block text-sm text-neutral-500 mt-1">
					{location}
				</span>
			)}
			<span className={`
						absolute
						lg:top-[4.2rem]
						lg:-translate-y-1/2
						text-pink-600
						whitespace-nowrap

						bottom-[calc(100%+1em)] lg:bottom-auto left-0

						${reverse ? `
								lg:left-auto
								lg:right-[calc(100%+5rem)]
							` : `
								lg:left-[calc(100%+5rem)]
							`
						}
					`}>
				{date}
			</span>
			{description && (
				<p className="text-neutral-400 mt-6">
					{description}
				</p>
			)}
			{highlights?.map((group) => (
				<div key={group.title} className="mt-6">
					<h4 className="font-semibold text-white mb-2">
						{group.title}
					</h4>
					<ul className="list-disc pl-5 space-y-2 text-neutral-400">
						{group.items.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</div>
			))}
			{url && (
				<div className="mt-6">
					<a
						href={url}
						target="_blank"
						rel="noreferrer"
						className="
								text-pink-600 hover:text-pink-800 
								transition-colors duration-150 
								underline
							">
						{url}
					</a>
				</div>
			)}
		</div>
	)
}