'use client'

import { useEffect, useRef, useState } from 'react'
import { TimelineItem } from './timeline-item'

export const Timeline = ({ items }) => {

	const [scrolledPercent, setScrolledPercent] = useState(0)
	const timelineRef = useRef(null)

	useEffect(() => {
		// Fill the progress bar up to the middle of the viewport.
		const handleScroll = () => {
			const { top, height } = timelineRef.current.getBoundingClientRect()
			const percent = (window.innerHeight / 2 - top) / height * 100
			setScrolledPercent(Math.min(100, Math.max(0, percent)))
		}

		window.addEventListener('scroll', handleScroll, { passive: true })
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div ref={timelineRef} className="relative flex flex-col">
			<div className="
					absolute
					lg:left-1/2 -translate-x-1/2 top-[4.2rem] bottom-12
					bg-white
					w-1
					rounded-full
					overflow-hidden
				">
				<div className="absolute bg-pink-600 left-0 top-0 right-0" style={{ height: `${scrolledPercent}%` }} />
			</div>
			{items?.map((item, index) => (
				<TimelineItem key={item.title} className="mb-20" reverse={index % 2 === 1} {...item} />
			))}
		</div>
	)
}
