import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'animate.css'
import './globals.css'

// Font Awesome CSS is imported above; don't inject it again at runtime.
config.autoAddCss = false

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	display: 'swap',
	variable: '--font-poppins',
})

const description = 'Hooshyr is a front-end engineer at Divar, based in Tehran, Iran. Previously at Balad.'
const ogDescription = 'Alireza Hooshyar is a front-end engineer at Divar, based in Tehran, Iran. Previously at Balad.'

export const metadata = {
	metadataBase: new URL('https://hooshyr.com'),
	title: 'Alireza Hooshyar',
	description,
	icons: {
		icon: '/favicon.ico',
	},
	manifest: '/manifest.json',
	openGraph: {
		title: 'Alireza Hooshyar',
		description: ogDescription,
		url: '/',
		siteName: 'Hooshyr',
		images: ['/media/logo.png'],
		type: 'website',
		locale: 'en_US',
		alternateLocale: ['fa_IR', 'fa', 'en'],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={poppins.variable}>
			<body className="font-sans text-white bg-black">
				{children}
			</body>
			<GoogleAnalytics gaId="G-59T4Y0QJ0B" />
		</html>
	)
}
