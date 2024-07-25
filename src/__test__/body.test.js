import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import Body from "../components/Body"
import MOCK_DATA from "../mocks/MOCK_DATA.json"
import "@testing-library/jest-dom"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
})

it("should search for burger", async () => {

    await act(async () => {
        render(<BrowserRouter><Body /></BrowserRouter>);
    })

    const totalCards = screen.getAllByTestId("resCard");
    expect(totalCards.length).toBe(8)

    const searchbar = screen.getByTestId("search-box");

    fireEvent.change(searchbar, { target: { value: "biryani" } })

    const filteredCards = screen.getAllByTestId("resCard");
    expect(filteredCards.length).toBe(1)
})