'use client'

import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'

import BGImg from '@/assets/header.jpg'
import LottieHello from '@/assets/lottie-hello.json'
import LottieArrow from '@/assets/lottie-arrow.json'
import { Highlighter } from '@/components/typography'
import { Lottie, WavoButton, WordAnimator } from '@/components/ui'

export const Intro = () => {

	const { ref, inView } = useInView({ triggerOnce: true })

	return (
		<section className="h-[calc(100vh-40px)] pt-20 sm:min-h-[700px] lg:min-h-[900px] relative overflow-hidden">
			<div className="absolute left-0 -top-28 bottom-0 -right-72 sm:-right-60 md:-right-40 lg:-right-28 2xl:-right-28">
				<Image
					src={BGImg}
					alt="Alireza Hooshyar"
					fill
					sizes="100vw"
					className="object-cover object-[right_bottom]"
					priority
				/>
			</div>
			<div className="max-w-6xl mx-auto flex flex-col justify-end lg:justify-center relative h-full">
				<div ref={ref} className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl pl-5 xl:pl-0">
					<h3 className="text-lg md:text-2xl mb-8 lg:mb-14 flex items-end text-gray-200">
						<span className="mr-3">
							<WordAnimator speed={2}>
								Hey! I&apos;m Alireza
							</WordAnimator>
						</span>
						<Lottie src={LottieHello} className="w-10 md:w-14" />
					</h3>
					<h1 className="font-bold mb-4 lg:mb-8 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
						<Highlighter>
							<WordAnimator play={inView} speed={2} delay={500}>
								Front-end
							</WordAnimator>
						</Highlighter>
						&nbsp;
						<span className="block">
							Engineer based in Tehran, Iran.
						</span>
					</h1>
					<div className={`mb-8 lg:mb-16 text-md sm:text-xl text-neutral-400 animate__animated animate__delay-2s ${inView ? "animate__fadeIn" : ""}`}>
						Coding since 2016.
					</div>
					<WavoButton
						as="a"
						href="mailto:hooshyar.net@gmail.com"
						className={`animate__animated animate__delay-1s ${inView ? "animate__fadeInUp" : ""}`}
					>
						Say Hello
						<FontAwesomeIcon className="ml-3" icon={faHand} />
					</WavoButton>
					<div className="w-max ml-24 mb-10">
						<Lottie src={LottieArrow} className="w-60 md:w-80" />
					</div>
				</div>
			</div>
		</section>
	)
}
