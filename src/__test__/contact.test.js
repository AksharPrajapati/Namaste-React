import { render, screen } from "@testing-library/react"
import Contact from "../components/contact"
import "@testing-library/jest-dom"

test("should load contact Us compoenent", () => {
    render(<Contact />);

    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
})