import {useState} from "react";
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

function HeaderTopRight() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	return (
			<>
				<div>
					<h2>Score: {score}</h2>
					<h2>Best score: {bestScore}</h2>
				</div>
			</>
	)
}

function Header() {
		return (
				<>
					<header>
						<HeaderTopLeft></HeaderTopLeft>
						<HeaderTopRight></HeaderTopRight>
					</header>
				</>
		)
}

export default Header;