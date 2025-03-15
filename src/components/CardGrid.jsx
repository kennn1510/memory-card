import {useEffect, useState} from "react";
import Card from './Card';
import "../stylesheets/CardGrid.css";

export function CardGrid() {
	const [cardData, setCardData] = useState([]);

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

	return (
			<>
				<div className="card-grid">
					{cardData.map((card) => {
						<Card key={card.id} gifUrl={card.gifUrl} gifName={card.gifName}/>
					})}
				</div>
			</>
	)
}