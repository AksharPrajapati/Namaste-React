import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import AppStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header should be Present", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={AppStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    })

    it("should have image", () => {
        const image = screen.getByAltText("logo");
        expect(image).toBeInTheDocument();
    })

    it("should have Cart Items", () => {
        const cartItems = screen.getByText("Cart (0)");
        expect(cartItems).toBeInTheDocument();
    })

    it("should have Online Status", () => {
        const onlineStatus = screen.getByText("Online Status: ✅");
        expect(onlineStatus).toBeInTheDocument();
    })

    test("should check Login Text", () => {
        const heading = screen.getByText("Login");
        expect(heading).toBeInTheDocument();
    })






})