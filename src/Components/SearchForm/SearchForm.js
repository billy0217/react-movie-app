import React from 'react'
import { BiSearchAlt2 } from "react-icons/bi"

const SearchForm = () => {
	return (
		<div className="c-form__wrap">
			<form className="c-form" action='/search=?'>
				<div className="c-form__field">
					<input 
						type="text" 
						className="c-form__input"
						aria-label="search-movie"
					/>
					<button aria-label="submit">
						<BiSearchAlt2 />
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchForm;