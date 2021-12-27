import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {AddItemsButton} from ".";

const handleLoadPosts = jest.fn()
describe("ControlPanel rendering", () => {
	test("renders ControlPanel component", () => {
		render(
		<AddItemsButton
			handleLoadPosts={handleLoadPosts}
		/>
		);
		const addItemButton = screen.queryByText("Load more posts");
		if(addItemButton) {
			userEvent.click(addItemButton);
			expect(handleLoadPosts).toHaveBeenCalledTimes(1);
		}
	});
});