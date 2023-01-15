import React from "react";
import { render, screen } from "@testing-library/react";
import SearchForm from "../SearchForm";

test("should render submut button", () => {
	render(<SearchForm />);
	const submitButton = screen.getByRole('button', { name: /submit/i });
	expect(submitButton).toBeInTheDocument();
});

test("should render input field", () => {
	render(<SearchForm />);
	const inputField = screen.getByLabelText("search-movie");
	expect(inputField).toBeInTheDocument();
});
