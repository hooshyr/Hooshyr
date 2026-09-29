export const Highlighter = ({ children }) => (
	<span className="
			relative inline-block

			before:absolute
			before:-left-1 before:-top-1 before:right-2 before:bottom-3
			lg:before:-left-2 lg:before:-top-2 lg:before:right-4 lg:before:bottom-6
			2xl:before:-left-4 2xl:before:-top-4 2xl:before:right-8 2xl:before:bottom-8
			before:bg-pink-600
		">
		<span className="relative">
			{children}
		</span>
	</span>
)
