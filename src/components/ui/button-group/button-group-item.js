export const ButtonGroupItem = ({ active, children, ...rest }) => {
	return (
		<button
			type="button"
			aria-pressed={active}
			className={`
				border-y border-r
				px-3 sm:px-4 py-1 sm:py-2
				first:border-l
				hover:bg-neutral-800
				whitespace-nowrap
				transition-colors duration-300
				${active ? "bg-pink-600 hover:bg-pink-600" : ""}
			`}
			{...rest}
		>
			{children}
		</button>
	)
}
