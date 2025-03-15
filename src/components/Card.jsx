// import React from 'react';

export default function Card({ gifUrl, gifName }) {
	return (
			<>
				<div className="card">
					{gifUrl && <img src={gifUrl} alt={gifName} width={"100%"} />}
					{gifName && <h1>{gifName}</h1>}
				</div>
			</>
	);
}