'use client'

import dynamic from 'next/dynamic'

// lottie-web touches `document` on import, so it can only load in the browser.
const Player = dynamic(
	() => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
	{ ssr: false },
)

// Looping, autoplaying Lottie animation.
export const Lottie = ({ src, className }) => (
	<Player autoplay loop src={src} className={className} />
)
