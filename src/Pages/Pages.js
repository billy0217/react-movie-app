import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Movies from './Movies/Movies'
import TvShows from './TvShows/TvShows'
import Search from './Search/Search'
import NotFound from './NotFound/NotFound'
import Header from '../Components/Header/Header'


const Pages = () => {
	return (
		<div>
			<Header/>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie' element={<Movies />} />
				<Route path='/tv' element={<TvShows />} />
				<Route path='/search' element={<Search />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default Pages