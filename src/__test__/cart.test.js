import { act, fireEvent, render, screen } from "@testing-library/react"
import MOCK_RES_DATA from "../mocks/MOCK_RES_DATA.json"
import RestaurantPage from "../components/RestaurantPage"
import { Provider } from "react-redux"
import AppStore from "../utils/appStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"
import Cart from "../components/Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_RES_DATA)
    })
})

it("should check cart", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={AppStore}>
                <Header />
                <RestaurantPage />
                <Cart />
            </Provider>
        </BrowserRouter>));

    const button = screen.getByRole("button", { name: "Add +" });

    fireEvent.click(button);

    const cartItem1 = screen.getByText("Cart (1)");
    expect(cartItem1).toBeInTheDocument();

    fireEvent.click(button);

    const cartItem2 = screen.getByText("Cart (2)");
    expect(cartItem2).toBeInTheDocument();

    fireEvent.click(button);

    const cartPageItems = screen.getAllByTestId("cartItem");
    expect(cartPageItems.length).toBe(3);

    const clearCart = screen.getByRole("button", { name: "Clear Cart" });
    fireEvent.click(clearCart);

    const cartPageItemsAfterClear = screen.getByText("Cart is Empty");
    expect(cartPageItemsAfterClear).toBeInTheDocument();
})