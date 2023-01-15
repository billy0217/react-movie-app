import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

test("should navigate to movie page when about nav link is clicked", () => {
	render(<MemoryRouter><Header /></MemoryRouter>);
	const aboutLink = screen.getByRole('link', { name: 'Movie' });

	expect(aboutLink).toHaveAttribute('href', '/movie');
});

test("should navigate to Tv Shows page when work nav link is clicked", () => {
	render(<MemoryRouter><Header /></MemoryRouter>);
	const aboutLink = screen.getByRole('link', { name: 'TV Shows' });

	expect(aboutLink).toHaveAttribute('href', '/tv');
});