'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Autoplay, Navigation, Scrollbar } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

import { WavoTitle } from '@/components/typography'
import { ButtonGroup, Story } from '@/components/ui'
import { projectFilters, projects } from '@/data/projects'

export const Projects = () => {

	const { inView, ref } = useInView()

	const [filter, setFilter] = useState('')
	const [activeNumber, setActiveNumber] = useState(1)
	const [swiper, setSwiper] = useState(null)

	const filteredProjects = projects.filter((p) => p.meta.toLowerCase().includes(filter))

	// Only autoplay while the slider is on screen.
	useEffect(() => {
		if (!swiper?.autoplay) return
		if (inView) swiper.autoplay.start()
		else swiper.autoplay.stop()
	}, [swiper, inView])

	const handleFilterChange = (value) => {
		setFilter(value)
		setActiveNumber(1)
	}

	return (
		<section id="projects" ref={ref} className="projects flex flex-col py-8">
			<div className="container max-w-6xl mx-auto px-5 xl:px-0">
				<WavoTitle>Earlier projects</WavoTitle>
				<div className="flex items-center mb-3 sm:mb-6 flex-wrap">
					<div className="w-full sm:w-auto mb-3 sm:mb-0">
						<ButtonGroup items={projectFilters} onChange={handleFilterChange} />
					</div>
					<div className="sm:ml-auto">
						{activeNumber} / {filteredProjects.length}
					</div>
				</div>
				<div className="max-w-full relative">
					<Swiper
						// Remount on filter change so the slider restarts from the first slide.
						key={filter}
						modules={[Navigation, Scrollbar, A11y, Autoplay]}
						navigation
						scrollbar={{ draggable: true }}
						autoplay={{ delay: 4000 }}
						spaceBetween={20}
						slidesPerView={1}
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 3,
								spaceBetween: 25,
							},
							1280: {
								slidesPerView: 4,
								spaceBetween: 25,
							},
						}}
						onSwiper={setSwiper}
						onSlideChange={(s) => setActiveNumber(s.realIndex + 1)}
					>
						{filteredProjects.map((project) => (
							<SwiperSlide key={project.title}>
								<Story {...project} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}
