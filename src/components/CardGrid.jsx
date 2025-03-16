import {useEffect, useState} from "react";
import Card from './Card';
import "../stylesheets/CardGrid.css";

export function CardGrid({score, setScore, bestScore, setBestScore}) {
	const [cardData, setCardData] = useState([]);

	// Fisher-Yates shuffle algorithm
	const shuffleArray = (array) => {
		const newArray = [...array];
		for (let i = newArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
		}
		return newArray;
	};

	useEffect(() => {
		const fetchGifs = async () => {
			try {
				const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
				const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=monster-hunter&limit=12`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				if (data.data && data.data.length > 0) {
					const gifs = data.data.map((gif) => ({
						id: gif.id,
						gifUrl: gif.images.original.url, // Use original URL
						gifName: gif.title,
					}));
					setCardData(gifs);
				} else {
					console.error("No data returned from Giphy API");
				}
			} catch (error) {
				console.error(error);
			}
		};
		fetchGifs();
	}, [])

	const [clickedCards, setClickedCards] = useState(new Set());

	const updateBestScore = (newScore) => {
		if (newScore > bestScore) {
			setBestScore(newScore);
		}
	};

	const handleCardClick = (cardId) => {
		if (clickedCards.has(cardId)) {
			setScore(0);
			setClickedCards(new Set());
			setCardData(shuffleArray(cardData));
		} else {
			const newClickedCards = new Set(clickedCards);
			newClickedCards.add(cardId);
			setClickedCards(newClickedCards);
			const newScore = score + 1;
			setScore(newScore);
			updateBestScore(newScore);
			setCardData(shuffleArray(cardData));
		}
	}
	return (
			<>
				<div className="card-grid">
					{cardData.map((card) => {
						return <Card key={card.id} gifUrl={card.gifUrl} gifName={card.gifName} onClick={()=>handleCardClick(card.id)} />
					})}
				</div>
			</>
	)
}