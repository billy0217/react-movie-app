import React from 'react'

const MovieCard = (props) => {
	return (
		<>
			<div className="c-card__movie">
				<div>
					<img src={props.data.poster_path} alt={props.data.title} />
					<span data-rate="">rate</span>
				</div>
				<h3 className="c-card__movie-title">{props.data.title}</h3>
				<p className="c-card__movie-date">date</p>
			</div>
		</>
	)
}

export default MovieCard