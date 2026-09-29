/** @type {import('next').NextConfig} */
const nextConfig = {
	// Static HTML export, deployed to GitHub Pages from /docs (see `pnpm export`).
	output: 'export',
	images: {
		unoptimized: true,
	},
}

export default nextConfig
