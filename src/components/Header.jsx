import "../stylesheets/Header.css"

function HeaderTopLeft() {
	return (
			<>
				<div>
					<h1>Monster Hunter Memory Game</h1>
					<p>Get points by clicking on an image but don't click on any more than once!</p>
				</div>
			</>
	)
}

function HeaderTopRight({score, bestScore}) {
	return (
			<>
				<div>
					<h2>Score: {score}</h2>
					<h2>Best score: {bestScore}</h2>
				</div>
			</>
	)
}

function Header({score, bestScore}) {
		return (
				<>
					<header>
						<HeaderTopLeft></HeaderTopLeft>
						<HeaderTopRight score={score} bestScore={bestScore}></HeaderTopRight>
					</header>
				</>
		)
}

export default Header;