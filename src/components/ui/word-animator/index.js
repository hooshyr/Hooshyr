// Splits text into characters that fade in one after another (see `.wa__char` in globals.css).
export const WordAnimator = ({ children, play = true, delay = 0, speed = 1 }) => {

	let charIndex = 0

	return (
		<span className="wa">
			{children?.split(' ').map((word, wordIndex) => (
				<span key={wordIndex}>
					{word.split('').map((char) => {
						charIndex++
						return (
							<span
								key={charIndex}
								className="wa__char"
								style={{
									animationPlayState: play ? 'running' : 'paused',
									animationDelay: `${charIndex * (80 / speed) + delay}ms`,
								}}
							>{char}</span>
						)
					})}
					&nbsp;
				</span>
			))}
		</span>
	)
}
