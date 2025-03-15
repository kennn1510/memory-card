import {useEffect, useState} from "react";

export default function Card() {
	const [imageSrc, setImageSrc] = useState();
	const [imageName, setImageName] = useState();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=fH3UQo5yPZVd5rieYfAeWlYOkAl5dgJN");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();
				if (json.data && json.data.length > 0) {
					const newImageSrc = json.data[0].images.original.url; // Use original image URL
					const newImageName = json.data[0].title;
					setImageSrc(newImageSrc);
					setImageName(newImageName);
				} else {
					console.error("No data returned from Giphy API");
				}
			} catch (e) {
				console.error("Error fetching Giphy data:", e);
			}
		}
		fetchData();
	}, []);


	return (
			<>
				<div className="card">
					{imageSrc && <img src={imageSrc} alt="Trending Giphy" />}
					{imageName && <h1>{imageName}</h1>}
				</div>
			</>
	);
}