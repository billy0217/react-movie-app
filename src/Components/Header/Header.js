import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'



const Header = () => {
	return (
		<>
			<header className='c-header'>
				<div className='c-header__container'>
					<div className='c-header__logo-wrapper'>
						<Link to={"/"} className="c-header__link">Home</Link>
					</div>
					<nav className="c-nav__wrapper">
						<ul className="c-nav">
							<li className="c-nav__item">
								<NavLink
									to="/movie"
									className="c-nav__item-link c-header__link"
								>
									Movie
								</NavLink>
							</li>
							<li className="c-nav__item">
								<NavLink
									to="/tv"
									className="c-nav__item-link c-header__link"
								>
									TV Shows
								</NavLink>
							</li>
							<li className="c-nav__item">
								<NavLink
									to="/search"
									className="c-nav__item-link c-header__link"
								>
									<BiSearchAlt 
										className="c-nav__item-icon"
									/>
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	)
}

export default Header