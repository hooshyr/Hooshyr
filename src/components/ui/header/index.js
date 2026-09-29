'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import LogoImg from '@/assets/hooshyar.svg'
import { socials } from '@/data/socials'
import { SocialLink } from '../social-link'

export const Header = () => {

	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const checkScroll = () => setScrolled(window.scrollY > 50)

		window.addEventListener('scroll', checkScroll, { passive: true })
		return () => window.removeEventListener('scroll', checkScroll)
	}, [])

	return (
		<header className={`fixed top-0 inset-x-0 flex items-center px-6 py-3 lg:px-12 lg:py-6 z-50 transition-colors duration-300 ${scrolled ? "bg-neutral-900" : ""}`}>
			<div className="w-32 lg:w-40 h-10 relative">
				<Image src={LogoImg} alt="Hooshyar" fill priority />
			</div>
			<nav className="ml-auto">
				{socials.map((social) => (
					<SocialLink key={social.href} {...social} />
				))}
			</nav>
		</header>
	)
}
