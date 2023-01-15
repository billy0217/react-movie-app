import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import MovieCard from "../MovieCard";

test("Card heading should be Movie Title", () => {

	const props = {
		id: 1,
		title: 'Movie Title',
		poster_path: '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg',
		release_date: '2016-08-03'
	}

	render(<MemoryRouter><MovieCard data={props}/></MemoryRouter>);

	const MovieCardTitle = screen.getByRole('heading', {level: 3});

	expect(MovieCardTitle.textContent).toBe("Movie Title");
});

test("Card uses correct src", () => {

	const props = {
		id: 1,
		title: 'Movie Title',
		poster_path: '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg',
		release_date: '2016-08-03'
	}

	render(<MemoryRouter><MovieCard data={props}/></MemoryRouter>);

	const MovieCardImage = screen.getByAltText("Movie Title");

	expect(MovieCardImage).toHaveAttribute('src', '/lFSSLTlFozwpaGlO31OoUeirBgQ.jpg');
});

